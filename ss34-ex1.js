let formRegister = document.querySelector("#form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm");
let register = document.querySelector("#register");
let arrAcc = JSON.parse(localStorage.getItem("ACC")) || [];

register.addEventListener("click", function(event){
    event.preventDefault();
    let valueEmail = email.value;
    if(valueEmail === ""){
        alert("Email không được để trống");
        return;
    }
    let valuePassword = password.value;
    if(valuePassword === ""){
        alert("Mật khẩu không được để trống");
        return;
    }
    let valueConfirm = confirmPassword.value;
    if(valueConfirm === ""){
        alert("Bạn cần phải nhập mật khẩu xác nhận");
        return;
    }
    if(valueConfirm === valuePassword){
        for(let i = 0; i < arrAcc.length; i++){
            if(valuePassword === arrAcc[i].password){
                alert("Tài khoản đã tồn tại");
                return;
            }
        }
        alert("Đăng ký tài khoản thành công");
        const acc = {
            email : valueEmail,
            password : valuePassword
        }
        arrAcc.push(acc);
        localStorage.setItem("ACC", JSON.stringify(arrAcc));
    }
    else{
        alert("Mật khẩu xác nhận không đúng");
    }
});
