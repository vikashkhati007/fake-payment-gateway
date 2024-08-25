import { Query } from "appwrite";
import { databases } from "./appwrite";

export const checkExistingUser = async (emailaddress: string) => {
    const result = await databases.listDocuments(
        `66ca805d0029c5fcac86`,
         `66ca806b003b510ae7c0`,
        [
            Query.equal('email', emailaddress)
        ]
    );
    return result;
}

export const loginUser = async (emailaddress: string, password: string) => {
    const result = await databases.listDocuments(
        `66ca805d0029c5fcac86`,
         `66ca806b003b510ae7c0`,
        [
            Query.equal('email', emailaddress),
            Query.equal('password', password)
        ]
    );
    return result;
}