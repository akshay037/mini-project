// DOM Elements
const output = document.querySelector(".password-generator__textbox"),
    length = document.querySelector("#password-length"),
    checkboxes = [...document.querySelectorAll("input[type='checkbox']")],
    generateButton = document.querySelector(".password-generator__button"),
    lengthOutput = document.getElementById("p-length");
    lengthOutput.innerHTML = length.value;

length.oninput = function() {
  lengthOutput.innerHTML = this.value;
}
const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: '!;,.%/(){}#+-:_"@|`$=*^[]?&~'
};

function generatePassword() {
    let password = "",
        passwordLength = length.value,
        selection = "";

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selection += characters[checkbox.name];
        }
    });

    if (!selection) {
        output.innerHTML = "Please select character type";
    } else {
        for (let i = 0; i < passwordLength; i++) {
            password += selection[Math.floor(Math.random() * selection.length)];
        }

        output.innerHTML = password;
    }
}

generateButton.addEventListener("click", generatePassword);

function copyPassword() {
  var range = document.createRange();
    range.selectNode(document.querySelector(".password-generator__textbox"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  // alert("Copied the Password");
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Password Copied";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
