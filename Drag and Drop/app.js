const drop = document.querySelector(".drop");
const input = document.querySelector(".drop input");
const text = document.querySelector(".text");
const progress = document.querySelector(".progress");

let files = [];

input.addEventListener("change", () => {
  drop.style.display = "none";
  upload();
});

drop.addEventListener("dragover", (e) => {
  e.preventDefault();
  text.innerHTML = "Sichqonchadan qo'lingizni oling.";
  drop.classList.add("active");
});

drop.addEventListener("dragleave", (e) => {
  e.preventDefault();
  text.innerHTML = "Ma'lumotlaringizni shu yerga tashlang.";
  drop.classList.remove("active");
});

drop.addEventListener("drop", (e) => {
  e.preventDefault();
  files = e.dataTransfer.files;
  drop.style.display = "none";
  upload();
});

function upload() {
  let intervalCount = 0.25;
  progress.style.display = "block";
  progress.style.width = `${20 * intervalCount}%`;
  const interval = setInterval(() => {
    intervalCount += 0.25;
    progress.style.width = `${20 * intervalCount}%`;
    if (intervalCount == 5) {
      clearInterval(interval);
    }
  }, 100);
}