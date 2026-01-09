<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../config/database.php';
include_once '../models/Event.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->getConnection();

// Instantiate event object
$event = new Event($db);

// Get slug from query parameter
$slug = isset($_GET['slug']) ? $_GET['slug'] : '';

if (empty($slug)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Slug parameter is required'
    ]);
    exit();
}

// Normalize slug: ensure it starts with /
if (strpos($slug, '/') !== 0) {
    $slug = '/' . $slug;
}

try {
    // Query event by slug (link field)
    $query = "SELECT * FROM events WHERE link = :slug AND status = 'active' LIMIT 1";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':slug', $slug);
    $stmt->execute();
    
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($row) {
        $event_data = array(
            'id' => $row['id'],
            'title' => $row['title'],
            'date' => $row['event_date'],
            'time' => $row['event_time'],
            'location' => $row['location'],
            'description' => html_entity_decode($row['description']),
            'href' => $row['link'],
            'status' => $row['status'],
            'cta1_label' => $row['cta1_label'],
            'cta1_url' => $row['cta1_url'],
            'cta2_label' => $row['cta2_label'],
            'cta2_url' => $row['cta2_url']
        );
        
        echo json_encode([
            'success' => true,
            'data' => $event_data
        ]);
    } else {
        http_response_code(404);
        echo json_encode([
            'success' => false,
            'message' => 'Event not found'
        ]);
    }
} catch(Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Server error: ' . $e->getMessage()
    ]);
}
?>
