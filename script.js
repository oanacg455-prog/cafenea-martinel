const button = document.querySelector('.top-bar button');

button.addEventListener('click', function () {
    alert('Comanda ta a fost inregistrata. ☕');
});

const form = document.getElementById('contactform');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (email === '' || name === '') {
        alert('Te rog completeaza toate campurile.');
    } else {
        alert(`Multumim pentru mesaj, ${name}! Te vom contacta la ${email}`);
        form.reset ();
    }
})

function spuneSalut() {
    alert('Bine ai venit la Cafeneaua Martinel!');
}

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            valid = false;
        }
    });

    if (!valid) {
        alert("Te rog completeaza toate campurile.");
    } else {
        alert("Mesajul tau a fost trimis cu succes!");
        form.reset();
    }
});



