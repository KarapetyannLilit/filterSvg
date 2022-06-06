// fetch("/bye").then((resp) => resp.json()).then((resp) => {
//     alert(resp.name)
// })

// fetch("/hi", {
//     method: "post",
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "mike"
//     })
// })

fetch("/image", {
    method: "post",
    headers: {
        "content-type": "image/svg+xml "
    },
})

// // a function to load the json
// function loadJSON(URL, callback) {

//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', URL, true);

//     xobj.onreadystatechange = function () {
//         if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//         }
//     };
//     xobj.send(null);
// }

// // call the loadJSON
// loadJSON('svg.json', useJSON);

// function useJSON(response) {
//     //you have the json, use it!
//     let json = JSON.parse(response);
//     //put the svg inside the divWrap
//     svgWrap.innerHTML = json.pages[0].boxes[1].insideBox;
// }

