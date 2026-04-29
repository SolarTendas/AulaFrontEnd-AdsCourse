botao = document.getElementById('btnenviar');
email = document.getElementById('valueemail');

botao.addEventListener("click",
    function () {
        alert(email.value)
    }  
)
