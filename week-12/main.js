
const $store = document.getElementById('store')
const $books =  document.getElementById('books')
const $saved = document.getElementById('saved')

let books = []
let saved = []

/*** 1. Create a function to display all the books */
function buildBooks(books){
    const html = []

    for(const book of books){
        html.push(/*html*/`
            <a href="#" class="book col-4 mb-3" data-id="${book.id}">
                <img src="${book.image}" alt="${book.title}" class="img-fluid">
            </a>
        `)
    }
    return html
}

/*** 2. Fetch the data from seussology.info  */
/*** then */
// fetch('https://seussology.info/api/books')
//     .then( response => response.json())
//     .then( data => console.log(data) )

/*** async / await */
async function getBoooks(){
    const response =  await fetch('https://seussology.info/api/books')
    books = await response.json()
    const html = buildBooks(books)
    $books.innerHTML = html.join('')
}

getBoooks()
buildWishList()


/*** 3. Display the details of the book */

//3.1 create an async function to fetch a single book
async function getBook(id){
    const response = await fetch('https://seussology.info/api/books/' + id)
    const book = await response.json()

    $books.innerHTML = `
    <div class="row">
        <div class="col-6"><img src="${book.image}" alt="" class="img-fluid"></div>
        <div class="col-6">
            <h2>${book.title}</h2>
            <p>${book.description}</p>
            <button class="back btn btn-secondary">Back</button>
            <button class="save btn btn-primary" 
                data-id="${book.id }"
                data-title="${book.title }"
                data-description="${book.description }"
                data-image="${book.image }"
            >+</button>
            <button class="remove btn btn-danger" 
                data-id="${book.id}"
            >-</button>
        </div>
    </div>
    `
}

/*** Event delegation */
// 3.2 Display the book details once the user clicks the image

$store.addEventListener('click', function(e){
    e.preventDefault()
    
    if(e.target.closest('.book')){
        getBook(e.target.closest('.book').dataset.id)
    }else if(e.target.classList.contains('back')){
        getBoooks()

    /*** 4.1 Save the book when click the button */
    }else if(e.target.classList.contains('save')){

        if(!saved.find(book => book.id === e.target.dataset.id)){
            
            saved.push({
              id: e.target.dataset.id,
              title: e.target.dataset.title,
              description: e.target.dataset.description,
              image: e.target.dataset.image,
            })
            localStorage.setItem('saved', JSON.stringify(saved))
      
          buildWishList()
        }

    /*** 5. Remove from wish list */  
    }else if(e.target.classList.contains('remove') ){
        const index = saved.findIndex(book => book.id === e.target.dataset.id)
        console.log(index)
        if(index >= 0){
            saved.splice( index, 1 )
            localStorage.setItem('saved', JSON.stringify(saved))
            buildWishList()
        }
    }


})

/*** 4. Create the Wish list section */
/*** 4.2 create the buildWishList() */
function buildWishList() {
    const ls = localStorage.getItem('saved')
    if(ls){
        saved = JSON.parse(ls)
    }

    const html = buildBooks(saved)
    $saved.innerHTML = html.join('')
}




