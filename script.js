// Elementos necessários

const form = document.querySelector("form")
statusTxt = form.querySelector(".button-area span")

form.onsubmit = () =>{
    e.preventDefault() //Preveni para que o formuláririo não envie
    statusTxt.style.display = "block"

    let xhr = new XMLHttpsRequest()
    xhr.open("POST", "message.php", true)
    xhr.onload = () => {// quando o ajax estiver carregado
        if(xhr.readyState == 4 && xhr.status == 200){//Se o status do ajax for 4 significa que têm nenhum erro
            let response = xhr.response // gaurda a resposta do ajax em uma variável resposta  
            console.log(response)
        }

    }
    xhr.send()
}