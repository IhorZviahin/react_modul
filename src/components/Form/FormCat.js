import React from 'react';
import {useForm} from "react-hook-form";

const FormCat = ({getFormCatData}) => {

    const {handleSubmit, register, reset} = useForm();

    const submitcat = (datacat) => {
        getFormCatData(datacat)
        reset()
    }
    return (
            <div>
                <form onSubmit={handleSubmit(submitcat)}>
                    <label>Cat: <input type="text" {...register('namecat')} /></label>
                    <button>SaveCat</button>
                </form>
            </div>
    );
};

export default FormCat;