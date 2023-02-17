import React from "react";
import p1 from '../../../assets/people/p1.jpg';
import p2 from '../../../assets/people/p2.jpg';
import p3 from '../../../assets/people/p3.jpg';


export const Form = () => {
    const [mssg, setMessg] = React.useState('leave a message');
    const [text2, setText2] = React.useState('we love to hear from you')
    const inputs = [
        {
            id: 1,
            input: 'text',
            placeholder:'your name',
            
        },
        {
            id: 2,
            input: 'email',
            placeholder: 'email',
        },
        {
            id: 3,
            input: 'text',
            placeholder: 'subject'
        }
    ]

    const clients = [
        {
            id: 1,
            img: p1,
            name: 'john doe',
            Occupation: 'senior marketing manager',
            phone: '+9 652 147 85',
            email: 'johndoe@outlook.ma'
        },
        {
            id: 2,
            img: p2,
            name: 'william smith',
            Occupation: 'senior marketing manager',
            phone: '+9 652 147 85',
            email: 'johndoe@outlook.ma'
        },
        {
            id: 3,
            img: p3,
            name: 'emma stone',
            Occupation: 'senior marketing manager',
            phone: '+9 652 147 85',
            email: 'johndoe@outlook.ma'
        }
    ]
    return (
        <> 
            <section className="Form">
                <div id="form">
                    <aside className="form">
                        <h1 className="text"> {mssg} </h1>
                        <h1 className="text2"> {text2} </h1>
                        <form 
                            action=""
                            onSubmit={(e) => {
                                e.preventDefault()
                            }}
                        >
                            <div className="inputs">
                                {inputs.map(input => {
                                    return  <input  
                                                key={input.id} 
                                                type={input.input} 
                                                className="input" 
                                                placeholder={input.placeholder}
                                            />
                                })}
                                <textarea 
                                    name="" 
                                    id="" 
                                    className="textarea" 
                                    cols="" 
                                    rows=""
                                    placeholder="your message"
                                ></textarea>
                                <button className="submit">submit</button>
                            </div>
                        </form>
                    </aside>
                    <aside className="rateclient">
                        <div className="clients">
                        {clients.map(client => {
                                return (
                                    <div className="client" key={client.id}>
                                        <div className="img" style={{ backgroundImage: `url(.${client.img})` }}></div>
                                        <div className="detail">
                                            <h1 className="name"> {client.name} </h1>
                                            <h1 className="occupation"> {client.Occupation} </h1>
                                            <h1 className="phone">phone: <span> {client.phone} </span> </h1>
                                            <h1 className="email">email : <span> {client.email} </span></h1>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}