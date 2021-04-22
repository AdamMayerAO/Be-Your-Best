import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    login,
    signup
} from "./redux/actions/auth";
import {setJwtTokenInHeaders} from "./services";
import logo from './logo.jpg'
import './Login.css'

export default (props) => {
    const dispatch = useDispatch();
    const isPosting = useSelector((state)=>(state.authReducer.isPosting));
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regRePassword, setRegRePassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmitSignup = (e) => {
        e.preventDefault();
        if(firstName.length && lastName.length && regEmail.length && regPassword.length && regRePassword.length && regPassword===regRePassword) {
            const data = {
                email: regEmail,
                password: regPassword,
                firstName,
                lastName
            };
            dispatch(signup(data));
        }
        //Verify - all fields filled in, check that there is no one else with that email
        //if(!first-name)
        //if(!last-name)
        //if(email.includes "@")
        //if(!newPassword)
        //if(repeatPassword !=== newPassword)

        
        //POST - save their credentials
        //send user feedback: welcome! - 
        //load the '/reset' Route
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if(email.length && password.length) {
            const data = {
                email,
                password
            };
            dispatch(login(data, (token)=>{
                setJwtTokenInHeaders(token);
                localStorage.setItem('accessToken', token);
                props.history.push('/reset');
            }));
        }
        //verify and match credentials
        //GET request for their chosen traits and saved notes - set REDUX state
        //load the '/home' Route
    }
    //add user reducer so that all the traits and notes are linked to the user
    //fetch users from database
    
    return(
        <section>
            <header>
                <h3 className = 'title'>Welcome Back!</h3>
                <img className = 'image' src={logo} alt = "logo: decorative letter B"/>
            </header>
            <form className='login' onSubmit={isPosting ? ()=>{} : handleSubmitLogin}>
                <div className = 'email'>
                    <div>Welcome Back!</div>
                    <label htmlFor ='email'>Email:</label>
                    <input
                        type='email' name='email' id='email' value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
                <div className = 'password'>
                    <label htmlFor ='password'>Password:</label>
                    <input
                        type='password' name='password' id ='password' value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <button 
                    type = 'submit'
                >
                    { isPosting ? "Logging In..." : "Login" }
                </button>
            </form>
            <br/>
            <form className='signup-form' onSubmit={isPosting ? ()=>{} : handleSubmitSignup}>
                <div>
                    <div>Welcome, Please Sign Up:</div>
                    <label htmlFor="first-name">First name</label>
                    <input
                        placeholder='First Name' type="text" name='first-name' id='first-name' value={firstName}
                        onChange={(e)=>{setFirstName(e.target.value)}}
                    />
                </div>
                <div>
                <label htmlFor="last-name">Last name</label>
                <input
                    type="text" name='last-name' id='last-name' placeholder='Last Name' value={lastName}
                    onChange={(e)=>{setLastName(e.target.value)}}
                />
                </div>
                <div>
                <label htmlFor="username">Email</label>
                <input
                    type="email" name='username' id='username' value={regEmail}
                    onChange={(e)=>{setRegEmail(e.target.value)}}
                />
                </div>
                <div>
                <label htmlFor="newPassword">Password</label>
                <input
                    type="password" name='newPassword' id='newPassword' value={regPassword}
                    onChange={(e)=>{setRegPassword(e.target.value)}}
                />
                </div>
                <div>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input
                    type="text" name='repeatPassword' id='repeatPassword' value={regRePassword}
                    onChange={(e)=>{setRegRePassword(e.target.value)}}
                />
                </div>

                <button 
                    type = 'submit'
                >
                    { isPosting ? "Signing Up..." : "Sign Up" }
                </button>
            </form>
        </section>
    )
}
