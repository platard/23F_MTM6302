// DOM elements
$list = document.getElementById('list')
$form = document.getElementById('form')
$newTask = document.getElementById('newTask')

let tasks = [

    'Buy dinner',
    'Complete assignment',
    'Review class'
]


// Creates the To Do List

function buildToDoList() {

    const html = []
    
    for( let i=0; i < tasks.length; i++ ){
        html.push(`<li class="list-group-item d-flex justify-content-between">${tasks[i]} <button data-index="${i}" class="btn btn-danger">Delete</button></li>`)
    }
    
    $list.innerHTML = html.join('')

}

// buildToDoList()


// Add a new task to the list

$form.addEventListener('submit', function(e){
    e.preventDefault()

    tasks.push($newTask.value)
    $newTask.value = ''
    buildToDoList()
    localStorage.setItem('tasks', JSON.stringify(tasks) )
})


$list.addEventListener('click', function(e){
    console.log(e.target)

    if(e.target.classList.contains('btn')){
        tasks.splice(e.target.dataset.index, 1 )
        buildToDoList()
        localStorage.setItem('tasks', JSON.stringify(tasks) )

    }
})

if(localStorage.getItem('tasks')){
    tasks = JSON.parse(localStorage.getItem('tasks'))
}

buildToDoList()




