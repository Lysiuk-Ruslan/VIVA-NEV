<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Очищення вхідних даних
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : "";
    $surname = isset($_POST['surname']) ? htmlspecialchars(trim($_POST['surname'])) : "";
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : "";
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : "";
    $text = isset($_POST['text']) ? htmlspecialchars(trim($_POST['text'])) : "";
    $page = isset($_POST['page']) ? htmlspecialchars(trim($_POST['page'])) : "Невідома сторінка";

    if (empty($name) || empty($surname) || empty($phone) || empty($email) || empty($text)) {
        echo "<p>❌ Всі поля повинні бути заповнені.</p>";
        exit;
    }

    // Email одержувача
    $to = "lisyuk00@gmail.com"; 
    $subject = "Повідомлення з сайту ($page)";

    // Формування листа
    $msg = "📌 Форма відправлена зі сторінки: $page\n\n" .
           "👤 Ім'я: $name\n" .
           "🧑‍💼 Прізвище: $surname\n" .
           "📞 Телефон: $phone\n" .
           "📧 Пошта: $email\n" .
           "💬 Текст повідомлення:\n$text\n\n" .
           "📅 Дата: " . date("d.m.Y") . "\n" .
           "🕒 Час: " . date("H:i");

    // Заголовки листа
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Відправка
    if (mail($to, $subject, $msg, $headers)) {
        echo "<p>✅ Ваша заявка відправлена, очікуйте дзвінка адміністратора</p>";
    } else {
        echo "<p>❌ Помилка відправки. Спробуйте ще раз.</p>";
    }
} else {
    echo "<p>❌ Доступ заборонено.</p>";
}
?>
