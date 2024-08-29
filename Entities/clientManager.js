import { Client } from "./client"

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
        const clientSearched = this.clients.reduce((i, client) =>{
            if(client.email === email){
                return client
            }
        }, null)
        console.log('Client not found.')
    }

    removeClient(email){
        this.clients.reduce((i, client) =>{
            if(client.email === email){
                this.clients.pop(i)
            }
        }, null)
        console.log('Client not found.')
    }



}