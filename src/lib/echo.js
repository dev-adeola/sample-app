"use client"
import Echo from 'laravel-echo';
import axios from 'axios';
import { getUserDetails } from '@/lib/getuserdetail';
const broadcastAuthInstance = axios.create({
    baseURL: 'https://chat.ratefy.co/broadcasting/',// the auth route
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    });

export const  echoTest = () => {
    const token = getUserDetails();
    window.Pusher = require('pusher-js');
    broadcastAuthInstance.defaults.headers.common['Authorization'] = `Bearer ${token}}`;
    window.echo =  new Echo({
        broadcaster: 'pusher',
        key: "ratefy",
        cluster: 'mtl',
        wsHost: "https://chat.ratefy.co",
        wssPort: 6002,
        forceTLS: false,
        disableStats: true,
        authorizer: (channel, option) => {
            return {
                authorize: (socketId, callback) => {
                    broadcastAuthInstance.post('auth', {
                        socket_id: socketId,
                        channel_name: channel.name,
                    }).then(response => {
                        console.log(response)
                        callback(false, response.data);
                    }).catch(error => {
                        callback(true, error);
                    });
                }
            }
        }
    });

    
    console.log(window.echo);
}


