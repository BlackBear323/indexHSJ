function checking() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    if (passwordText == "nohack") {
        return true;
    }
    if (passwordText == "noscam") {
        return true;
    }    
    if (passwordText == "nospam") {
        return true;
    }
    if (passwordText == "nomoshennik") {
        return true;
    }
    if (passwordText == "moshennik") {
        alert("Мошеннік тобі не можна хаха");
        return false;
    }
    alert("Мошеннік тобі не можна хаха");
    return false;
}