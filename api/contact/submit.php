<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include_once '../config/database.php';
include_once '../models/Contact.php';

// DB
$database = new Database();
$db = $database->getConnection();
if (!$db) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit();
}

// Parse input
$input = json_decode(file_get_contents('php://input'));

// Validate
if (
    empty($input->first_name) ||
    empty($input->last_name) ||
    empty($input->email) ||
    empty($input->message) ||
    !filter_var($input->email, FILTER_VALIDATE_EMAIL)
) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide first_name, last_name, a valid email, and message.'
    ]);
    exit();
}

try {
    $contact = new ContactMessage($db);
    $contact->first_name = $input->first_name;
    $contact->last_name  = $input->last_name;
    $contact->email      = $input->email;
    $contact->phone      = isset($input->phone) ? $input->phone : null;
    $contact->service    = isset($input->service) ? $input->service : null;
    $contact->message    = $input->message;

    if ($contact->create()) {
        http_response_code(201);
        echo json_encode([
            'success' => true,
            'message' => 'Your message has been received. We will get back to you shortly.'
        ]);
    } else {
        http_response_code(503);
        echo json_encode([
            'success' => false,
            'message' => 'Unable to save your message. Please try again later.'
        ]);
    }
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Server error: ' . $e->getMessage()
    ]);
}
