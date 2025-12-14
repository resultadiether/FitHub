<?php
class User {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function login($email, $password) {
        $email = $this->conn->real_escape_string($email);
        $query = "SELECT id, name, email, password FROM users WHERE email = '$email' LIMIT 1";
        $result = $this->conn->query($query);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row['password'])) {
                $token = bin2hex(random_bytes(32));
                return [
                    'success' => true,
                    'token' => $token,
                    'user' => [
                        'id' => $row['id'],
                        'name' => $row['name'],
                        'email' => $row['email']
                    ]
                ];
            }
        }

        return ['success' => false, 'message' => 'Invalid email or password'];
    }

    public function signup($data) {
        $name = $this->conn->real_escape_string($data['name'] ?? '');
        $email = $this->conn->real_escape_string($data['email'] ?? '');
        $password = password_hash($data['password'] ?? '', PASSWORD_BCRYPT);

        $query = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
        
        if ($this->conn->query($query)) {
            return ['success' => true, 'message' => 'Account created successfully'];
        }
        return ['success' => false, 'message' => 'Error creating account'];
    }
}
?>