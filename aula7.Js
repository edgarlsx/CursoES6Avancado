//EventEmitter
const EventEmitter = require('events');

class Users extends EventEmitter{
    userLogged(data){
        this.emit('User Logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
})

users.emit('User logged', {user: 'Edgar Lopes da Silva'})
users.emit('User logged', {user: 'Eliabe Lopes da Silva'})

// emitter.on('User logged', data => {
//     console.log(data);
// })
// emitter.emit('User logged', {user: 'Edgar Lopes da Silva'})
// emitter.emit('User logged', {user: 'Eliabe Lopes da Silva'})
