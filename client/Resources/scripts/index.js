
//Calls the appropriate api method to load correct functions for the web page after it is called
function handleOnLoad(){
    populateList();
}


//Controls field values for each book change after click
function handleOnChange(){
    const selectedId = document.getElementById("selectListBox").value;
    bookList.forEach((book)=>{
        if(book.id == selectedId){
            myBook = book;
        }
    });

    populateForm();
}

//Allows book fields to be changed, hides unnecessary buttons for editing book fields
function handleEditClick(){
    makeEditable();
    hideButtons();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myBook.id+")\">Save</button>";
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancle\" onclick=\"handleCancelSave()\">Cancel</button>";
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}


//Allows book fields to be changed, hides unnecessary buttons, and makes all fields blank
function handleNewClick(){
    makeEditable();
    hideButtons();
    blankFields();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>";
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancle\" onclick=\"handleCancelSave()\">Cancel</button>";
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}


//Decreases number of books avlb when rent button is clicked
function handleRentClick(){
    myBook.numAvlb--;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}


//Increases number of books avlb when return button is clicked
function handleReturnClick(){
    myBook.numAvlb++;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}


//Calls the proper function to remove a book from listBox and erase data
function handleDeleteClick(){
    deleteBook();
}


//Handles save functionality when the cancel button is clicked
function handleCancelSave(){
    populateForm();
    makeReadOnly();
    showButtons();
}


//Saves a book after it is edited
function handleEditSave(){
    putBook(id);
    makeReadOnly();
    showButtons();
}


//Saves a book after it is added
function handleNewSave(){
    postBook();
    makeReadOnly();
    showButtons();
    blankFields();
}



//Establishes the correct values for each field in the book form
function populateForm(){
    document.getElementById("bookTitle").value = myBook.title;
    document.getElementById("bookAuthor").value = myBook.author;
    document.getElementById("bookGenre").value = myBook.genre;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    document.getElementById("bookIsbn").value = myBook.isbn;
    document.getElementById("bookLength").value = myBook.length;
    document.getElementById("bookCover").value = myBook.cover;
    var html = "<img class = \"coverArt\" src= \"" + myBook.cover + "\"></img>";
    document.getElementById("picBox").innerHTML = html;
}


//Hides unnecessary buttons
function hideButtons(){
    document.getElementById("newButton").style.display = "none";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";
    document.getElementById("rentButton").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
}


//Shows buttons after buttons have been hidden
function showButtons(){
    document.getElementById("newButton").style.display = "inline-block";
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("deleteButton").style.display = "inline-block";
    document.getElementById("rentButton").style.display = "inline-block";
    document.getElementById("returnButton").style.display = "inline-block";
    document.getElementById("saveButton").style.display = "none";
}


//Allows all fields in a book form to be edited
function makeEditable(){
    document.getElementById("bookTitle").readOnly=false;
    document.getElementById("bookAuthor").readOnly=false;
    document.getElementById("bookGenre").readOnly=false;
    document.getElementById("bookAvlb").readOnly=false;
    document.getElementById("bookIsbn").readOnly=false;
    document.getElementById("bookLength").readOnly=false;
    document.getElementById("bookCover").readOnly=false;
}


//Causes each field in the form for a new book to be blank by default
function blankFields(){
    document.getElementById("bookTitle").value="";
    document.getElementById("bookAuthor").value="";
    document.getElementById("bookGenre").value="";
    document.getElementById("bookAvlb").value="";
    document.getElementById("bookIsbn").value="";
    document.getElementById("bookLength").value="";
    document.getElementById("bookCover").value="";
}


//Keeps book fields from being edited after they have been added or saved
function makeReadOnly(){
    document.getElementById("bookTitle").readOnly=true;
    document.getElementById("bookAuthor").readOnly=true;
    document.getElementById("bookGenre").readOnly=true;
    document.getElementById("bookAvlb").readOnly=true;
    document.getElementById("bookIsbn").readOnly=true;
    document.getElementById("bookLength").readOnly=true;
    document.getElementById("bookCover").readOnly=true;
}