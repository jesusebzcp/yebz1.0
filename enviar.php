  
  <!-- Mail.php
  Esto es lo que meterias en el de enviar tuyo, solo modificas para que se adapte al tuyo -->
  
  <?php
header('Content-Type: text/plain; charset=utf-8');
if(isset( $_POST['name']))
  $name = $_POST['name'];
if(isset( $_POST['phone']))
  $phone = $_POST['phone'];
if(isset( $_POST['email']))
  $email = $_POST['email'];
if(isset( $_POST['message']))
  $message = $_POST['message'];
if(isset( $_POST['subject']))
  $subject = $_POST['subject'];









$content="From: $name \n Email: $email \n Phone: $phone \n Message: $message";
$recipient = "jesusebzcp19@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content,  $mailheader) or die("Error!");
echo "gracias.html";
Header("Location: ./gracias.html");  
?>
