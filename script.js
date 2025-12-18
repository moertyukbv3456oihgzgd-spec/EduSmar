
function showWelcome() {
    window.scrollTo({
        top: document.getElementById('courses').offsetTop - 70,
        behavior: 'smooth'
    });
}

// تفاعل أزرار الشراء
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseName = button.parentElement.querySelector('h3').innerText;
        alert(تمت إضافة كورس "${courseName}" إلى سلة مشترياتك!);
    });
});