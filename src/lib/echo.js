import Echo from "laravel-echo";
import { broadcastAuthInstance } from "./apicalls";
const broadcastAuthInstance = axios.create({
    baseURL: 'https://chat.ratefy.co/api/broadcasting/',// the auth route
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
const EchoConfig = () => {
    window.Pusher = require('pusher-js');
    broadcastAuthInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: "local",// same key used in the pusher key 
        wsHost: "https://chat.ratefy.co",// host when you deploy would be your domain
        wsPort: 6002,// same port
        forceTLS: false, // force https to false
        disableStats: true, // don't send stats to pusher because we aren't using pusher
        authorizer: (channel, option) => {
            return {
                authorize: (socketId, callback) => {
                    broadcastAuthInstance.post('auth', {
                        socket_id: socketId,
                        channel_name: channel.name,
                    })
                        .then(response => {
                            console.log(response)
                            callback(false, response.data);
                        })
                        .catch(error => {
                            callback(true, error);
                        });
                }
            }
        }
    })
}
export default EchoConfig;