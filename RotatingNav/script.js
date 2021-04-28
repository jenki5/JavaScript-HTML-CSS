const nopen = document.getElementById("open");
const nclose = document.getElementById("close");
const container = document.querySelector(".container");

nopen.addEventListener('click', () => container.classList.add('show-nav'))

nclose.addEventListener('click', () => container.classList.remove('show-nav'));