<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    // Recipient email address
    $to = "amirajohnson10@gmail.com";  // Replace with your email address

    // Email subject
    $email_subject = "Contact Form: " . $subject;

    // Email body
    $email_body = "You have received a new message from the contact form on your website.\n\n" .
                  "Here are the details:\n" .
                  "Name: $name\n" .
                  "Email: $email\n\n" .
                  "Message:\n$message";

    // Email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Redirect to a thank you page or show a success message
        echo "Thank you for contacting us. We will get back to you shortly.";
    } else {
        // Show an error message
        echo "There was an error sending your message. Please try again later.";
    }
} else {
    // Show an error message
    echo "Invalid request.";
}
?>
