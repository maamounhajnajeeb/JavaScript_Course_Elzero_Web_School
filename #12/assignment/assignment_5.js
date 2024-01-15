function createCheckBox(startYear, endYear) {
    document.write("<select>");
    for (let i=startYear; i <= endYear; i++) {
        document.write(`<option value=${i}>${i}</option>`);
    }
    document.write("</select>");
}

createCheckBox(2000, 2021);