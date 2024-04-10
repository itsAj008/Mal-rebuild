import conf from "../conf/conf"
import { Client, Account, Databases,Storage,Query } from "appwrite";


export class Servies{
    client = new Client();
    database;
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(conf.malUrl)
            .setLocale(conf.malProjectId);
        this.databases = new Databases(this.client) 
        this.bucket = new Storage(this.client)

    }
}

const servies = new Servies()

export default servies