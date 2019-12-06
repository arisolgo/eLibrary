

function registerUser(userName, name, lastName, password, email, roleName, db){
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
                roleName: 'reader'
              
        };


        db.collection('users').add(user);
      resolve(user);
    })
   
}


module.exports = {
    registerUser
}