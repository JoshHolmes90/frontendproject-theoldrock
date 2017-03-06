/**
    Changes the size of the font of all elements within the webpage
    NOTE: Requires jQuery
    Author: Joshua Holmes
**/

//Setting the current Index..
var currentIndex = 1;

//Setting the sizing values
var sizes = [
    ["p", "1em", "2em", "3em"],
    ["h1", "2em", "3em", "4em"]
];


function trChangeSize() {
    
    //Set the main index for the medium size (default)...
    if(currentIndex == 3) {
        currentIndex = 1;
    } else {
        currentIndex++;
    }
    
    //Loop through all the elements and change the font sizes...
    sizes.forEach( function(s) {
        $(s[0]).css("font-size", s[currentIndex]); 
    });
    
    
}

