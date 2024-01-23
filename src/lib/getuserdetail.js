"use server"
import { cookies } from "next/headers";
export const getUserDetails = async () => {
    const cookieStore =  cookies();
    const users = cookieStore.get('auth');
    const get = JSON.parse(users.value);
    console.log(get.token);
   return get.token;
}