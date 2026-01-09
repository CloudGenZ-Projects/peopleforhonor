<?php
// Database setup script - Run this to create the DB and all required tables

// Load environment variables
require_once __DIR__ . '/bootstrap_env.php';

echo "Setting up People for Honor database...\n\n";

try {
    // Get database credentials from .env file
    $host = $_ENV['DB_HOST'];
    $db_name = $_ENV['DB_NAME'];
    $username = $_ENV['DB_USER'];
    $password = $_ENV['DB_PASS'];
    
    if (empty($db_name) || empty($username)) {
        throw new Exception("Database credentials not found in .env file");
    }
    
    echo "📋 Using database: $db_name on host: $host\n";
    echo "👤 Using username: $username\n\n";
    
    // Connect to MySQL server (without database selected first)
    $conn = new PDO("mysql:host=$host", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create database if it doesn't exist
    $conn->exec("CREATE DATABASE IF NOT EXISTS $db_name");
    echo "✓ Database '$db_name' ready\n";
    
    // Select the database
    $conn->exec("USE $db_name");
    
    // Create events table
    $sqlEvents = "CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    event_time VARCHAR(100),
    location VARCHAR(255),
    description TEXT,
    link VARCHAR(255),
    cta1_label VARCHAR(255) NULL,
    cta1_url VARCHAR(255) NULL,
    cta2_label VARCHAR(255) NULL,
    cta2_url VARCHAR(255) NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_event_date (event_date)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
    
    $conn->exec($sqlEvents);
    echo "✓ Events table ready\n";
    
    // Seed events if empty
$stmt = $conn->query("SELECT COUNT(*) FROM events");
$eventsCount = $stmt->fetchColumn();
if ($eventsCount == 0) {
    $insertEvents = "INSERT INTO events (
        title,
        event_date,
        event_time,
        location,
        description,
        link,
        cta1_label,
        cta1_url,
        cta2_label,
        cta2_url
    ) VALUES
    (
        'African Caribbean Cultural Dance Exchange',
        '2025-09-06',
        '1:00 PM - 4:00 PM',
        '33 Quill Street, Ottawa',
        'Monthly community dance exchange celebrating culture, joy, and connectedness.',
        '/african-caribbean-cultural-dance-exchange',
        NULL,
        NULL,
        NULL,
        NULL
    ),
    (
        'Employment Workshop: Resume & Interview Skills',
        '2025-11-15',
        '10:00 AM - 12:00 PM',
        'Ottawa Community Center',
        'Hands-on workshop to strengthen your resume and prepare for Canadian-style interviews.',
        NULL,
        NULL,
        NULL,
        NULL,
        NULL
    ),
    (
        'Cultural & Community Night',
        '2025-11-22',
        '6:00 PM - 9:00 PM',
        'Lansdowne Park',
        'An evening of music, food, and connection for newcomers and community members.',
        NULL,
        NULL,
        NULL,
        NULL,
        NULL
    ),
    (
        'Mentorship Info Session',
        '2025-12-03',
        '2:00 PM - 4:00 PM',
        'People for Honor Office',
        'Learn how our mentorship program connects newcomers with experienced professionals.',
        NULL,
        NULL,
        NULL,
        NULL,
        NULL
    )";
    $conn->exec($insertEvents);
    echo "✓ Seeded sample events\n";
} else {
    echo "• Events table already has data ($eventsCount rows)\n";
}

    // Create join_submissions table (Join Us form)
    $sqlJoin = "CREATE TABLE IF NOT EXISTS join_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        full_name VARCHAR(255),
        interests TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_email (email)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

    $conn->exec($sqlJoin);
    echo "✓ Join submissions table ready\n";

    // Create contact_messages table (Contact form)
    $sqlContact = "CREATE TABLE IF NOT EXISTS contact_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        service VARCHAR(50),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

    $conn->exec($sqlContact);
    echo "✓ Contact messages table ready\n";

    echo "\n✅ Database setup complete!\n";
    echo "API endpoints:\n";
    echo " - Events (public):   /api/events/read.php\n";
    echo " - Join Us (submit):  /api/join/submit.php\n";
    echo " - Contact (submit):  /api/contact/submit.php\n";

} catch(PDOException $e) {
    echo "❌ Setup failed: " . $e->getMessage() . "\n";
    echo "\n💡 Make sure your .env file has correct database credentials:\n";
    echo "   DB_HOST=localhost\n";
    echo "   DB_NAME=your_database_name\n";
    echo "   DB_USER=your_database_user\n";
    echo "   DB_PASS=your_database_password\n";
    exit(1);
} catch(Exception $e) {
    echo "❌ Error: " . $e->getMessage() . "\n";
    exit(1);
}
?>
