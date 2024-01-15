let watchList = [{"Title": "inception", "imdbRating": 8.5}, {"Title": "Memento", "imdbRating": 8.1}]

let ratings = watchList.map((element, indx, ) => {
    // console.log(element);
    return {
        "title": watchList[indx]["Title"],
        "rating": watchList[indx]["imdbRating"] 
    };
})

console.log(ratings);
