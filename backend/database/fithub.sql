CREATE DATABASE IF NOT EXISTS fithub;
USE fithub;

CREATE TABLE features (
    id INT PRIMARY KEY AUTO_INCREMENT,
    icon VARCHAR(50) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE benefits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(50) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO features (icon, title, description) VALUES
('🎯', 'Better Form', 'Learn proper exercise technique with step-by-step instructions and safety tips to prevent injuries and maximize results.'),
('👨‍🏫', 'Better Support', 'Get personalized coaching and structured training plans designed for your level, whether you\'re a beginner or advanced.'),
('🥗', 'Better Nutrition', 'Receive tailored meal suggestions and nutrition guidance aligned with your fitness goals and lifestyle.');

INSERT INTO benefits (label, title, description) VALUES
('👶 Beginners', 'Gym Novices', 'New to the gym? Get detailed guidance on proper form, exercise basics, and injury prevention to build confidence from day one.'),
('💪 Intermediate', 'Experienced Lifters', 'Break through plateaus with advanced programming, form refinement, and structured plans from expert coaches.'),
('🥗 Nutrition', 'Diet Support', 'Struggling to align your diet with fitness goals? Get practical, easy-to-follow meal suggestions for muscle gain or fat loss.'),
('💰 Budget', 'Affordable Coaching', 'Get professional coaching without personal trainer costs. FitHub brings expert guidance to your budget.'),
('🏠 Remote', 'Home Training', 'Train at home with clear video tutorials, form guidance, and motivation—no gym membership required.'),
('🎯 Goals', 'Goal Achievement', 'Whether you want to build muscle, lose weight, or get fit, FitHub keeps you motivated and on track.');