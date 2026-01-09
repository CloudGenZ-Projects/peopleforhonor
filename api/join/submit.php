<?php
// Headers for CORS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database connection
include_once '../config/database.php';

// Get database connection
$database = new Database();
$db = $database->getConnection();

// Get posted data
$data = json_decode(file_get_contents("php://input"));

// Validate email
if(empty($data->email) || !filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(array(
        "success" => false,
        "message" => "Please provide a valid email address."
    ));
    exit();
}

// Prepare SQL - Simple insert
$query = "INSERT INTO join_submissions (email, full_name, interests) 
          VALUES (:email, :full_name, :interests)";

$stmt = $db->prepare($query);

// Clean and bind data
$email = htmlspecialchars(strip_tags($data->email));
$full_name = isset($data->name) ? htmlspecialchars(strip_tags($data->name)) : null;
$interests = isset($data->interests) ? htmlspecialchars(strip_tags($data->interests)) : null;

$stmt->bindParam(':email', $email);
$stmt->bindParam(':full_name', $full_name);
$stmt->bindParam(':interests', $interests);

// Execute
if($stmt->execute()) {
    http_response_code(201);
    echo json_encode(array(
        "success" => true,
        "message" => "Thank you for joining us! We'll be in touch soon."
    ));
} else {
    http_response_code(503);
    echo json_encode(array(
        "success" => false,
        "message" => "Unable to process your submission. Please try again."
    ));
}
?>
