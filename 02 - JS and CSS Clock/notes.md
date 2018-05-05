Bezier functions in CSS are so cool! Especially with a visualiser for the anchor positions etc.

My seconds hand was undefined when trying to manipulate it. I had to move the script tag to the end of the html. I assume this is because the needs to 'read' the html before activating the JS file because JS is instantly trying to cache references to some HTML elements. 

I just used the [defer attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) instead. This lets me move the script tag to the top of the file which I prefer. 