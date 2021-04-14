import React, {Component} from 'react'
import logo from './logo.jpg'
import './Login.css'
export default class Login extends Component {


    render (){
        const handleSubmitNewUser=()=>{
            console.log('submit')
            //Verify - all fields filled in, check that there is no one else with that email
            //
            //POST - save their credentials
            //send user feedback: welcome! - 
            //load the '/reset' Route
        }
        const handleUserLogin =()=>{
            console.log('welcome back')
            //verify and match credentials
            //GET request for their chosen traits and saved notes - set REDUX state
            //load the '/home' Route
        }
        return(
            <section>
                <header>
                    <h3 className = 'title'>Join In</h3>
                    <img className = 'image' src={logo} alt = "logo: decorative letter B"/>
                </header>
                <form className = 'login'>
                    <div className = 'email'>
                        <div>Welcome Back!</div>
                        <label htmlFor ='email'>Email:</label>
                        <input type = 'text' name = 'email' id = 'email'/>
                    </div>
                    <div className = 'password'>
                        <label htmlFor ='password'>Password:</label>
                        <input type = 'text' name = 'password' id = 'password'/>
                    </div>
                </form>
                <br/>
                <form className='signup-form'>
                    <div>
                        <div>Welcome, Please Sign Up:</div>
                        <label htmlFor="first-name">First name</label>
                        <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                    </div>
                    <div>
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                    </div>
                    <div>
                    <label htmlFor="username">Email</label>
                    <input type="text" name='username' id='username' />
                    </div>
                    <div>
                    <label htmlFor="newPassword">Password</label>
                    <input type="text" name='newPassword' id='newPassword' />
                    </div>
                    <div>
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input type="text" name='repeatPassword' id='repeatPassword' />
                    </div>

                    <button 
                    type='submit'
                    
                    >Sign Up</button>
                </form>
      </section>
        )
    }
}
