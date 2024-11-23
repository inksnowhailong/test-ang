import { AbsLogin } from "../abstruct/login";
import { loginResult } from "../models/loginModel";

export class Login extends AbsLogin {
    override login(...args: any[]): Promise<loginResult> {
        throw new Error("Method not implemented.");
    }
    override logout(...args: any[]): Promise<any> {
        throw new Error("Method not implemented.");
    }
    override relogin(...args: any[]): Promise<loginResult> {
        throw new Error("Method not implemented.");
    }
    override register(...args: any[]): Promise<any> {
        throw new Error("Method not implemented.");
    }


}
