let arrowsFuc = _ => "Iam An Arrow Function";
console.log(arrowsFuc());


///////////
let urlCreate = (protocol, web, tld) => {
    return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org"));