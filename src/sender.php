<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "lisyuk00@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Повідомлення з сайту";

	
	$msg="
    Ім'я: $name /n
    Прізвище: $surname /n
    Телефон: $phone /n
    Пошта: $email /n
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Ваша заявка відправлена, очікуйте дзвінка адміністратора</p>
