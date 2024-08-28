import { Query } from "appwrite";
import { databases } from "./appwrite";

export const checkExistingUser = async (emailaddress: string) => {
    const result = await databases.listDocuments(
        `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`,
         `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID}`,
        [
            Query.equal('email', emailaddress)
        ]
    );
    return result;
}

export const loginUser = async (emailaddress: string, password: string) => {
    const result = await databases.listDocuments(
        `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`,
         `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID}`,
        [
            Query.equal('email', emailaddress),
            Query.equal('password', password)
        ]
    );
    return result;
}