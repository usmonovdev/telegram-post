let imgBox = document.querySelectorAll('.img_box')
let img = document.querySelectorAll('.img_box img')

const card = () => {
    imgBox.forEach((e) => {
        e.classList.remove('loading')
    });

    // Visibility setting
    img.forEach((e) => {
        e.style.visibility = 'visible'
    });
}

setTimeout(() => {
    card()
}, 5000);

// window.addEventListener("load", () => {
//     card()
// })