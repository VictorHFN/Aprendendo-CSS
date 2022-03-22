
  function Logar(){
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

        if(usuario == "admin" && password == "admin"){
            alert('Sucesso');
             window.location="http://127.0.0.1:5500/Sistema%20bibliotecario/home.html";
        }else{
            alert('Usuario ou senha incorretos');
           
        }


}
