<?php
class JoinSubmission {
    private $conn;
    private $table = 'join_submissions';

    // Properties
    public $id;
    public $email;
    public $full_name;
    public $interests;
    public $status;
    public $source;
    public $created_at;
    public $updated_at;

    // Constructor
    public function __construct($db) {
        $this->conn = $db;
    }

    // Create new submission
    public function create() {
        $query = "INSERT INTO " . $this->table . " 
                  (email, full_name, interests, source) 
                  VALUES 
                  (:email, :full_name, :interests, :source)
                  ON DUPLICATE KEY UPDATE
                  full_name = VALUES(full_name),
                  interests = VALUES(interests),
                  updated_at = CURRENT_TIMESTAMP";

        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->full_name = htmlspecialchars(strip_tags($this->full_name));
        $this->interests = htmlspecialchars(strip_tags($this->interests));
        $this->source = htmlspecialchars(strip_tags($this->source));

        // Bind data
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':full_name', $this->full_name);
        $stmt->bindParam(':interests', $this->interests);
        $stmt->bindParam(':source', $this->source);

        if($stmt->execute()) {
            // Check if it was an insert or update
            if($stmt->rowCount() == 1) {
                $this->id = $this->conn->lastInsertId();
            } else {
                // It was an update, get the ID
                $query = "SELECT id FROM " . $this->table . " WHERE email = :email LIMIT 1";
                $stmt = $this->conn->prepare($query);
                $stmt->bindParam(':email', $this->email);
                $stmt->execute();
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                $this->id = $row['id'];
            }
            return true;
        }

        return false;
    }

    // Get all submissions
    public function getAll() {
        $query = "SELECT * FROM " . $this->table . " 
                  ORDER BY created_at DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        
        return $stmt;
    }

    // Get active submissions
    public function getActive() {
        $query = "SELECT * FROM " . $this->table . " 
                  WHERE status = 'active'
                  ORDER BY created_at DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        
        return $stmt;
    }

    // Get single submission
    public function getSubmission($id) {
        $query = "SELECT * FROM " . $this->table . " 
                  WHERE id = :id LIMIT 1";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($row) {
            $this->id = $row['id'];
            $this->email = $row['email'];
            $this->full_name = $row['full_name'];
            $this->interests = $row['interests'];
            $this->status = $row['status'];
            $this->source = $row['source'];
            $this->created_at = $row['created_at'];
            $this->updated_at = $row['updated_at'];
            
            return true;
        }
        
        return false;
    }

    // Update status
    public function updateStatus() {
        $query = "UPDATE " . $this->table . " 
                  SET status = :status
                  WHERE id = :id";

        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // Bind data
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    // Delete submission
    public function delete() {
        $query = "DELETE FROM " . $this->table . " WHERE id = :id";

        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->id = htmlspecialchars(strip_tags($this->id));

        // Bind id
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    // Get statistics
    public function getStats() {
        $query = "SELECT 
                    COUNT(*) as total_submissions,
                    COUNT(CASE WHEN status = 'active' THEN 1 END) as active_count,
                    COUNT(CASE WHEN status = 'contacted' THEN 1 END) as contacted_count,
                    COUNT(CASE WHEN status = 'unsubscribed' THEN 1 END) as unsubscribed_count,
                    COUNT(CASE WHEN DATE(created_at) = CURDATE() THEN 1 END) as today_count,
                    COUNT(CASE WHEN created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) THEN 1 END) as week_count
                  FROM " . $this->table;

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
?>
