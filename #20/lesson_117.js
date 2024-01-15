let book = "Video";
let video = "Book";

let stach = book;
book = video;
video = stach;

console.log(video, book);

/////////////////////////

[book, video] = [video, book];
console.log(video, book);
