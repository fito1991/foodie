import React from 'react';

const Form = () => {
    return (
        <form>
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
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <div className="row">
                        <div className="form-group col-12">
                            <label htmlFor="comment">Mensaje</label>
                            <textarea 
                                name="comment" 
                                id="comment" 
                                cols="30" 
                                rows="4"
                                placeholder="Mi experiencia fue..."
                                className="form-control"
                                required
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
    );
}
 
export default Form;