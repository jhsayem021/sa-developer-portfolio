
import {React} from 'react';
import 'animate.css';
const Contact = () => {
    return (
        <div className="py-4 text-2xl  ">
            <h1 id="contact" className="animate__lightSpeedInLeft">contact me</h1>
            <form action="https://formsubmit.co/sayemmetro420@gmail.com" method="POST">
     <div className="grid justify-center">
     <input className="p-2 rounded my-2 " type="text" name="name" required placeholder="Name" />
     <input className="p-2 rounded my-2" type="email" name="email" required placeholder="Email"/>
     <textarea className="p-2 rounded my-2" type="text" name="message" required placeholder="Messege"/>
     </div>
     <button className="p-2 rounded bg-yellow-600" type="submit">Send</button>
</form>
        </div>
    );
};

export default Contact;