const myPromise = new Promise((res, rej) => {
    let users = ["Maamoun"];
    setTimeout(() => {
        if (users.length > 0) {
            res("Iam the good promise");
        } else {
            rej(Error("Iam the bad promise"));
        }
    }, 3000);
});

// async function readData() {
//     console.log("Before Promise");

//     try {
//         console.log(await myPromise);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log("EveryThing is Done")
//     }

//     console.log("After Promise");
// }

// readData();

async function fetchData() {
    console.log("Before fetch");

    try {
        let myData = await fetch("https://api.github.com/users/maamounhajnajeeb/repos");
        console.log(await myData.json());
    } catch (err) {
        console.log(err);
    } finally {
        console.log("EveryThing is Done");
    }
    
    console.log("After fetch");
}

fetchData();
