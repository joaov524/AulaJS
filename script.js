function login(){
    var email = document.getElementById("frmemail").value //criou uma variavel chamada email e atribuiu o valor presente no id "frmemail"
    var senha = document.getElementById("frmsenha").value
    console.log(email)
    console.log(senha)
    if(email == "login" && senha == "12345"){
        alert("Login realizado com sucesso")
    }
    else{
        alert("Login inválido")
    }
}

function somar(){
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1+n2
    console.log(resultado)
    alert(resultado)
}

function subtrair(){
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1-n2
    console.log(resultado)
    alert(resultado)
}

function multiplicar(){
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1*n2
    console.log(resultado)
    alert(resultado)
}

function dividir(){
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    if(n1==0 || n2==0){
        alert("Os valores não podem ser iguais a 0")
    }
    else{
        var resultado = n1/n2
        console.log(resultado)
        alert(resultado)
    }
}

function elevarquad(){
    var n1 = parseInt(prompt("Digite o número"))
    console.log(typeof(n1))
    var resultado = n1*n1
    console.log(resultado)
    alert(resultado)
}

function elevar(){
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    var resultado = n1**n2
    console.log(resultado)
    alert(resultado)
}

function raiz(){
    var n1 = parseInt(prompt("Digite o número"))
    var resultado = Math.sqrt(n1)
    console.log(resultado)
    alert(resultado)
}


function nome(){
    const nome = document.getElementById("frmnome").value 
    console.log(nome)
    document.getElementById("exibenome").innerHTML = nome
}


function produto(){
    let produto = document.getElementById("frmproduto").value
    let li = document.createElement("li")
    li.innerHTML = produto
    console.log(produto)
    document.getElementById("produto").appendChild(li)
    console.log(produto)
}


function array(){
    let n = [3, 4, 5, 6, 2, 1]
    console.log("Todos os valores do array")
    console.log(n)
    console.log("Primeiro valor do array")
    console.log(n[0])
    console.log("Quarto valor do array")
    console.log(n[3])
    n[6] = 12
    console.log("Setimo valor do array" + n[6])
    console.log("Todos os valores do array")
    console.log(n)
    n.push(38, 30, 1978)
    console.log("Todos os valores do array")
    console.log(n)
    n.pop()
    console.log("Todos os valores do array")
    console.log(n)
    n.pop()
    console.log("Todos os valores do array")
    console.log(n)
    n.pop()
    console.log("Todos os valores do array")
    console.log(n)
}

function carrinho(){
    let carrinho = ["arroz"]
    let nome = "arroz"
    let preco = 4.99
    let marca = "tio joao"

    let produto = {
        nome_prod: "arroz",
        preco_prod: 9.99,
        marca_prod: "tio joao"
    }
    console.log (produto)

}