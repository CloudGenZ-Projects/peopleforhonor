<?php
// Admin authentication configuration
// Change these credentials for production!

define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD', 'admin'); // Change this password!

// Password hashing (for security)
// In production, store hashed passwords
define('ADMIN_PASSWORD_HASH', password_hash(ADMIN_PASSWORD, PASSWORD_DEFAULT));

// Session timeout (30 minutes)
define('SESSION_TIMEOUT', 1800);
?>
