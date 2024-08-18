const copyright = document.querySelector(".copyright");
const currentYear = new Date().getFullYear();
copyright.innerHTML = `© 2023 - ${currentYear} Pavel Petrovskiy.`;

let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5,
};

let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('find', entry);
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
    observer.observe(target);
});

