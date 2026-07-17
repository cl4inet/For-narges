function checkPassword() {
    const pass = document.getElementById("password").value;

    if(pass === "7886"){
        document.getElementById("lock").style.display="none";
        document.getElementById("gift").style.display="block";
    }else{
        alert("Wrong password ❤️");
    }
}
