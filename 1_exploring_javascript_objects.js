// Task 1 Create  a constructor function for the Book Object

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2 Implement a method within the Book object to display book information

Book.prototype.display = function() {
    console.log(`Book Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Number of Pages: ${this.pages}`);
};
// .prototype to make display function console logging each objects' properties

let animalFarm = new Book("Animal Farm", "George Orwell", 150);
// Constructor function for Book objects and example calling it

animalFarm.display();
// Calling display function

// Task 3 Array for book objects and functions to add and search for books

let libraryDirectory = [animalFarm];

function addBooks(title, author, pages) {
    let bookAdded = new Book(title, author, pages);
    return libraryDirectory.push(bookAdded); 
};
addBooks("Treasure Island", "Robert Louis Stevenson", 304);
console.log(libraryDirectory);

// Function and call to add book to libraryDirectory array

function searchBook(title) {
    let foundBook = libraryDirectory.filter(book => book.title == title);
    console.log(foundBook);
};

searchBook("Treasure Island");
// Function and call to earch for Book

// Task 4 Create functions  filter for over 100 pages, and map to title and author

function over100Pages(directory) {
    let newDirectory = directory.filter(book => book.pages>=100);
    console.log(newDirectory);
};
over100Pages(libraryDirectory);

function modifyDirectory(dir){
    let modifiedDirectory ={}
    modifiedDirectory = dir.map(book => new Book(`Title: ${book.title}`,`Author: ${book.author}`, `Pages: ${book.pages}`))
    return modifiedDirectory
}
console.log(modifyDirectory(libraryDirectory))

// Function to map prefixes to new book objects and filter for over 100 pages

