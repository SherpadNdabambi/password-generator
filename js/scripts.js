window.onload = () => {
    setFooterYear();
};
function copyPassword() {
    const password = document.querySelector("#password"), range = document.createRange();
    range.selectNode(password);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    document.querySelector("#confirmation").classList.add("alert-success");
    document.querySelector("#confirmation").innerHTML = "Copied to clipboard";
    setTimeout(() => {
        document.querySelector("#confirmation").innerHTML = "";
        document.querySelector("#confirmation").classList.remove("alert-success");
    }, 1000);
}
function generatePassword() {
    const minPasswordLength = parseInt(document.querySelector("#minPasswordLength").value), maxPasswordLength = parseInt(document.querySelector("#maxPasswordLength").value), passwordLength = Math.floor(Math.random() * (maxPasswordLength - minPasswordLength)) +
        minPasswordLength, possibleCharacters = [];
    let password = "";
    if (document.querySelector("#upperCaseLetters").checked) {
        const upperCaseLetters = Array.from(Array(26).keys())
            .map((element) => element + 65)
            .map((element) => String.fromCharCode(element));
        upperCaseLetters.forEach((character) => possibleCharacters.push(character));
    }
    if (document.querySelector("#lowerCaseLetters").checked) {
        const lowerCaseLetters = Array.from(Array(26).keys())
            .map((element) => element + 97)
            .map((element) => String.fromCharCode(element));
        lowerCaseLetters.forEach((character) => possibleCharacters.push(character));
    }
    if (document.querySelector("#digits").checked)
        Array.from(Array(10).keys()).forEach((digit) => possibleCharacters.push(digit));
    if (document.querySelector("#specialCharacters").checked)
        [
            "`",
            "~",
            "!",
            "@",
            "#",
            "$",
            "%",
            "^",
            "&",
            "*",
            "(",
            ")",
            "-",
            "_",
            "=",
            "+",
            "[",
            "]",
            "{",
            "}",
            "\\",
            "|",
            ";",
            ":",
            "'",
            '"',
            ",",
            "<",
            ">",
            ".",
            "/",
            "?",
        ].forEach((character) => possibleCharacters.push(character));
    let character, index;
    for (let i = 0; i < passwordLength; i++) {
        index = Math.floor(Math.random() * possibleCharacters.length);
        character = possibleCharacters[index];
        password += character;
    }
    document.querySelector("#password").value = password;
}
function setFooterYear() {
    const date = new Date(), footerYear = document.querySelector("#footerYear"), year = date.getFullYear();
    footerYear && (footerYear.innerHTML = year.toString());
}
