import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66ca7fef001fc700786e');


export const databases = new Databases(client);