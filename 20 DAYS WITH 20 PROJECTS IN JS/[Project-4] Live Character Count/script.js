const textarea = document.querySelector('textarea');

const counter = document.querySelector('.counter');

function countingCharacters() {

    //Caculate the length of text
    const textLength = textarea.value.length;
    // console.log(textLength);

    //Binding the length value to innerText
    counter.innerText = `${textLength}`;

}