function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function register(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let result=document.getElementById("result");

    if(name==="" || email===""){
        result.innerHTML="من فضلك املأ جميع البيانات";
        result.style.color="red";
        return false;
    }

    result.innerHTML="تم التسجيل بنجاح 🎉";
    result.style.color="green";
    return false;
}