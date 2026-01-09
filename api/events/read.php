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

// Get active events only (for public display)
$result = $event->getActiveEvents();
$num = $result->rowCount();

// Check if any events
if($num > 0) {
    $events_arr = array();
    $events_arr['data'] = array();
    $events_arr['success'] = true;

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        
        $event_item = array(
            'id' => $id,
            'title' => $title,
            'date' => $event_date,
            'time' => $event_time,
            'location' => $location,
            'description' => html_entity_decode($description),
            'href' => $link,
            'status' => $status,
            'cta1_label' => $cta1_label,
            'cta1_url' => $cta1_url,
            'cta2_label' => $cta2_label,
            'cta2_url' => $cta2_url
        );

        array_push($events_arr['data'], $event_item);
    }

    // Turn to JSON & output
    echo json_encode($events_arr);
} else {
    // No events
    echo json_encode(
        array(
            'success' => true,
            'data' => array(),
            'message' => 'No events found'
        )
    );
}
?>
