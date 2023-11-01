/*** Update form ***/
// 1.Create a button in the student card(starter file), and retrieve it(main js file). Use the bs modal.
    const $editBtn = document.querySelector('button')

// 2.Add an event listener to the button (optional).
$editBtn.addEventListener('mouseover', function(){
    console.log("Button clicked")
    $editBtn.setAttribute('data-bs-toggle', 'modal')
    $editBtn.setAttribute('data-bs-target', '#exampleModal')
})

// 3.Insert a 'HTML form' in the bs modal.

// 4.Add an event listener to the 'form'. Update the student info.


/*** Filter ***/
// 5. Add an event listener to the 'Search' form. Use the 'submit' event. Display a filtered list based on the student name.

// 6.Add an event listener to the 'Search' element. Use the 'input' event. Display a filtered list based on the student name.






