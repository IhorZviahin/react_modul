import React from 'react';
import {useForm} from "react-hook-form";

const Form = ({getFormData}) => {
    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {
        getFormData(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>model: <input type="text" {...register('model')} /></label>
            <label>price: <input type="text" {...register('price')} /></label>
            <label>year: <input type="text" {...register('year')} /></label>
            <button>Save</button>
        </form>
    );
};

export default Form;