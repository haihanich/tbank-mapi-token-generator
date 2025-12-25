'use strict';

const passwordInput = document.getElementById('password-input');
const togglePasswordBtn = document.getElementById('toggle-password-btn');
const jsonInput = document.getElementById('json-input');
const clearBtn = document.getElementById('clear-btn');
const debugOutput = document.getElementById('debug-output');
const tokenOutput = document.getElementById('token-output');
const generateBtn = document.getElementById('generate-btn');

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

generateBtn.addEventListener('click', () => {
    tokenOutput.value = '';
    debugOutput.textContent = '';

    const raw = jsonInput.value.trim();

    if (!raw) {
        debugOutput.textContent = 'Error: empty input. Paste JSON into the textarea.';
        return;
    }

    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (err) {
        debugOutput.textContent = 'Error: invalid JSON. Fix JSON syntax and try again.';
        return;
    }

    if (parsed === null || Array.isArray(parsed) || typeof parsed !== 'object') {
        const typeLabel = parsed === null ? 'null' : Array.isArray(parsed) ? 'array' : typeof parsed;
        debugOutput.textContent =
            'Error: top-level JSON value must be an object (e.g. { "TerminalKey": "...", ... }).\n' +
            `Got: ${typeLabel}`;
        return;
    }

    const keys = Object.keys(parsed);
    debugOutput.textContent =
        'OK: JSON parsed successfully.\n' +
        `Keys count: ${keys.length}\n` +
        `Keys: ${keys.join(', ')}`;
});
