const toggle = document.getElementById("themeToggle");
const body = document.body;

// تحميل الوضع المحفوظ
if(localStorage.getItem("theme") === "light"){
    body.classList.add("light");
    toggle.classList.remove("fa-sun");
    toggle.classList.add("fa-moon");
}

// عند الضغط
toggle.addEventListener("click", () => {

    body.classList.toggle("light");

    if(body.classList.contains("light")){
        toggle.classList.remove("fa-sun");
        toggle.classList.add("fa-moon");
        localStorage.setItem("theme","light");
    } else {
        toggle.classList.remove("fa-moon");
        toggle.classList.add("fa-sun");
        localStorage.setItem("theme","dark");
    }

});
