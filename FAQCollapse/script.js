const toggleBtn = document.querySelectorAll('.faq-toggle');

toggleBtn.forEach(Btn => {
    Btn.addEventListener('click', () => {
        Btn.parentNode.classList.toggle('active');
    })
});