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
const $modalBody = document.querySelector('.modal-body')

$modalBody.innerHTML = 
`
<form>
    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
        name="email" value="${students[0].email}">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>

        <label for="userName" class="form-label">User name</label>
        <input type="text" class="form-control" id="userName" aria-describedby="emailHelp"
        name="userName" value="${students[0].userName}">
    
    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
</form>
`

// 4.Add an event listener to the 'form'. Update the student info.
const $form = document.querySelector('form')

$form.addEventListener('submit', function(e){ 
    e.preventDefault()

    // console.log($form.elements)
    // students[0].email = $form.elements['email'].value

    // document.getElementById('email').textContent = students[0].email

    for(const element of $form.elements){

        if(element.type !== "submit"){

            console.log(element)
            students[0][element.name] = $form.elements[element.name].value

            document.getElementById(element.name).textContent = students[0][element.name]

        }

    }

})


/*** Filter ***/
// 5. Add an event listener to the 'Search' form. Use the 'submit' event. Display a filtered list based on the student name.

const $searchStudent = document.getElementById('searchStudent')

$searchStudent.addEventListener('submit', function(event){
    event.preventDefault()
    const searchList = students.filter( student => student.name.includes( $searchStudent.elements['query'].value) )

    createTable(searchList)

})



// 6.Add an event listener to the 'Search' element. Use the 'input' event. Display a filtered list based on the student name.

const $inputSearch = document.getElementById('inputSearch')

$inputSearch.addEventListener('input', function(){

    const searchList = students.filter( student => student.name.includes($inputSearch.value) )

    createTable(searchList)

})





