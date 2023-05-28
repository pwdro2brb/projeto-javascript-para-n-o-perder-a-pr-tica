// Elementos necessários

const form = document.querySelector("form")
statusTxt = form.querySelector(".button-area span")

form.onsubmit = (e) =>{
    e.preventDefault() //Preveni para que o formuláririo não envie
    statusTxt.style.color = "#0D6EFD"
    statusTxt.style.display = "block"

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "message.php", true)
    xhr.onload = () => {// quando o ajax estiver carregado
        if(xhr.readyState == 4 && xhr.status == 200){//Se o status do ajax for 4 significa que têm nenhum erro
            let response = xhr.response // gaurda a resposta do ajax em uma variável resposta  
            //Se a resposta for um erro, troca aa menssagem em baixo para vermelho senão reinicia o formulário 
            if(response.indexOf("O email e a mensagem são campos obrigatórios") != -1 || response.indexOf("Seu email precisa ser válido para prosseguir") || response.indexOf("Desculpe, falha ao enviar a meenssagem!")){
                statusTxt.style.color = "red"
            }else{
                form.reset()
                setTimeout(()=>{
                    statusTxt.style.display= "none"
                }, 3000)
            }
            statusTxt.innerText = response
        }

    }
    let formData = new FormData(form) // Cria um novo objeto para o Formdata. Esse objeto é usado para enviar os dados do formulário
    xhr.send(formData) // Enviando dados do formulário 
}