function change(element1, element2) {
    [element1.title, element2.title] = [element2.title, element1.title];
    [element1.innerText, element2.innerText] = [element2.innerText, element1.innerText];
    element2.innerText = element2.innerText + " 2";
}

change(
    document.getElementsByClassName('one')[0],
    document.getElementsByClassName('two')[0]
);