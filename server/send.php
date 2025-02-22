<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Очищення вхідних даних
    $name = htmlspecialchars(trim($_POST['name']));
    $surname = htmlspecialchars(trim($_POST['surname']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $text = htmlspecialchars(trim($_POST['text']));

    // Email одержувача
    $to = "lisyuk00@gmail.com"; 
    $subject = "Повідомлення з сайту";

    // Формування листа
    $msg = "👤 Ім'я: $name\n" .
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
