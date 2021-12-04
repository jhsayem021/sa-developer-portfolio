import React from 'react';

const Contact = () => {
    return (
        <div className="py-6">
            <h1 className="text-center text-4xl py-4">Send me a Messege</h1>

            <form action="https://formsubmit.co/sayemmetro420@gmail.com" method="POST">
                <div className="grid ps-4 justify-center">
                <h4>Name:</h4>
                <input className="p-2 rounded my-2 bg-blue-300 text-black" type="text" name="name" required  />
                <h4>Email:</h4>
                <input className="p-2 rounded my-2 bg-blue-300 text-black" type="email" name="email" required />
                <h4>Message</h4>
                <textarea className="p-2 rounded my-2 bg-blue-300 text-black" 
                        // @ts-ignore
                type ="text" name="message" required />
                <button className="p-2 rounded bg-yellow-600 mx-6" type="submit">Send</button>
                </div>
                
             </form>
        </div>
    );
};

export default Contact;