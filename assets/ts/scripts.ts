window.onload = () => {
  setFooterYear();
};

function copyPassword() {
  const password = document.querySelector("#password") as HTMLInputElement,
    range = document.createRange();

  navigator.clipboard.writeText(password.value.trim()).then(() => {
    document.querySelector("#confirmation").classList.add("alert-success");
    document.querySelector("#confirmation").innerHTML = "Copied to clipboard";
    setTimeout(() => {
      document.querySelector("#confirmation").innerHTML = "";
      document.querySelector("#confirmation").classList.remove("alert-success");
    }, 1000);
  });
}

function generatePassword() {
  const minPasswordLength = parseInt(
      (document.querySelector("#minPasswordLength") as HTMLInputElement).value
    ),
    maxPasswordLength = parseInt(
      (document.querySelector("#maxPasswordLength") as HTMLInputElement).value
    ),
    passwordLength =
      Math.floor(Math.random() * (maxPasswordLength - minPasswordLength)) +
      minPasswordLength,
    possibleCharacters = [];

  let password = "";

  if (
    (document.querySelector("#upperCaseLetters") as HTMLInputElement).checked
  ) {
    const upperCaseLetters = Array.from(Array(26).keys())
      .map((element) => element + 65)
      .map((element) => String.fromCharCode(element));

    upperCaseLetters.forEach((character) => possibleCharacters.push(character));
  }

  if (
    (document.querySelector("#lowerCaseLetters") as HTMLInputElement).checked
  ) {
    const lowerCaseLetters = Array.from(Array(26).keys())
      .map((element) => element + 97)
      .map((element) => String.fromCharCode(element));

    lowerCaseLetters.forEach((character) => possibleCharacters.push(character));
  }

  if ((document.querySelector("#digits") as HTMLInputElement).checked)
    Array.from(Array(10).keys()).forEach((digit) =>
      possibleCharacters.push(digit)
    );

  if (
    (document.querySelector("#specialCharacters") as HTMLInputElement).checked
  )
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

  (document.querySelector("#password") as HTMLInputElement).value = password;
}

function setFooterYear() {
  const date = new Date(),
    footerYear = document.querySelector("#footerYear"),
    year = date.getFullYear();

  footerYear && (footerYear.innerHTML = year.toString());
}
