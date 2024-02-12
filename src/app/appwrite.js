import { Client, Account, Storage, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); 

export const account = new Account(client);
export const storage = new Storage(client);
export const databeses = new Databases(client);

export { ID } from 'appwrite';

export const db_collection = {
    registration: 'r_registrations',
    newsletter: 'r_newsletter_subscription',
}