let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btnLogin = document.querySelector("#Login");

btnLogin.addEventListener("click",function(){
    let valueEmail = email.value.trim();
    if(valueEmail === ""){
        alert("Email không được để trống");
        return;
    }
    let valuePassword = password.value.trim();
    if(valuePassword === ""){
        alert("Mật khẩu không được để trống");
        return;
    }
    
    
    let arrAcc = JSON.parse(localStorage.getItem("ACC")) || [];
    let user = arrAcc.find((acc) => acc.email === valueEmail && acc.password === valuePassword);
    if(user){
        alert("Đăng nhập thành công");
        window.location.href = "https://www.lazada.vn/?spm=a2o4n.homepage.header.dhome.2ef63bdcKzK8RV#?";
    }
    else{
        alert("Tài khoản hoặc mật khẩu không đúng");
    }
});

