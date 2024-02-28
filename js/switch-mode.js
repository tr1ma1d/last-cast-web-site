document.addEventListener("DOMContentLoaded", function() {
    let switchMode = document.getElementById("light-night_theme");
    let theme = document.getElementById("theme");

    switchMode.addEventListener("change", function() {
        if (switchMode.checked) {
            console.log("checked");
            theme.href = "./css/dark-theme.css";
        } else {
            theme.href = "./css/light-theme.css";
        }
    });
});