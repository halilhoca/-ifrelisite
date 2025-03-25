function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Örnek kullanıcı adı ve şifre
    var correctUsername = "admin";
    var correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "welcome.html"; // Başarılı giriş sonrası yönlendirme
    } else {
        document.getElementById("error-message").innerText = "Hatalı kullanıcı adı veya şifre!";
    }
}