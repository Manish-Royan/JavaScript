//we use small letter to inital a function name because we use capital letter to initate Classname
function generateRandomNumber(min, max) {
    
    /* We are using Math.floor because by default the Math.random return decimal float value  */
    return Math.floor(Math.random() * (max - min + 1) +  min); //update the paragraph value
}

document.getElementById('generateButton').addEventListener ("click",
    function () {
        var min = 1;
        var max = 100; //maximum vlaue of random value

        var randomNumber = generateRandomNumber(min, max);
        document.getElementById('result').textContent = randomNumber
    }
)