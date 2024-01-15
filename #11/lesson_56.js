// loop challenge

let myAdmins = [
    "Ahmad", "Osama", "Sayed", "Stop", "Samera",
];

let myEmployees = [
    "Amgad", "Samah", "Ameer", "Omar", "Othman",
    "Amany", "Samia", "Anwar",
];

newAdmins = [];
let i=0;
while (myAdmins[i] !== "Stop") {
    newAdmins.push(myAdmins[i]);
    i+=1;
}

document.write(`<div>we have ${newAdmins.length} Admins</div>`);
document.write(`<div>we have ${myEmployees.length} Admins</div>`);

document.write("<hr />");

for (let i=0; i<newAdmins.length;i++) {
    admin = newAdmins[i];
    document.write(`<div>The Admin For Team ${i+1} Is ${admin}
                    <h2>Team Members:</h2>`);
    document.write("<ul style='list-style-type:decimal;\
                            margin-block-start: 0px;\
                            margin-block-end: 0px;\
                            padding-inline-start: 10px;'>");
    for (let j=0; j<myEmployees.length; j++) {
        employee = myEmployees[j];
        if (employee[0] === admin[0]){
            document.write(`<li>${employee}</li>`);
            document.write("<br>");
        }
    }
    document.write("</ul>");
    document.write("</div>");
    
    document.write("<hr />");
}
