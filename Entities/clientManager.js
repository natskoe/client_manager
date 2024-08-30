import { Client } from "./client.js"

export class ClientManager{
    constructor(){
        this.clients = []
    }

    addClient(client){
        if (client instanceof Client){
            this.clients.push(client)
        }
        else{
            console.log('Client invalid.')
        }
    }

    searchClient(email){
        const client = this.clients.find(client => client.email === email)
        
        if (client){
            return client
        }else{
            console.log('Client not found.');
            return null
        }
    }

    removeClient(email){
        const index = this.clients.findIndex(client => client.email === email)
        
        if (index !== -1){
            this.clients.splice(index, 1);
        }else{
            console.log('Client not found.');
        }
    }
}