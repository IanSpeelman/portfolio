import styles from './index.module.css'
import Link from '../../Components/Link/index'
import { icons } from '../../Utils/icons'
import { useState } from 'react'


export default function Contact() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)

    async function handleSubmit() {
        if (email && message) {

            const url = 'https://mail.ianspeelman.com';
            const apiKey = import.meta.env.VITE_API_KEY;
            const secretKey = import.meta.env.VITE_SECRET_KEY;

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(apiKey + ':' + secretKey),
            }

            const body = JSON.stringify({
                Messages: [
                    {
                        From: {
                            Email: 'ianspeelman@gmail.com',
                            Name: 'Ian Speelman'
                        },
                        To: [
                            {
                                Email: 'ianspeelman@gmail.com',
                                Name: 'meister'
                            }
                        ],
                        Subject: 'New Message from Portfolio Form',
                        TextPart: `message is from: ${email} \n ${message}`,
                        HTMLPart: `message is from: ${email} \n ${message}`
                    }
                ]
            });

            try {
                const result = await fetch(url, {
                    mode: 'cors',
                    method: 'POST',
                    headers: headers,
                    body: body
                })
                const data = await result.json();
                console.log(data)
            }
            catch (err) {
                console.log(err)
            }
            setEmail('')
            setMessage('')
            setError(false)
        }
        else {
            setError(true)
        }
    }


    return (
        <div className={styles.container} id='contact'>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.center}>
                <div className={styles.form}>
                    <label htmlFor="email">E-Mail:</label>
                    <input className={`${styles.input} ${error && styles.error}`} value={email} onChange={(e) => setEmail(e.target.value)} type='text' id='email' placeholder='Enter E-Mail' />
                    <label htmlFor="message">Message:</label>
                    <textarea className={`${styles.input} ${error && styles.error}`} rows={12} value={message} onChange={(e) => setMessage(e.target.value)} id='message' placeholder='Enter Message'></textarea>
                    <button className={styles.button} onClick={handleSubmit}>Send!</button>
                </div>
                <div className={styles.line}>
                </div>
                <div className={styles.links}>
                    <Link text="IanSpeelman" link="http://github.com/ianspeelman" icon={icons.github.path} />
                    <Link text="Ian Speelman" link="https://www.linkedin.com/in/ian-speelman-6200aa132" icon={icons.linkedin.path} />
                    <Link text="Ianspeelman@gmail.com" link="mailto:ianspeelman@gmail.com" icon={icons.mail.path} />
                </div>
            </div>
        </div>
    )
}
