function divClasses() {
    let currentClasses = document.querySelector("[title='Current']").classList;
    let currentDiv = [];
    for (let i=0; i< currentClasses.length; i++) {
        currentDiv.push(currentClasses[i]);
    }
    return currentDiv;
}

function inputElements() {
    let enterInput = document.querySelector(".classes-to-add");
    let exitInput = document.querySelector(".classes-to-remove");
    return [enterInput, exitInput];
}

function lowerCasing(inputValues) {
    inputValues = inputValues.split(" ");
    for (let i=0; i<inputValues.length; i++) {
        inputValues[i] = inputValues[i].toLowerCase();
    }
    return inputValues;
}

function newValues(old, modern) {
    for (let i=0; i<modern.length; i++) {
        if (! old.includes(modern[i])) {
            old.push(modern[i]);
        }
    }
    return old;
}

function duplicatedValues(old, modern) {
    for (let i=0; i<modern.length; i++) {
        if (old.includes(modern[i])) {
            let idx = old.indexOf(modern[i]);
            old = old.slice(0, idx), old.slice(idx+1);
        }
    }
    return old;
}

function changeDivClasses(newClasses) {
    document.querySelector("[title='Current']").classList = newClasses.join(" ");
}

function deleteOldSpan() {
    let parentDiv = document.querySelector(".classes-list").children[1]
    let spanElements = parentDiv.children;
    if (spanElements.length !== 0) {
        parentDiv.innerHTML = "";
    }
}

function createSpan(classesNames) {
    
}

function makeSpan() {
    let classList = divClasses();
    
    let elements = [inputElements()[0], inputElements()[1]];
    elements[0].addEventListener("blur", () => {
        let addValue = lowerCasing(elements[0].value);
        addValue = newValues(classList, addValue);
        elements[0].value = "";
        changeDivClasses(addValue);
        deleteOldSpan();
        createSpan(addValue);
    });

    elements[1].addEventListener("blur", () => {
        let removeValue = lowerCasing(elements[1].value);
        removeValue = duplicatedValues(classList, removeValue);
        elements[1].value = "";
        console.log(removeValue);
        changeDivClasses(removeValue);
        deleteOldSpan();
        createSpan(removeValue);
    });
}

makeSpan();
