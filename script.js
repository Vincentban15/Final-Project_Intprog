document.querySelectorAll('.collapsible').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const code = btn.previousElementSibling.innerText;
        navigator.clipboard.writeText(code).then(() => {
            btn.innerText = 'Copied!';
            setTimeout(() => btn.innerText = 'Copy', 1500);
        });
    });
});

const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));