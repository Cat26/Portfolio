const email = document.querySelector('.email');

email.addEventListener('click', e => {
    email.textContent = 'julia.joanna.hardy@gmail.com'
});

fetch("about/portfolio-about.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("about").innerHTML = data;
    });