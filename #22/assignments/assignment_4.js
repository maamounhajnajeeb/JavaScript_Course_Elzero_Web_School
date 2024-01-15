let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https? => mean http or https

// :\/\/ => mean ://

// (?:[-\w]+\.)? => ?:- then one or more from [A-Za-z0-9 and underscore] then .
//                      and all of this maybe it's exist maybe not

// ([-\w]+)\. => - then one or more from [A-Za-z0-9 and underscore] then .

// \w+ => one or more from [A-Za-z0-9 and underscore]

// (?:\.\w+)? => ?:. then one or more from [A-Za-z0-9 and underscore]
//                      and all of this maybe it's exist maybe not

// /? => maybe there is forward slash maybe not

// .* => match any charachter without line break (* is for zero or more character)

// i => means insenstive data
