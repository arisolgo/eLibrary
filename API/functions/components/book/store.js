


function createBook(book){
   db.collection('books').add({
    title: book.title,
    author:book.author,
    description: book.description,
    editorial: book.editorial,
    textFile: book.file,
    audioFile: book.audio,
    userCreator: book.creatorUser,
    creationTime: book.creationDate.toString(),
    });

    console.log("Libro generado: ", book);

}

async function getBooks(){

    let bookList = [];
    let bookObject = {};
    let booksRef = db.collection('books');

    await booksRef.get()
    .then(snapshot => {
    snapshot.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());
         bookObject={
             id:doc.id,
             title:doc.data().title,
             author:doc.data().author,
             description: doc.data().description,
             editorial: doc.data().editorial,
             textFile: doc.data().file,
             audioFile: doc.data().audio,
             userCreator: doc.data().userCreator,
             creationTime: doc.data().creationTime,
        } 
        bookList.push(bookObject);
    });
    
    

  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
}

module.exports = {
    create: createBook,
    get: getBooks
}