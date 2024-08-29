export class Client{
    constructor(email=null, password=null, username=null){
        this.email = email;
        this.password = password;
        this.username = username;
    }
    createClient(email, password, username){
        this.email = email
        this.password = password
        this.username = username
    }
    
    getInfoClient(){
        const info = `E-mail: ${this.email} | Password: ${this.password} | Username: ${this.username}`;
        return info;
    }
    
    updateClient(parameters){
        const{email=null, password=null, username=null} = parameters
        if(email !== null){
            this.email = email
        }
        if(password !== null){
            this.password = password
        }
        if(username !== null){
            this.username = username
        }
    }
    
    deleteClient(){
        this.email = null
        this.password = null
        this.username = null
    }
}