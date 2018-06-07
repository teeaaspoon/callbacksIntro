// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Waldo") {
//             found(i); // execute callback
//         }
//     }
// }

function findWaldo(arr, found) {
    arr.forEach(function(element, index) {
        if (element === "Waldo") {
            found(index);
        }
    });
}

function actionWhenFound(index) {
    console.log("Found him at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//Modify the callback function in the previous example so that logs the index of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)

//Refactor the function findWaldo to use the forEach() method instead of a for loop.
