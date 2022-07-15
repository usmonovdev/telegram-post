let btn = document.getElementById("btn")

// Ekran 20px pastga scroll qilinganda buttonning chiqishi
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Button bosilganda ekranning yuqoriga ko'tarilishi
function functionTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}