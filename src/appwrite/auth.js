import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite";

// const client = new Client();
// client.setEndpoint(conf.malUrl).setLocale(conf.malProjectId);
// const account = new Account(client) 
// export default account

export class AuthService {
    client = new Client();
    account;
  
    constructor(){
        this.client
            .setEndpoint(conf.malUrl)
            .setLocale(conf.malProjectId);
        this.account = new Account(this.client)  
    }

    async createAccount({name,email,password}) {
        console.log(name)
        console.log(email)
        console.log(password)
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return this.login({email:email,
                    password : password});

            }
            else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login ({email,password}){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch(error) {
            console.log("MAL servies :: getCurrentUser :: error",error);
        }

        return null;
    }

    async logout () {
        try {
            await this.account.deleteSessions()
        }catch(error) {
            console.log("MAL servies :: logout :: error",error);
        }
    }

}

const authSerivce = new AuthService()

export default authSerivce