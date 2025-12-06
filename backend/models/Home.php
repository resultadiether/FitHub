<?php
class Home {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getHeroContent() {
        return [
            'title' => 'Your Complete Fitness Journey',
            'description' => 'Master exercises with expert guidance, follow structured coaching plans, and achieve your nutrition goals all in one place.',
            'cta' => [
                'exploreExercises' => '/exercises',
                'getStarted' => '/coaching'
            ]
        ];
    }

    public function getFeatures() {
        $query = "SELECT * FROM features ORDER BY id ASC";
        $result = $this->conn->query($query);
        
        $features = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $features[] = $row;
            }
        }
        
        return $features;
    }

    public function getBenefits() {
        $query = "SELECT * FROM benefits ORDER BY id ASC";
        $result = $this->conn->query($query);
        
        $benefits = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $benefits[] = $row;
            }
        }
        
        return $benefits;
    }

    public function getCtaContent() {
        return [
            'title' => 'Ready to Transform Your Fitness?',
            'description' => 'Join thousands of users on their journey to better form, better support, and better nutrition.',
            'buttons' => [
                [
                    'text' => 'Sign Up Free',
                    'type' => 'primary',
                    'link' => '/signup'
                ],
                [
                    'text' => 'Browse Exercises',
                    'type' => 'secondary',
                    'link' => '/exercises'
                ]
            ]
        ];
    }
}
?>