function showInfo(user="Un", age="Un", rate=0, show=true, ...skills) {
    document.write("<div>");

    document.write(`<h2>wellcome ${user}</h2>`);
    document.write(`<p>Age: ${age}</p>`);
    document.write(`<p>Hour rate: $${rate}</p>`);

    if (show) {
        if (skills.length > 0) {
            document.write(`<p>${skills.join(" | ")}</p>`);
        } else {
            document.write("<p>There is no skills</p>");
        }
    }
    else {
        if (skills.length == 0) {
            document.write("<p>There is no skills</p>");
        } else {
        document.write("<p>Skills is hidden</p>");
        }
    }

    document.write("</div>");
}

showInfo("Maamoun Haj Najeeb", 23, 10, false, ); 