function toggleClass(elementName, className) {
    var elements = document.getElementsByName(elementName);
    elements.forEach((element) => {
        element.classList.toggle(className);
    });
}

function toggleColor() {

let radios = document.querySelectorAll('input[type="radio"]:checked');
let button = document.getElementById('dropdownButton');

radios.forEach(radio => {
    radio.addEventListener('change', function() {
        // Change all labels back to original color
        document.querySelectorAll('div').forEach(div => {
            div.style.backgroundColor = '';
            div.style.color = '';
            div.style.fontWeight = '';
        });

        if (this.checked) {
            button.innerText = this.value;
            var subparent = this.parentElement;
            subparent.parentElement.style.backgroundColor = 'blue';
            subparent.parentElement.style.color = 'white';
            subparent.parentElement.style.fontWeight = 'bold';
        }
    });
});
}