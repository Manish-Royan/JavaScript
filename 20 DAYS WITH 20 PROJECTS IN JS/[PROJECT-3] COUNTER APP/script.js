//Creating a self invoe function
(function()
{
    const buttons = document.querySelectorAll(".btn-counter");

    //COUNTER
    let count = 0;

    const counter = document.querySelector(".counter-machine");

    const counterContainer = document.querySelector(".counter");

    buttons.forEach(function(button)
        {
            button.addEventListener('click', function()
                {
                    //Check condition whether the button class list contain a 'decreas-button'
                    if(button.classList.contains("decrease-btn"))
                    {
                        count--; //Decrementing the counter value of this variable
                    }  // We can also use the 'esle' condition but we already set the default state transparent inside the style.css
                    else if(button.classList.contains("increase-btn"))
                    {
                        count++;  //increment the value of positive side
                    }
                    counter.textContent = count; //update the counter of HTML element text content

                    //Change the color of container
                    if(count > 0)
                    {
                        counterContainer.classList.remove("negative"); //if the case of the increment, then we want to remove 'negative' class.
                        counterContainer.classList.add("positive");         
                    }
                    else if(count < 0) {
                        counterContainer.classList.remove("positive"); 
                        counterContainer.classList.add("negative"); 
                    } 
                    else 
                    {
                        counterContainer.classList.remove("positive","negative");
                    }      
                }
            )
        }
    );
}
) ();