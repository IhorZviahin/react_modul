import React from 'react';
import {useForm} from "react-hook-form";

const Form = ({getFormData}) => {
    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {
        getFormData(data)
        reset()
    }


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <label>Dog: <input type="text" {...register('dogname')} /></label>
                    <button>SaveDog</button>
                </form>
            </div>
        </div>
    );
};

export default Form;