import React from 'react';
import axios from 'axios';

const Contact = ({stateData, setStateData}) => {


    //extraigo la data

    const {name, email, message} = stateData;

    // función que coloca la data en el state de Contact
    const handleChange = e => {
        // actualizar el state
        setStateData({
            ...stateData,
            [e.target.name] : e.target.value
        })
    }

    // envio del formulario

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(stateData);
        // const mensaje = async () => {
        //     const api = await fetch('https://api.elaniin.dev/api/contact');
        //     const res = await api.json();
        //     console.log(res);
        // }
        // mensaje();

        // fetch('https://api.elaniin.dev/api/contact',{
        //     method: "POST",
        //     body: JSON.stringify(stateData),
        //     header: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     mode: "no-cors"
        // }).then(
        //     (response) => (response.json())
        // ).then((response) => {
        //     if (response.status === 200) {
        //         console.log('success');
        //     }else if(response.status === 404){
        //         console.log('error');
        //     }else{
        //         console.log(response.status);
        //     }
        // })

        // axios.post('https://api.elaniin.dev/api/contact', {
        //     name: 'Fred',
        //     email: 'fred@mail.com',
        //     message: 'mi mensaje'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        axios('https://api.elaniin.dev/api/contact', {
            method: 'POST',
            body: JSON.stringify(stateData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });

        // console.log(JSON.stringify(stateData));

        // fetch('https://api.elaniin.dev/api/contact',{
        //     method: 'POST',
        //     body: JSON.stringify(stateData),
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        // }).then(
        //     res => res.json()
        // ).catch(error => console.error('Error:', error))
        // .then(response => console.log('Success:', response));
        
    }

    return ( 
        <div id="contact-us" className="row m-0 contact-us pb-5">
            <div className="col-12 text-center">
                <h2 className="DrukTextWideBold text-white title-experience wow animated fadeIn" data-wow-delay=".3s">Cuentanos tu experiencia</h2>
                <p className="subtitle-experience text-white">Don't miss out on our great offers & Receive deals from all our <br/>top restaurants via e-mail.</p>
            </div>
            <div className="col-12">
                <div className="container">
                    <form onSubmit={handleSubmit} className="pb-5">
                        <div className="row mt-4">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div className="row">
                                    <div className="form-group col-12">
                                        <label htmlFor="name">Nombre y Apellido</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            id="name"
                                            className="form-control"
                                            placeholder="John Doe"
                                            required
                                            value={name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-12">
                                        <label htmlFor="email">Correo electrónico</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email"
                                            className="form-control"
                                            placeholder="john.doe@gmail.com"
                                            required
                                            value={email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <div className="row">
                                    <div className="form-group col-12">
                                        <label htmlFor="message">Mensaje</label>
                                        <textarea 
                                            name="message" 
                                            id="message" 
                                            rows="4"
                                            className="form-control"
                                            placeholder="Mi experiencia fue..."
                                            required
                                            onChange={handleChange}
                                            value={message}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="col-12 text-center text-sm-center text-md-right">
                                        <button type="submit" className="btn btn-yellow">Enviar comentarios</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;