import axios, { AxiosResponse } from 'axios';

const BACK_END_URI = 'https://email-handler.onrender.com';

export const api = axios.create({
    baseURL: BACK_END_URI,
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});

export const sendEmail = async (fromEmail: string, message: string): Promise<AxiosResponse<any, any>> => {
    return (await api.post('/sendemail', 
    { 
        email: 'geraldwicks.desktop@gmail.com',
        subject: 'Someone send a message to portfolio website',
        message: `<h2>Someone with the email: ${fromEmail}, sent the message:</h3></br>
        <hr>
        <h3>${message}</h3>
        `
    }
    ));
}