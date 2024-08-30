import { describe, it, expect } from 'vitest';
import { ClientManager } from '../Entities/clientManager';
import { Client } from '../Entities/client'

describe('Tests from class ClientManager', () =>{
    it('A client have to be add in list.', () =>{
        const clients = new ClientManager();
        const client = new Client('bruno@gmail.com','1234','Bruno');
        clients.addClient(client)

        expect(clients.clients).toContain(client)
    })

    it('Method delete should to delete a client by email.', () =>{
        const clients = new ClientManager();

        const client = new Client();
        client.createClient('bruno@gmail.com','1234','Bruno');

        const client2 = new Client();
        client2.createClient('paulo@gmail.com','1234','Paulo');

        clients.addClient(client)
        clients.addClient(client2)
        
        expect(clients.clients).toContain(client)
        expect(clients.clients).toContain(client2)

        clients.removeClient(client.email)
        expect(clients.clients).toContain(client2)
        
        
    })

    it('Method get should search an client by email.', () =>{
        const clients = new ClientManager();
        const client = new Client();
        client.createClient('bruno@gmail.com','1234','Bruno');
        clients.addClient(client)
        const clientSearched = clients.searchClient(client.email)

        expect(clientSearched).toBe(client)

    })

    it('Method get cant return an client by an email absent.', () =>{
        const clients = new ClientManager();
        const clientSearched = clients.searchClient("email@gmail.com")

        expect(clientSearched).toBeNull()

    })


})
