import React, {Component} from 'react'
export default class Login extends Component {
    render (){
        return(
            <section>
                <header>
                    <h3>Join In</h3>
                    <img src="logo.jpg" alt = "logo: decorative letter B"/>
                </header>
                <form className='signup-form'>
                    <div>
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
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                    </div>
                    <div>
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input type="repeatPassword" name='repeatPassword' id='repeatPassword' />
                    </div>

                    <button 
                    type='submit'
                    
                    >Sign Up</button>
                </form>
      </section>
        )
    }
}
