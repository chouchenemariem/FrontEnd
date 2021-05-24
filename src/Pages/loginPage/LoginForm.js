import React, { useState, useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import * as Yup from 'yup';
import "./LoginPage.css";
import { Formik, Form } from 'formik';
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const authentification = useContext(AuthContext);





    return (

        <Formik

            initialValues={{ password: '', email: '' }}

            validationSchema={Yup.object({

                password: Yup.string()

                    .max(20, 'Must be 20 characters or less')

                    .required('Required'),

                email: Yup.string().email('Invalid email address').required('Required'),

            })}

            onSubmit={(values, { setSubmitting }) => {
              
                    console.log("dkhal");
                    let email = values.email;
                    let password = values.password;
                    if (email === "test@test.com" && password === "test") {
                        //using localStorage to save user
                        localStorage.setItem('password', password);
                        localStorage.setItem('email', email);
                        authentification.setAuth({ password, email });
                    } else {
                        setError('password and email do not match');
                    }

                    setSubmitting(false);

              


            }

            }

        >

            <div className="FormContainer">
                {(error !== "") ? <div className="error">{error}</div> : ""}
                <Form className="form">



                    <Input label="Email Address" name="email" type="email" placeholder="Email"    onChange={e => setEmail(e.target.value)} />
                    <Input label="Password" name="password" type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)} />
                    <Button label="Submit" type="submit" backgroundColor="#1877f2" color="#fff" />


                </Form>

            </div>

        </Formik>


    )
}

export default LoginForm
