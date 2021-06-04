const inputs = document.querySelectorAll('input');
const patterns = {
    telephone: /^\d{10,11}$/,
    username: /^\w{5,12}$/i,
    password: /^[\w@-]{8,20}$/i,
    slug: /^[\w|\W]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validate (field, regex){
    if (regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});