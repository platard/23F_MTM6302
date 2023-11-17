/*** Week 10 ***/
// 1. Create a HTML attribute to share the 'student number'. Use the starter.js



// 2. Add an event listener to all the 'ac-card' buttons. Use the shared 'student numer' to target the proper 'student object'

/*** Direct */
// const $buttons = document.querySelectorAll('.btn')

// for(const $button of $buttons){
//     $button.addEventListener('click', function(event){
//         console.log(event.target.dataset.index)

//         $studentForm.elements['email'].value = students[event.target.dataset.index -1].email
//         $studentForm.elements['userName'].value = students[event.target.dataset.index -1].userName

//     })
// }

/*** Event delegation */

function clickHandler(e){
    console.log(e.target)

    if(e.target.classList.contains('btn')){
        $studentForm.elements['email'].value = students[e.target.dataset.index -1].email
        $studentForm.elements['userName'].value = students[e.target.dataset.index -1].userName

        $studentForm.dataset.index = e.target.dataset.index -1
    } //closes if
} // closes function

$studentList.addEventListener('click', clickHandler )


// 3. Use the event delegation to listen to the 'submit' event in the student details view (modal).

$modalBody.addEventListener('submit', function(e){
    console.log(e.target)

    e.preventDefault()
    students[e.target.dataset.index].email = $studentForm.elements['email'].value

    students[e.target.dataset.index].userName = $studentForm.elements['userName'].value

    createIDs()
    localStorage.setItem('students', JSON.stringify(students) )
})

console.log( JSON.parse(localStorage.getItem('students')) )


if(localStorage.getItem('students')){

    students = JSON.parse(localStorage.getItem('students'))
    
    createIDs()
}




