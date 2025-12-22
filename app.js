'use strict';

const passwordInput = document.getElementById('password-input');
const togglePasswordBtn = document.getElementById('toggle-password-btn');
const jsonInput = document.getElementById('json-input');
const clearBtn = document.getElementById('clear-btn');
const debugOutput = document.getElementById('debug-output');
const tokenOutput = document.getElementById('token-output');

togglePasswordBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordBtn.textContent = 'Hide';
    } else {        
        passwordInput.type = 'password';
        togglePasswordBtn.textContent = 'Show';
    }
});

clearBtn.addEventListener('click', () => {
    jsonInput.value = '';
    tokenOutput.value = '';
    debugOutput.textContent = '';
    passwordInput.type = 'password';
    passwordInput.value = '';
    togglePasswordBtn.textContent = 'Show';
});