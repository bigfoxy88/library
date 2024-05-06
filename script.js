const  booksContainer=document.querySelector('.books');
const addButton=document.querySelector('.add');
const dialog=document.querySelector('.popup');
const closer=document.querySelector('.close')
const titleInput=document.querySelector('#title');
const authorInput=document.querySelector('#author');
const pageNumber=document.querySelector('#noOfPages');
const readCheckBox=document.querySelector('#read')
const submitButton=document.querySelector('.submit')

//ARRAY OF BOOKS TO BE INCLUDED IN LIBRARY

let myLibrary=[
    
    {
        title:'Shoe dog',
        Author:'Phil Knight',
        page_number:386,
        read:true
    },
    {
        title:'The Good Guy',
        Author:'Dean Koontz',
        page_number:386,
        read:true
        
    },
    {
        title:'Pimp the story of my life',
        Author:'Iceberg Slim',
        page_number:240,
        read:false

    },
    {
        title:"Eloquent Javascript",
        Author:'Marijin Haverbeke',
        page_number:463,
        read:false
    },
    {
        title:'Lightning',
        Author:"Dean Koontz",
        page_number:372,
        read:true
    },
    {
        title:'But How Do It Know',
        Author:'J. Clark Scott',
        page_number:222,
        read:false
    }



]


//CONSTRUCTOR USED TO MAKE NEW BOOKS

function Book(title,author,noOfPages,read=true){
    this.title=title,
    this.Author=author,
    this.page_number=noOfPages
    this.read=read
}




function loadBooks(){
    booksContainer.innerHTML=''
    for(let i=0;i<myLibrary.length;i++){

        //CREATING ELEMENTS AND ADDING CLASSES 

        let divContainer=document.createElement('div');
        let bookTitle=document.createElement('h3');
        let author=document.createElement('h5');
        let noOfPages=document.createElement('p');
        let readButton=document.createElement('button');
        let deleteButton=document.createElement('button');
        divContainer.classList.add('card');
        deleteButton.setAttribute('data-index',i)
        readButton.setAttribute('data-index',i)

        //ENTERING CONTENT INTO ELEMENTS

        bookTitle.textContent=myLibrary[i].title;
        author.textContent=myLibrary[i].Author;
        noOfPages.textContent=myLibrary[i].page_number;
        deleteButton.textContent='delete';
        myLibrary[i].read==true?readButton.textContent='Read':readButton.textContent='Not Read';

        //ADDING EVENT LISTENERS
        deleteButton.addEventListener('click',deleteBooks)
        readButton.addEventListener('click',toggleRead)


        //APPENDING CHILDREN 

        divContainer.appendChild(bookTitle);
        divContainer.appendChild(author);
        divContainer.appendChild(noOfPages);
        divContainer.appendChild(readButton);
        divContainer.appendChild(deleteButton);
        booksContainer.appendChild(divContainer)




    }
}

//FUNCTION TO DELETE BOOK FROM LISTs

function deleteBooks(e){
    let index=Number(e.target.getAttribute('data-index'));
    myLibrary.splice(index,1)
    loadBooks()

}

//FUNCTION TO TOGGLE READ OR UNREAD

function toggleRead(e){
    let index=Number(e.target.getAttribute('data-index'));
    if(myLibrary[index].read){
        myLibrary[index].read=false;
        e.target.textContent='Not Read'
        e.target.style.backgroundColor='red'
    }else{
        myLibrary[index].read=true;
        e.target.textContent='Read'
        e.target.style.backgroundColor='green'

    }

}

//open form

function toogleForm(){
 dialog.showModal()
}

//close form
function closeForm(){
    dialog.close()
}


//FUNCTION TO ADD BOOKS

function addBook(){
let Tvalue=titleInput.value;
let Avalue=authorInput.value;
let Nvalue=pageNumber.value;
let Rvalue=readCheckBox.checked;
let newBook=new Book(Tvalue,Avalue,Nvalue,Rvalue)
myLibrary.unshift(newBook);
dialog.close()
loadBooks()




}



addButton.addEventListener('click',toogleForm)
submitButton.addEventListener('click',addBook)
closer.addEventListener('click',closeForm)
loadBooks()