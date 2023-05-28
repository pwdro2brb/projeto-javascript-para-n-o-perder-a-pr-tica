<?php
    //valores do formulário

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){ // Se o campo email e mensagem estiverem vazios

    }else{
        echo "O email e a mensagem são campos obrigatórios";
    }
?>