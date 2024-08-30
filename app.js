import { Client } from "./Entities/client.js";
import { ClientManager } from "./Entities/clientManager.js";

const client = new Client('bruno@gmail.com','1234','Bruno');
const client2 = new Client('teste@gmail.com','1234','Teste');
const clients = new ClientManager()

clients.addClient(client)
clients.addClient(client2)
console.log(clients)

const cli_log = clients.searchClient(client.email)
console.log(cli_log)


