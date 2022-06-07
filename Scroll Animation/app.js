let boxes = document.querySelectorAll(".box")

const transformBox = () => {
    const triggerBottom = (window.innerHeight / 5) * 4
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().bottom;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show");
    });
}

window.addEventListener("scroll", transformBox);
transformBox();