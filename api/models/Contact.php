<?php
class ContactMessage {
    private $conn;
    private $table = 'contact_messages';

    public $id;
    public $first_name;
    public $last_name;
    public $email;
    public $phone;
    public $service;
    public $message;
    public $created_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Create a new contact message
    public function create() {
        $sql = "INSERT INTO {$this->table} (first_name, last_name, email, phone, service, message)
                VALUES (:first_name, :last_name, :email, :phone, :service, :message)";
        $stmt = $this->conn->prepare($sql);

        // sanitize
        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->last_name  = htmlspecialchars(strip_tags($this->last_name));
        $this->email      = htmlspecialchars(strip_tags($this->email));
        $this->phone      = $this->phone !== null ? htmlspecialchars(strip_tags($this->phone)) : null;
        $this->service    = $this->service !== null ? htmlspecialchars(strip_tags($this->service)) : null;
        $this->message    = htmlspecialchars(strip_tags($this->message));

        // bind
        $stmt->bindParam(':first_name', $this->first_name);
        $stmt->bindParam(':last_name',  $this->last_name);
        $stmt->bindParam(':email',      $this->email);
        $stmt->bindParam(':phone',      $this->phone);
        $stmt->bindParam(':service',    $this->service);
        $stmt->bindParam(':message',    $this->message);

        return $stmt->execute();
    }
}
?>
