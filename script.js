function welcome() {
    alert("أهلاً بك في منصة EduSmart");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let result = document.getElementById("result");

    if (name === "" || email === "") {
        result.innerHTML = "من فضلك أدخل جميع البيانات";
        result.style.color = "red";
        return false;
    }

    result.innerHTML = "تم الإرسال بنجاح";
    result.style.color = "green";
    return false;
}