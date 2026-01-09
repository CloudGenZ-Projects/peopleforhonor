<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
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

// Make sure data is not empty
if(
    !empty($data->id) &&
    !empty($data->title) &&
    !empty($data->event_date)
) {
    // Set event properties
    $event->id = $data->id;
    $event->title = $data->title;
    $event->event_date = $data->event_date;
    $event->event_time = $data->event_time ?? null;
    $event->location = $data->location ?? null;
    $event->description = $data->description ?? null;
    $event->link = $data->link ?? null;
    $event->status = $data->status ?? 'active';
    $event->cta1_label = $data->cta1_label ?? null;
    $event->cta1_url = $data->cta1_url ?? null;
    $event->cta2_label = $data->cta2_label ?? null;
    $event->cta2_url = $data->cta2_url ?? null;

    // Update the event
    if($event->update()) {
        // Set response code - 200 ok
        http_response_code(200);

        // Tell the user
        echo json_encode(array(
            "success" => true,
            "message" => "Event was updated successfully."
        ));
    } else {
        // Set response code - 503 service unavailable
        http_response_code(503);

        // Tell the user
        echo json_encode(array(
            "success" => false,
            "message" => "Unable to update event."
        ));
    }
} else {
    // Set response code - 400 bad request
    http_response_code(400);

    // Tell the user
    echo json_encode(array(
        "success" => false,
        "message" => "Unable to update event. ID, title and date are required."
    ));
}
?>
