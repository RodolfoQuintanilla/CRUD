import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Formulario = () => {

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo')
            .required('El Nombre del Cliente es obligatorio'),
        empresa: Yup.string()
            .required('El Nombre de la Esmpresa es Obligatorio'),
        email: Yup.string()
            .required('El Email es Obligatorio')
            .email('email no valido'),
        telefono: Yup.number()
            .positive('El Numero no Valido')
            .integer('El Numero no Valido')
            .typeError('El Numero no Valido')
        /*       notas: '' */
    })

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (


        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className="text-gray-600 font-bold text-xl uppercase 
            text-center">Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: ''
                }}

                onSubmit={(values) => {
                    handleSubmit(values)

                }}
                validationSchema={nuevoClienteSchema}
            >
                {({ errors }) => {
                    const { nombre, touched } = errors;

                    return (
                        <Form
                            className="mt-10"
                        >
                            <div className='mb-4'>
                                <label
                                    className="text-gray-800"
                                    htmlFor="nombre"
                                >Nombre:</label>
                                <Field
                                    id="nombre"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Nombre de Cliente"
                                    name='nombre'
                                />
                                <ErrorMessage name='nombre' component="div" className=" text-center my-4 bg-red-600 text-white font-bold p-3 uppercase" />
                            </div>
                            <div className='mb-4'>
                                <label
                                    className="text-gray-800"
                                    htmlFor="empresa"
                                >Empresa:</label>
                                <Field
                                    id="empresa"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder=" Empresa del Cliente"
                                    name="empresa"
                                />
                                <ErrorMessage name='empresa' component="div" className=" text-center my-4 bg-red-600 text-white font-bold p-3 uppercase" />
                            </div>

                            <div className='mb-4'>
                                <label
                                    className="text-gray-800"
                                    htmlFor="email"
                                >Email:</label>
                                <Field
                                    id="email"
                                    type="email"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder=" Email del Cliente"
                                    name="email"
                                />
                                <ErrorMessage name='email' component="div" className=" text-center my-4 bg-red-600 text-white font-bold p-3 uppercase" />
                            </div>
                            <div className='mb-4'>
                                <label
                                    className="text-gray-800"
                                    htmlFor="telefono"
                                >Telefono:</label>
                                <Field
                                    id="telefono"
                                    type="phone"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder=" Telefono del Cliente"
                                    name="telefono"
                                />
                                <ErrorMessage name='telefono' component="div" className=" text-center my-4 bg-red-600 text-white font-bold p-3 uppercase" />
                            </div>

                            <div className='mb-4'>
                                <label
                                    className="text-gray-800"
                                    htmlFor="notas"
                                >Notas:</label>
                                <Field
                                    as="textarea"
                                    id="notas"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                    placeholder=" Notas del Cliente"
                                    name="notas"
                                />

                                <input
                                    type="submit"
                                    value="Agregar Cliente"
                                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
                                />
                            </div>

                        </Form>
                    )
                }}
            </Formik>

        </div >
    );
};

export default Formulario;