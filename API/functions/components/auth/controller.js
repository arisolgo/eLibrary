

function login( email, password, db, config, jwt){
    return new Promise((resolve, reject)=>{
        if( !password || !email){
            reject('Datos incorrectos');
            return false;
        }
        let user;
        let usersRef = db.collection('users');
        let query = usersRef.where('email', '==', email).where('password', '==', password).get()
        .then(snapshot =>{
            if(snapshot.empty){
                console.log('Usuario o Contraseña incorrectos');
                return;
            }

            const payload = {check: true};
            const token = jwt.sign(payload, config.llave, {expiresIn: 1440});
            snapshot.forEach(doc => {
                user = {
                    id:doc.id,
                    userName: doc.data().userName,
                    password: doc.data().password,
                    token: token

                }
               
            });
            resolve(user);
        })
        .catch(err=>{
            console.log("Algo salió mal")
        })
        
    })
   
}


module.exports = {
     login
}