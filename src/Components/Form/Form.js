import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCar} from "../../store";


const Form = () => {
    const {handleSubmit,register,reset} = useForm();
    const dispatch = useDispatch();

    function submit(data) {
        dispatch(addCar({data}))
        reset()

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Prise: <input type="text" {...register('prise')}/></label>
                <label>Year: <input type="text" {...register('year')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};
export {Form};