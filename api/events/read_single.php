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

// Get ID from URL
$id = isset($_GET['id']) ? $_GET['id'] : null;

if($id) {
    // Get event
    if($event->getEvent($id)) {
        // Create array
        $event_arr = array(
            'success' => true,
            'data' => array(
                'id' => $event->id,
                'title' => $event->title,
                'event_date' => $event->event_date,
                'event_time' => $event->event_time,
                'location' => $event->location,
                'description' => html_entity_decode($event->description),
                'link' => $event->link,
                'status' => $event->status,
                'created_at' => $event->created_at,
                'updated_at' => $event->updated_at
            )
        );

        // Make JSON
        echo json_encode($event_arr);
    } else {
        // No event found
        echo json_encode(
            array(
                'success' => false,
                'message' => 'Event not found'
            )
        );
    }
} else {
    // No ID provided
    echo json_encode(
        array(
            'success' => false,
            'message' => 'No event ID provided'
        )
    );
}
?>
