let form = document.getElementById("register");

form.onsubmit = (e) => {
    let inputField = document.getElementById("phone").value;
    let phoneReExp = /\(\d{4}\)\s\d{3}-\d{4}/;
    let validationResult = phoneReExp.test(inputField);
    return validationResult;
};
