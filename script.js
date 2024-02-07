const form = document.getElementById("form");
const input = document.getElementById('input');

form.onsubmit = () => {
    window.open("https://en.wiktionary.org/wiki/" + input.value + "#Swedish");
};