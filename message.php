<?php
    //valores do formulário

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){ // Se o campo email e mensagem estiverem vazios
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // Se o email do usuário é válido
            $receiver = "codingnepalweb@gmail.com"; // email rebe o endereço de email
            $subject = "From: $name <$email>"; // Assunto do email. O assunto vai aparecer assim: PedroHenrique <adefc@gmail.com>
            // unindo todos os dados do usuário dentro de uma variável body. \n é para uma nova linha
            $body = "Nome: $name\nEmail: $email\nTelefone: $website\nsite: $phone\nMenssagem: $message\n\n Anteciosamente, \n$name"
            $sender = "From: $email"; // Envia o email
            if (mail($receiver, $subject, $body, $sender)){// mail() é uma função do php para enviar o email
                echo "Mensagem enviada com sucesso!!!";
            }else{
                echo "Desculpe, falha ao enviar a meenssagem!";
            }
        }else{
            echo "Seu email precisa ser válido para prosseguir";
        }
    }else{
        echo "O email e a mensagem são campos obrigatórios";
    }
?>