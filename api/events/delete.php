<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../config/database.php';
include_once '../models/Event.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->getConnection();

// Instantiate event object
$event = new Event($db);

// Get posted data
$data = json_decode(file_get_contents("php://input"));

// Check if ID is provided
if(!empty($data->id)) {
    // Set ID to delete
    $event->id = $data->id;

    // Delete the event
    if($event->delete()) {
        // Set response code - 200 ok
        http_response_code(200);

        // Tell the user
        echo json_encode(array(
            "success" => true,
            "message" => "Event was deleted successfully."
        ));
    } else {
        // Set response code - 503 service unavailable
        http_response_code(503);

        // Tell the user
        echo json_encode(array(
            "success" => false,
            "message" => "Unable to delete event."
        ));
    }
} else {
    // Set response code - 400 bad request
    http_response_code(400);

    // Tell the user
    echo json_encode(array(
        "success" => false,
        "message" => "Unable to delete event. ID is required."
    ));
}
?>
