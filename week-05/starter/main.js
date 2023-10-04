/*** Arrays - basics ***/

//Create an list of two courses

//Target one element

//Reassign the value of the targeted element

//Add a new element; warning!



/*** Arrays - Manipulation ***/
//Add a new element to the end of the array 'courses'

//Remove the last element of the array and save it in a variable.

//Remove the first element on the array and save it in a variable.

//Add a new element to the beginin of the array

//Removes the first item, and Inserts a new one using the same function. 



/*** Array - Sorting ***/
//Sort the array 



/*** Array - concatenation ***/

//Create the 'students' array that contains an object with the following properties: studentNumber, name, userName, email.

// create a new array 'students' that combine 'users' and 'student' array

//Create a string variable that contains all the elements of the 'courses' array


//Determine if the variable has an array




/*** Searching in Arrays ***/
//Obtain the index of the first item that matches the value 'WDII'

//Check if the  array includes the element 'WD'

//Find and save the student with your studentNumber; use the 'students' srray



/*** Loops ***/
//Use 'for counting loop' to display, in the console, a list of all names; use the 'students' array.

//Use a for...of to display the 'userName' and 'studentNumber' from 'students' array

//Use a for...in to display all the properties of any object

//Use a for...of and a for...in to display all the properties of every student from the 'students' array



/*** Practice ***/


const $container =  document.getElementById('blogsContainer')

for (const student of students){
    $container.innerHTML += `
    <div class="col-md-6">
        <div class="ac-card">
        <div class="ac-card-image"></div>
        <div class="ac-card-info">
            <p>
                <strong id="name">${student.name}</strong><br>
                <span id="studentNumber">${student.studentNumber}</span>
            </p>
            <p id="partTime" class="hide">PART TIME</p>
            <p id="date" class="ac-card-date">${student.email}</p>
        </div>
        <img class="ac-icon" src="https://imdac.github.io/images/codepen/AC_ICON_1C_BLK_70x58.png">
        <div class="ac-card-footer">
            <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
        </div>
        </div>
    </div>
    `

}