"use server";
import { cookies } from 'next/headers';
export async function  authentication  (prevState, formData)  {
    let authenticate = false;
    const requestUrl = 'https://inlet.ratefy.co/login';
    const { email, password} = Object.fromEntries(formData);

    const requestData = {
        email: email,
        password: password
    }

    const request = new Request(requestUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Ratefy'
        }, 
        credentials: 'omit',
        body: JSON.stringify(requestData)
    });

    try {
         const authResponse = await fetch(request, { cache: 'no-store' });
         if(!authResponse.ok) {
            const errors = await authResponse.json();
            console.log("server error:  " + errors.message);
            authenticate = false;
         }else {
            const authData = await authResponse.json();
            authenticate = true;
            console.log(authData);
            cookies().set('auth', JSON.stringify(authData), { httpOnly: true, secure: true });
            
         }
    } catch(error) {
        console.log("System Error: " + error.toString())
    }

    // return authenticate;
    return {
        message: authenticate.toString(),
      }
}

export const authenticated = async ()  => {
    const cookieStore =  cookies();
    const users = await cookieStore.get('auth');
    return users;
}


