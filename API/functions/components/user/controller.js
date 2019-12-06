

function createUser(userName, name, lastName, password, email, roleName, db){
    return new Promise((resolve, reject)=>{
        if(!userName || !name || !lastName || !password || !email || !roleName){
            reject('Datos incorrectos');
            return false;
        }
       
        const user = {
            
                userName: userName,
                name: name,
                lastName: lastName,
                password: password,
                email: email,
                roleName: roleName
              
        };


        db.collection('users').add(user);
      resolve(user);
    })
   
}

function getUsers(db){
    return new Promise (async (resolve, reject) =>{
        let query = db.collection('users');
        let response = [];
        await query.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        
        for (let doc of docs) {
           
            let selectedItem = {
                id:doc.id,
                userName: doc.data().userName,
                name: doc.data().name,
                lastName: doc.data().lastName,
                email: doc.data().email,
                roleName: doc.data().roleName
            };
            //console.log(doc.data().book)
            response.push(selectedItem);
        }
      
        });
        //console.log(response)
        resolve(response);
    })
    
}

function getUserById(id, db){
    return new Promise (async (resolve, reject) =>{
            const document = db.collection('users').doc(id);
            let item = await document.get();
            let response = item.data();
        resolve(response);
    });
}

function deleteUser(id, db){
    return new Promise (async (resolve, reject) =>{
        if(!id){
            reject("id no especificado");
            return false;
        }
        const document = db.collection('users').doc(id);
       resolve (await document.delete())
        

    })
}

function updateUser(userName, name, lastName, password, email, roleName, id, db){
    return new Promise (async (resolve, reject)=>{
        if(!id){
            reject("id no especificado");
        }
        const document = db.collection('users').doc(id);

       resolve(
             await document.update({
                userName: userName,
                name: name,
                lastName: lastName,
                password: password,
                email: email,
                roleName: roleName
             })

       ) 

    })
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUser
}