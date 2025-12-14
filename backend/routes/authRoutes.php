<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

require_once __DIR__ . '/../config/Database.php';
require_once __DIR__ . '/../models/User.php';

$database = new Database();
$db = $database->connect();
$user = new User($db);

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($method === 'POST' && strpos($path, 'login') !== false) {
    $data = json_decode(file_get_contents('php://input'), true);
    $result = $user->login($data['email'] ?? '', $data['password'] ?? '');
    echo json_encode($result);
} elseif ($method === 'POST' && strpos($path, 'signup') !== false) {
    $data = json_decode(file_get_contents('php://input'), true);
    $result = $user->signup($data);
    echo json_encode($result);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
