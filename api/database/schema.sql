-- Create database
CREATE DATABASE IF NOT EXISTS peopleforhonor;
USE peopleforhonor;

-- Events table
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    event_time VARCHAR(100),
    location VARCHAR(255),
    description TEXT,
    link VARCHAR(255),
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_event_date (event_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample events
INSERT INTO events (title, event_date, event_time, location, description, link) VALUES
('African Caribbean Cultural Dance Exchange', '2025-09-06', '1:00 PM - 4:00 PM', '33 Quill Street, Ottawa', 'Monthly community dance exchange celebrating culture, joy, and connectedness.', '/african-caribbean-cultural-dance-exchange'),
('Employment Workshop: Resume & Interview Skills', '2025-11-15', '10:00 AM - 12:00 PM', 'Ottawa Community Center', 'Hands-on workshop to strengthen your resume and prepare for Canadian-style interviews.', NULL),
('Cultural & Community Night', '2025-11-22', '6:00 PM - 9:00 PM', 'Lansdowne Park', 'An evening of music, food, and connection for newcomers and community members.', NULL),
('Mentorship Info Session', '2025-12-03', '2:00 PM - 4:00 PM', 'People for Honor Office', 'Learn how our mentorship program connects newcomers with experienced professionals.', NULL);
