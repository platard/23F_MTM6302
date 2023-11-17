// Student data
let students = [
    {
        "studentNumber":1,
        "name":"Leanne Graham",
        "userName":"Bret",
        "email":"Sincere@april.biz"
    },
    {
        "studentNumber":2,
        "name":"Ervin Howell",
        "userName":"Antonette",
        "email":"Shanna@melissa.tv"
    },
    {
        "studentNumber":3,
        "name":"Clementine Bauch",
        "userName":"Samantha",
        "email":"Nathan@yesenia.net"     
    },
    {
        "studentNumber":4,
        "name":"Patricia Lebsack",
        "userName":"Karianne",
        "email":"Julianne.OConner@kory.org"
    },
    {
        "studentNumber":5,
        "name":"Chelsey Dietrich",
        "userName":"Kamren",
        "email":"Lucio_Hettinger@annie.ca"
    },
    {
        "studentNumber":6,
        "name":"Mrs. Dennis Schulist",
        "userName":"Leopoldo_Corkery",
        "email":"Karley_Dach@jasper.info"
    },
    {
        "studentNumber":7,
        "name":"Kurtis Weissnat",
        "userName":"Elwyn.Skiles",
        "email":"Telly.Hoeger@billy.biz"
    },
    {
        "studentNumber":8,
        "name":"Nicholas Runolfsdottir",
        "userName":"Maxime_Nienow",
        "email":"Sherwood@rosamond.me"
    },
    {
        "studentNumber":9,
        "name":"Glenna Reichert",
        "userName":"Delphine",
        "email":"Chaim_McDermott@dana.io"
    },
    {
        "studentNumber":10,
        "name":"Clementina DuBuque",
        "userName":"Moriah.Stanton",
        "email":"Rey.Padberg@karina.biz"   
    }
]

// DOM elements
const $studentList = document.getElementById('studentList')
const $modalBody = document.getElementById('modal-body')
const $studentForm = document.getElementById('studentForm')

// Card
// Display all the IDs using the innerHTML only once. Use an array and the join() method.
function createIDs(){

const htmlTemplates = []
for(const student of students ){
    const studentIndex = student.studentNumber -1
    htmlTemplates.push(
    `<div class="col-md-6">
        <div class="ac-card">
            <div class="ac-card-image d-flex justify-content-center align-items-center"><i class="bi bi-person-bounding-box display-1"></i></div>
            <div class="ac-card-info">
                <p>
                <strong id="studentName">${student.name}</strong><br>
                <span id="studentNumber">${student.studentNumber}</span>-
                <span id="studentUserName" >${student.userName}</span>
                </p>
                <p id="studentEmail">${student.email}</p>
                <button data-index="${student.studentNumber}" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
            </div>
            <div class="ac-card-footer">
                <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
            </div>
        </div>
    </div>`)
}
$studentList.innerHTML = htmlTemplates.join('')
}


createIDs()
