
document.addEventListener('DOMContentLoaded', function() {
    const info = document.getElementById('info');

    function valid() {
        const email = document.querySelector('.username input').value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function p_valid() {
        const password = document.querySelector('.pass input').value;

        if (password.length >= 8) {
            par('* Minimum 8 characters', 'valid');
        } else {
            par('* Minimum 8 characters', 'invalid');
        }

        if (/[a-z]/.test(password)) {
            par('* Password should contain at least one lowercase letter.', 'valid');
        } else {
            par('* Password should contain at least one lowercase letter.', 'invalid');
        }

        if (/[A-Z]/.test(password)) {
            par('* Password should contain at least one uppercase letter.', 'valid');
        } else {
            par('* Password should contain at least one uppercase letter.', 'invalid');
        }

        if (/\d/.test(password)) {
            par('* Password should contain at least one number.', 'valid');
        } else {
            par('* Password should contain at least one number.', 'invalid');
        }
    }

    function par(message, styleClass) {
        const para = document.createElement('p');
        para.textContent = message;
        para.className = styleClass;
        info.appendChild(para);
    }

    document.getElementById('submit').addEventListener('click', function() {
        info.innerHTML = ''; // Clear previous messages
        if (valid()) {
            p_valid();
        } else {
            par('Invalid email address', 'invalid');
            document.querySelector('.username').focus();
        }
    });
});
