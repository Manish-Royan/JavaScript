
/* it's going to hold all the inputs */
const inputs = document.querySelectorAll(".css-controller input"); //using 'querySelector' because we are looking for the multiple elements - we are specify the class selector

inputs.forEach((inputs)=>inputs.addEventListener("change", update)); // we are going to use the loops to actually listen the change event of all five elements out of five 4 is our slider and one is our color input

function update() {
    // the 'suffixData' is usefull once we are updating the CSS code through JS
    const suffixData = this.dataset.sizing || ""; //we use sizing to listen the sizing of inputs

    document.documentElement.style.setProperty( //'setProperty' takes first argument of CSS
        `--${this.name}`, //:root CSS property name

        this.value + suffixData //property value
    )
}


