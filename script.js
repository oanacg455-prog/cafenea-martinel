const button = document.querySelector('.top-bar button');

button.addEventListener('click', function () {
    alert('Comanda ta a fost inregistrata. ☕');
});

const form = document.getElementById('contactform');

form.addEventListener('submit', function(e) {
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
    alert("Bine ao venit la Cafeneaua Martinel!");

}


