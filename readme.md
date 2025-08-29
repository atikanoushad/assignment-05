1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=> getElementById selects a specific single element with the id . 
getElementsByClassName selects all the elements with that class name .
querySelector will select the first element it gets which matches the given css selector.
querySelectorAll will select all the elements it gets which matches the given css selector.


2.How do you create and insert a new element into the DOM?

=> Step-1: create element using document.createElement() and set innerText or innerHtml.
Step-2: find the parent where we will add the child using getElementById or getELementsByClassName.
step-3 : append the child to the parent using .appendChild .


3.What is Event Bubbling and how does it work?

=> Event bubbling is the process when event starts from the deepest element to the first element . 
example : clicking on a button inside the div first triggers the buttons click event ,then div,then parent, then the document .

4.What is Event Delegation in JavaScript? Why is it useful?
=> Event Delegation is the process where we can attach a single event listener to parent element instead of multiple child elements. it is useful because it handles dynamically and doesn't use much storage .

5.What is the difference between preventDefault() and stopPropagation() methods?
=> preventDefault() : prevents the browser's default action for the event .
stopPropagation() : stops the even from bubbling up . 