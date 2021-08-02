document.getElementById("submit").addEventListener("click", validateForm)

function validateForm(){
  if(document.getElementById("username").value != "" && 
    document.getElementById("user-email").value != ""  && 
    document.getElementById("user-celphone").value != ""){
    alert("Prontinho, você receberá as novidades por email!");
  }else{
    alert("Preencha todos os campos, por favor!");  
  }
}
