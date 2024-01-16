"use server";
export const authRegistration = async (formData) => {
    let responseData = null;
    const requestUrl = 'https://inlet.ratefy.co/register';
    const { firstname, lastname, username, email, mobile, ip, device, password, password_confirmation } = Object.fromEntries(formData);
    const requestData = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email:    email,
        mobile:   mobile,
        password: password,
        password_confirmation: password_confirmation,
        ip:   ip,
        device: device,
    };

    const request = new Request(requestUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'User-Agent': 'Ratefy'
        }, 
        credentials: 'omit',
        body: JSON.stringify(requestData)
    });

    try {
     const requestResponse = await fetch(request, { cache: 'no-store', next: {revalidate: 1} });
        if(!requestResponse.ok){
            const errorMessage = await requestResponse.json();
            console.log("==========[ERROR]====111");
            console.log(errorMessage.message)
        }else{
            responseData = await requestResponse.json();
            console.log(responseData);
        }
        
    }catch(error) {
        console.log("==========[ERROR]====2222");
        console.log(error);
    }
    return responseData;
}