<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

require_once __DIR__ . '/../config/Database.php';
require_once __DIR__ . '/../models/Home.php';

$database = new Database();
$db = $database->connect();
$home = new Home($db);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $action = isset($_GET['action']) ? $_GET['action'] : 'all';

    switch ($action) {
        case 'hero':
            echo json_encode($home->getHeroContent());
            break;
        
        case 'features':
            echo json_encode($home->getFeatures());
            break;
        
        case 'benefits':
            echo json_encode($home->getBenefits());
            break;
        
        case 'cta':
            echo json_encode($home->getCtaContent());
            break;
        
        case 'all':
        default:
            echo json_encode([
                'hero' => $home->getHeroContent(),
                'features' => $home->getFeatures(),
                'benefits' => $home->getBenefits(),
                'cta' => $home->getCtaContent()
            ]);
            break;
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>