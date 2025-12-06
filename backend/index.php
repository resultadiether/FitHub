<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$request = str_replace('/FitHub/backend/', '', $request);
$parts = explode('/', trim($request, '/'));

$route = $parts[0] ?? 'home';

switch ($route) {
    case 'home':
        require_once __DIR__ . '/routes/homeRoutes.php';
        break;
    
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Route not found']);
        break;
}
?>