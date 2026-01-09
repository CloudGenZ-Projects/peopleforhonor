<?php
require_once __DIR__ . '/../bootstrap_env.php';
// Database configuration
class Database {
    // Read credentials from environment with sane defaults for local dev
    private $host = null;
    private $db_name = null;
    private $username = null;
    private $password = null;
    private $conn;

    // Get database connection
    public function getConnection() {
        $this->conn = null;
        $this->host = getenv('DB_HOST') ?: 'localhost';
        $this->db_name = getenv('DB_NAME') ?: 'peopleforhonor';
        $this->username = getenv('DB_USER') ?: 'root';
        $this->password = getenv('DB_PASS') ?: '';

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->exec("set names utf8mb4");
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
