import { Client } from "./Entities/client.js";
import { describe, it, expect } from 'vitest';

describe('Tests from class Client', ()=>{
    it('Should have 3 values: Email, password and username.', () => {
        const client = new Client();
        client.createClient('bruno@gmail.com','1234','Bruno');

        expect(client.email).toBe('bruno@gmail.com');
        expect(client.password).toBe('1234');
        expect(client.username).toBe('Bruno');
    })

    it('Method get should return the exactly value to the client.', () => {
        const client = new Client();
        client.createClient('bruno@gmail.com','1234','Bruno');
        const info = client.getInfoClient();
        const target = `E-mail: ${client.email} | Password: ${client.password} | Username: ${client.username}`;
        
        expect(info).toBe(target);
    })

    it('Method update should to update only one value.', () =>{
        const client = new Client();
        client.createClient('bruno@gmail.com','1234','Bruno');
        client.updateClient({email: 'onurb@gmail.com'});

        expect(client.email).toBe('onurb@gmail.com');
    })
    
    it('Method update should to update all values.', () =>{
        const client = new Client();
        client.createClient('a','a','a');
        client.updateClient({email: 'bruno@gmail.com', password: '1234', username:'Bruno'});

        expect(client.email).toBe('bruno@gmail.com');
        expect(client.password).toBe('1234');
        expect(client.username).toBe('Bruno');
    })

    it('Method delete should to change every value to null.', () => {
        const client = new Client();
        client.createClient('bruno@gmail.com','1234','Bruno');
        client.deleteClient();

        expect(client.email).toBe(null);
        expect(client.password).toBe(null);
        expect(client.username).toBe(null);
    })
})