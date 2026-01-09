<?php
// Authentication check - Include this at the top of protected admin pages
session_start();

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    // Not logged in, redirect to login page
    header('Location: login.php');
    exit();
}

// Check session timeout
if (isset($_SESSION['last_activity'])) {
    $inactive_time = time() - $_SESSION['last_activity'];
    
    // 30 minutes timeout
    if ($inactive_time > 1800) {
        // Session expired
        session_unset();
        session_destroy();
        header('Location: login.php?timeout=1');
        exit();
    }
}

// Update last activity time
$_SESSION['last_activity'] = time();
?>
