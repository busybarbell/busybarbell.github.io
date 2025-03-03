<?php
// Database connection details
$host = 'localhost';    // Usually localhost on XAMPP
$db   = 'busy_barbell'; // Must match the exact name in phpMyAdmin
$user = 'root';         // Default XAMPP user
$pass = '';             // Usually empty in XAMPP
$charset = 'utf8mb4';

try {
    // Connect to DB with PDO using the correct variables
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Query the 'posts' table for id, title, and body
    $stmt = $pdo->query("SELECT id, title, body FROM posts ORDER BY id DESC");
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return JSON-encoded array of posts
    echo json_encode($posts);
} catch (PDOException $e) {
    // If there's a database error, return an error message
    echo json_encode([
        'error'   => true,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>