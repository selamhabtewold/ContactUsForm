
/**
 *  to switch between the two pages, popup and main page
 */

const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const contactForm = document.querySelector(".contact-form");
const closeIcon = document.querySelector(".close");


btnEl.addEventListener("click", () => {
    
    containerEl.classList.add('active');

    contactForm.classList.remove("active");
    btnEl.style.animationPlayState = 'paused';


});


closeIcon.addEventListener("click", () => {
    containerEl.classList.remove("active");
    contactForm.classList.add("active");
    btnEl.style.animationPlayState = 'running';


});


/*  to save the form data to google sheets */

const scriptURL = "https://script.google.com/macros/s/AKfycbzO3bvrXHeeSQ9z_XoMKiV17CsA8IAocIqvEwqPYdZg2ozugD6vhyefEQXkULtcptodjQ/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.style.color ="green"
            msg.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                msg.innerHTML = "";
            }, 1000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
});




