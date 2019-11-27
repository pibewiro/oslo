function enviar()
{
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telephone = document.getElementById("telephone").value
    let error = "Todos os campos deveria ser preenchidos"
    let errors = {}

    if(nome === "")
    {
        errors.nome = error;
        document.getElementById("errorNome").innerText = errors.nome 
    }

    else
    {
        document.getElementById("errorNome").innerText = ""
    }

    if(email === "")
    {
        errors.email = error;
        document.getElementById("errorEmail").innerText = errors.email
    }

    else
    {
        document.getElementById("errorEmail").innerText = ""
    }

    if(telephone === "")
    {
        errors.telephone = error;
        document.getElementById("errorTelephone").innerText = errors.telephone
    }

    else
    {
        document.getElementById("errorTelephone").innerText = ""
    }

    if(Object.keys(errors).length === 0)
    {
        swal("Dados Recebidos Com Sucesso")
    }
}