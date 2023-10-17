/*** Inserting elements with innertHTML */

// Use the 'courses' array from script.js to create a navigation bar that displays the first two course names. Save the the resulting HTML template in the variable 'courseNav'
const courseNav = `
<nav id="courseList" class="nav d-flex justify-content-between">
    <a class="p-2 link-secondary item" href="#">${courses[0]}</a>
    <a class="p-2 link-secondary item" href="#">${courses[1]}</a>
</nav>
`

// Display the template in the document using the DOM element with the ID 'list'.
const $list = document.getElementById('list')

$list.innerHTML = courseNav

// Add the third course to the list. Keep the previous code.
const $courseList = document.getElementById('courseList')

$courseList.innerHTML += `<a class="p-2 link-secondary item" href="#">${courses[2]}</a>`

//Dinamically create, and display in the document, all the ID cards. Use the 'students' array, and a 'for loop'.
// - Retrieve the DOM element
// - create the template 
// - insert the template
const $studentList = document.getElementById('studentList')
$studentList.innerHTML = ''
// for( const student of students ){
// $studentList.innerHTML +=
// `
// <div id="studentID" class="col-md-6">
// <div class="ac-card">
//   <div class="ac-card-image"></div>
//   <div class="ac-card-info">
//     <p>
//        <strong id="name">${student.name}</strong><br>
//        <span id="studentNumber">${student.studentNumber}</span>
//     </p>
//     <p id="email">${student.email}</p>
//   </div>
//   <div class="ac-card-footer">
//     <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
//   </div>
// </div>
// </div>
// `

// }


//Display all the IDs using the innerHTML only once. Use an array to save multiple templates and the join() method.
const cardsArr = [] 

for( const student of students ){
    cardsArr.push(
    `
    <div id="studentID" class="col-md-6">
    <div class="ac-card">
      <div class="ac-card-image"></div>
      <div class="ac-card-info">
        <p>
           <strong id="name">${student.name}</strong><br>
           <span id="studentNumber">${student.studentNumber}</span>
        </p>
        <p id="email">${student.email}</p>
      </div>
      <div class="ac-card-footer">
        <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
      </div>
    </div>
    </div>
    `)
    
    } // closes the for loop

    $studentList.innerHTML = cardsArr.join('')


//Use the same approach but instead of innerHTML use insertAdjacentHTML() to display the courses
$courseList.innerHTML=''

const cardIdList = []

for(const course of courses){
   cardIdList.push( `<a class="p-2 link-secondary item" href="#">${course}</a>`)
}

$courseList.insertAdjacentHTML('afterbegin',cardIdList.join('') )


/*** Create HMTL element with createElement() method */
//Retrieve the DOM element that has the id 'student-table'

const $studentTable = document.getElementById('student-table')


//Declare a function to create a table. No parameters are needed.
function createTable(){
    // Function body: Using a for loop, create the rows/cells and fill them with the student's name, number, and email.
    //for(let i=0; i<students.length; i++) { 
    for(const student of students){
        // Create a new 'table row' for the contact 
        const tableRow = document.createElement('tr')
            
        // Create a new cell for the Name
        const tableCellName =  document.createElement('td')
        
        // Fill the value of the cell 
        tableCellName.textContent = student.name
        
        // Append the cell in the row element. Use the method appendChild()
        tableRow.appendChild(tableCellName)

        // Repeat the process to insert the StudentNumber and Email cells
        const tableCellNumber =  document.createElement('td')
        tableCellNumber.textContent = student.studentNumber
        tableRow.appendChild(tableCellNumber)

        const tableCellEmail =  document.createElement('td')
        tableCellEmail.textContent = student.email
        tableRow.appendChild(tableCellEmail)


        // Append the row in the table container ''student-table'' 
        $studentTable.appendChild(tableRow)

    } // Closes the for loop
} // Closes the function

//Call the function to display the table in the page





//Create a function to append a new link elment in the top menu. Use one parameter to define the link text

    // Function body:
    // - create a new link element: document.createElement('a')
    // - set the text content
    // - append the newly created element to the DOM
















