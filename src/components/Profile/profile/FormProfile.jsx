import React from 'react';
import $ from 'jquery';

export const FormProfile = () => {
    const connect = [
        {
            id: 1,
            type: 'email',
            placeholder: 'enter your email',
        },
        {
            id: 2,
            type: 'password',
            placeholder: 'enter your password',
        }
    ]
    return (
        <>
            <section className="FormProfile">
                <div className="form">
                    <form 
                        action="" 
                        id='form'
                        onSubmit={ (e) => e.preventDefault() }
                    >
                        <div className="Inputs">
                            <div>
                                <h1 className="logo">store</h1>
                                <h1 className="connect">Log in to your account</h1>
                            </div>
                            {connect.map(input => {
                                return (
                                    <>
                                        <input 
                                            className='inputs' 
                                            type={input.type} 
                                            key={input.id} 
                                            placeholder={input.placeholder}
                                            id={ input.type }
                                        />
                                    </>
                                )
                            })}
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button 
                                    type="submit" 
                                    className="submit"
                                    onClick={() => {
                                        $('.Inputs .connect').text('Log in to your account')
                                    }}
                                >
                                submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
