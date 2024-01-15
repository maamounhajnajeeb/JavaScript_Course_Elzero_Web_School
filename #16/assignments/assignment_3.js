function editText(text, USD) {
    let UIndex = text.indexOf("U");
    let EIndex = text.indexOf("E");
    let equalSign = text.indexOf("=");

    let firstHalf = text.slice(UIndex, equalSign+2);
    firstHalf = `${USD} ${firstHalf}`;
    
    let secondHalf = text.slice(EIndex);
    USD *= 15.6;
    secondHalf = `${USD.toFixed(2)} ${secondHalf}`;

    let newText = firstHalf+secondHalf;
    return newText;
}

let divElement = document.getElementsByClassName("result")[0];
let inputElement = document.querySelector("[name='dollar']")

inputElement.onblur = (e) => {
    newText = editText(divElement.innerText, inputElement.value);
    divElement.innerText = newText;
};