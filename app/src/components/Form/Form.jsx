import React from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import './Form.css';
/* Form Component
   
*/
const Form = props => {
    const {formLabels, buttonText} = props;
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = data => {
        alert(JSON.stringify(data));
        console.log(errors);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="number"
                name="Phone"
                placeholder={formLabels[0]}
                className="input-form"
                ref={register({
                    required: {value: true, message: 'Your Phone is required'},
                    min: {value: 10, message: 'Phone must be 10 digits'},
                })}
                style={{borderColor: errors[formLabels[0]] && 'red'}}
                // ref={register({required: true, maxLength: 10, minLength: 10})}
            />

            <span> {errors.Phone && errors.Phone.message}</span>
            <input
                type="text"
                name="email"
                placeholder={formLabels[1]}
                className="input-form"
                ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
            />
            <span> {errors.email && errors.email.message}</span>
            <input
                type="text"
                name="pass"
                placeholder={formLabels[2]}
                className="input-form"
                ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
            />
            <span> {errors.pass && errors.pass.message}</span>
            <div className="buttonHolder">
                <input type="submit" label={buttonText} />
            </div>
        </form>
    );
};

Form.propTypes = {
    formLabels: PropTypes.instanceOf(Array).isRequired,
    buttonText: PropTypes.instanceOf(Array).isRequired,
};

export default Form;
