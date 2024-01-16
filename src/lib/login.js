export const Authenticating = async () => {
    const loggedData = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!loggedData.ok) {
        throw new Error("Server not connecting or something went wrong.");
    }
    
    return loggedData.json();
    // return loggedData;
}

// export const Authenticated = async (id) => {
//     return loggedData.find((logged) => logged.id === id)
// }