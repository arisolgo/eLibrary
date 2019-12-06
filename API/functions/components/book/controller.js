

function createBook(user, title, description, editorial, author, db){
    return new Promise((resolve, reject)=>{
        if(!user || !title || !description || !editorial || !author){
            reject('Datos incorrectos');
            return false;
        }

        let current_datetime = new Date()
        let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
       
        const book = {
            userCreator: user,
            title: title,
            author: author,
            editorial: editorial,
            description: description,
            creationDate: formatted_date,
            filePath:null,
            audioFilePath:null
        };


        db.collection('books').add({
        //USER MODEL
                title: title,
                author: author,
                description: description,
                editorial: editorial,
                textFile: null,
                audioFile: null,
                userCreator: user,
                creationTime: formatted_date.toString(),
    //*/
        })
      resolve(book);
    })
   
}

function getBooks(db){
    return new Promise (async (resolve, reject) =>{
        let query = db.collection('books');
        let response = [];
        await query.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        
        for (let doc of docs) {
           
            let selectedItem = {
                id:doc.id,
                title:doc.data().title,
                author:doc.data().author,
                description: doc.data().description,
                editorial: doc.data().editorial,
                textFile: doc.data().file,
                audioFile: doc.data().audio,
                userCreator: doc.data().userCreator,
                creationTime: doc.data().creationTime,
            };
            //console.log(doc.data().book)
            response.push(selectedItem);
        }
      
        });
        //console.log(response)
        resolve(response);
    })
    
}

function getBookById(id, db){
    return new Promise (async (resolve, reject) =>{
            const document = db.collection('books').doc(id);
            let item = await document.get();
            let response = item.data();
        resolve(response);
    });
}

function deleteBook(id, db){
    return new Promise (async (resolve, reject) =>{
        if(!id){
            reject("id no especificado");
            return false;
        }
        const document = db.collection('books').doc(id);
       resolve (await document.delete())
        

    })
}

function updateBook(user, title, description, editorial, author, id, db){
    return new Promise (async (resolve, reject)=>{
        if(!id){
            reject("id no especificado");
        }
        const document = db.collection('books').doc(id);

       resolve(
             await document.update({
                 title: title,
                 author: author,
                 description: description,
                 editorial: editorial,
                 textFile: null,
                 audioFile: null,
                 userCreator: user,
             })

       ) 

    })
}

module.exports = {
    createBook,
    getBooks,
    getBookById,
    deleteBook,
    updateBook
}