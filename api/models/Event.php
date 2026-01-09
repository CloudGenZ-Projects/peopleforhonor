<?php
class Event {
    private $conn;
    private $table = 'events';

    // Event properties
    public $id;
    public $title;
    public $event_date;
    public $event_time;
    public $location;
    public $description;
    public $link;
    public $status;
    public $cta1_label;
    public $cta1_url;
    public $cta2_label;
    public $cta2_url;
    public $created_at;
    public $updated_at;

    // Constructor
    public function __construct($db) {
        $this->conn = $db;
    }

    // Get all active events
    public function getActiveEvents() {
        $query = "SELECT * FROM " . $this->table . " 
                  WHERE status = 'active' 
                  AND event_date >= CURDATE()
                  ORDER BY event_date ASC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        
        return $stmt;
    }

    // Get all events (admin)
    public function getAllEvents() {
        $query = "SELECT * FROM " . $this->table . " 
                  ORDER BY event_date DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        
        return $stmt;
    }

    // Get single event
    public function getEvent($id) {
        $query = "SELECT * FROM " . $this->table . " 
                  WHERE id = :id LIMIT 1";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($row) {
            $this->id = $row['id'];
            $this->title = $row['title'];
            $this->event_date = $row['event_date'];
            $this->event_time = $row['event_time'];
            $this->cta1_label = $row['cta1_label'];
            $this->cta1_url = $row['cta1_url'];
            $this->cta2_label = $row['cta2_label'];
            $this->cta2_url = $row['cta2_url'];
            $this->location = $row['location'];
            $this->description = $row['description'];
            $this->link = $row['link'];
            $this->status = $row['status'];
            $this->created_at = $row['created_at'];
            $this->updated_at = $row['updated_at'];
            
            return true;
        }
        
        return false;
    }

    // Create event
    public function create() {
        $query = "INSERT INTO " . $this->table . " 
                  (title, event_date, event_time, location, description, link, status, cta1_label, cta1_url, cta2_label, cta2_url) 
                  VALUES 
                  (:title, :event_date, :event_time, :location, :description, :link, :status, :cta1_label, :cta1_url, :cta2_label, :cta2_url)";

        $stmt = $this->conn->prepare($query);

        // Clean data (Required fields)
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->event_date = htmlspecialchars(strip_tags($this->event_date));
        $this->status = htmlspecialchars(strip_tags($this->status));

        // Clean data (Optional fields - MUST Check for null first to avoid PHP Errors)
        $this->event_time = !empty($this->event_time) ? htmlspecialchars(strip_tags($this->event_time)) : null;
        $this->location = !empty($this->location) ? htmlspecialchars(strip_tags($this->location)) : null;
        $this->description = !empty($this->description) ? htmlspecialchars(strip_tags($this->description)) : null;
        $this->link = !empty($this->link) ? htmlspecialchars(strip_tags($this->link)) : null;
        
        $this->cta1_label = !empty($this->cta1_label) ? htmlspecialchars(strip_tags($this->cta1_label)) : null;
        $this->cta1_url = !empty($this->cta1_url) ? htmlspecialchars(strip_tags($this->cta1_url)) : null;
        $this->cta2_label = !empty($this->cta2_label) ? htmlspecialchars(strip_tags($this->cta2_label)) : null;
        $this->cta2_url = !empty($this->cta2_url) ? htmlspecialchars(strip_tags($this->cta2_url)) : null;

        // Bind data
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':event_date', $this->event_date);
        $stmt->bindParam(':event_time', $this->event_time);
        $stmt->bindParam(':location', $this->location);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':link', $this->link);
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':cta1_label', $this->cta1_label);
        $stmt->bindParam(':cta1_url', $this->cta1_url);
        $stmt->bindParam(':cta2_label', $this->cta2_label);
        $stmt->bindParam(':cta2_url', $this->cta2_url);

        if($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }

        return false;
    }

    // Update event
    public function update() {
        $query = "UPDATE " . $this->table . " 
                  SET title = :title,
                      event_date = :event_date,
                      event_time = :event_time,
                      location = :location,
                      description = :description,
                      link = :link,
                      status = :status,
                      cta1_label = :cta1_label,
                      cta1_url = :cta1_url,
                      cta2_label = :cta2_label,
                      cta2_url = :cta2_url
                  WHERE id = :id";

        $stmt = $this->conn->prepare($query);

        // Clean data (Required)
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->event_date = htmlspecialchars(strip_tags($this->event_date));
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // Clean data (Optional - Check for empty)
        $this->event_time = !empty($this->event_time) ? htmlspecialchars(strip_tags($this->event_time)) : null;
        $this->location = !empty($this->location) ? htmlspecialchars(strip_tags($this->location)) : null;
        $this->description = !empty($this->description) ? htmlspecialchars(strip_tags($this->description)) : null;
        $this->link = !empty($this->link) ? htmlspecialchars(strip_tags($this->link)) : null;

        $this->cta1_label = !empty($this->cta1_label) ? htmlspecialchars(strip_tags($this->cta1_label)) : null;
        $this->cta1_url = !empty($this->cta1_url) ? htmlspecialchars(strip_tags($this->cta1_url)) : null;
        $this->cta2_label = !empty($this->cta2_label) ? htmlspecialchars(strip_tags($this->cta2_label)) : null;
        $this->cta2_url = !empty($this->cta2_url) ? htmlspecialchars(strip_tags($this->cta2_url)) : null;

        // Bind data
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':event_date', $this->event_date);
        $stmt->bindParam(':event_time', $this->event_time);
        $stmt->bindParam(':location', $this->location);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':link', $this->link);
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':cta1_label', $this->cta1_label);
        $stmt->bindParam(':cta1_url', $this->cta1_url);
        $stmt->bindParam(':cta2_label', $this->cta2_label);
        $stmt->bindParam(':cta2_url', $this->cta2_url);
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    // Delete event
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
}
?>