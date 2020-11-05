import React from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import './Form.css';
/* Form Component
   Form componenet with basic validation
*/
const Form = props => {
    const {formLabels, buttonText} = props;
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = data => {};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="number"
                name="phone"
                placeholder={formLabels[0]}
                className="input-form"
                ref={register({
                    required: {value: true, message: 'Your Phone is required'},
                    minLength: {value: 10, message: 'Phone must be 10 digits'},
                    maxLength: {value: 10, message: 'Phone must be 10 digits'},
                })}
                style={{borderColor: errors.phone && 'red'}}
            />

            <span>{errors.phone && errors.phone.message}</span>
            <input
                type="text"
                name="email"
                placeholder={formLabels[1]}
                className="input-form"
                ref={register({
                    required: {value: true, message: 'Your email is required'},
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid email address',
                    },
                })}
                style={{borderColor: errors.email && 'red'}}
            />
            <span>{errors.email && errors.email.message}</span>
            <input
                type="text"
                name="pass"
                placeholder={formLabels[2]}
                className="input-form"
                ref={register({
                    required: {value: true, message: 'Your password is required'},
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                            'password should be more than 8 digits. It should include at least: a number, a capital letter, a symbol and a low case letter',
                    },
                })}
                style={{borderColor: errors.pass && 'red'}}
            />
            <span> {errors.pass && errors.pass.message}</span>
            <div className="buttonHolder">
                <input type="submit" className="submit-button" label={buttonText} />
            </div>
        </form>
    );
};

Form.propTypes = {
    formLabels: PropTypes.instanceOf(Array).isRequired,
    buttonText: PropTypes.instanceOf(Array).isRequired,
};

export default Form;
