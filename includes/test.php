<?php
include 'db.php';

if (isset($_POST['btn_update'])) {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $middlename = $_POST['middlename'];
    $address = $_POST['address'];
    $contact = $_POST['contact'];
    
    $stmt = $pdo->prepare("UPDATE students SET name = ?, surname = ?, middlename = ?, address = ?, contact_number = ? WHERE id = ?");
    $stmt->execute([$name, $surname, $middlename, $address, $contact, $id]);
    
    header("Location: ../public/index.php?status=updated");
    exit();
}
?>
