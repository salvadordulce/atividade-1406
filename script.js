function registrarUsuario(event) {
    event.preventDefault()

    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value


    console.log(nome, email);

    var mysql2 = require('mysql2');

    var connection = mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "electronatividade",
    });

    connection.connect(function (error) {
        if (error) {
            console.log(error.code),
                console.log(error.fatal)
        }
    });

    var query = `INSERT INTO Pessoa (nome, email) VALUES ("${nome}","${email}")`;

    connection.query(query, function (error) {
        if (error) {
            console.log("Ocorreu um erro ao inserir no banco de dados");
        } else {
            alert("Usuário cadastrado com sucesso!!!")
        }
    })

}

var formulario = document.getElementById('formulario')
formulario.addEventListener('submit', registrarUsuario)