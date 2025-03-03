<?php
header('Content-Type: application/json');

// 1. Database credentials (adjust to your environment)
$host = 'localhost';    // Usually localhost on XAMPP
$db   = 'busy_barbell'; // Must match the exact name in phpMyAdmin
$user = 'root';         // Default XAMPP user
$pass = '';             // Usually empty in XAMPP
$charset = 'utf8mb4';

// 2. Set up the PDO connection
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
  echo json_encode(['success' => false, 'message' => 'Database connection failed']);
  exit;
}

// 3. Process incoming POST data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $title = isset($_POST['title']) ? trim($_POST['title']) : '';
  $body  = isset($_POST['body']) ? trim($_POST['body']) : '';

  // Simple validation
  if (empty($title) || empty($body)) {
    echo json_encode(['success' => false, 'message' => 'Title and body are required']);
    exit;
  }

  // 4. Insert post into the database
  $stmt = $pdo->prepare("INSERT INTO posts (title, body, created_at) VALUES (?, ?, NOW())");
  if ($stmt->execute([$title, $body])) {
    echo json_encode(['success' => true, 'message' => 'Post created successfully']);
  } else {
    echo json_encode(['success' => false, 'message' => 'Failed to create post']);
  }
} else {
  echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?>