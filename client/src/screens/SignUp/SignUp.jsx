import {useState} from 'react';
import './SignUp.css'
import {signUp} from '../../services/users'

function SignUp({setUser}) {

    const [passMessage, setPassMessage] = useState('')
    const [signUpForm, setSignUpForm] = useState({
        username: '',
        email: '',
        password: '',
        confPassword: ''
    })

    const credentials = {
        username: signUpForm.username,
        email: signUpForm.email,
        password_digest: signUpForm.password,
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(signUpForm.password === signUpForm.confPassword){
        await signUp(credentials)
        }else {
            setPassMessage('Password and Confirm Password do not match.')
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignUpForm({
          ...signUpForm,
          [name]: value,
        });
      };

  return <div>
      <div>
          helper text
      </div>
      <form className='signup-form' onSubmit={handleSubmit}>
          { passMessage &&
              <h2>{passMessage}</h2>
          }
      <input onChange={handleChange} type="text" name='username' value={signUpForm.username} placeholder='Username' required/>
      <br />
      <input onChange={handleChange} type="text" name='email' value={signUpForm.email} placeholder='Email' required/><br />
      <input onChange={handleChange} type="password" name='password' value={signUpForm.password} placeholder='Password' required/><br />
      <input onChange={handleChange} type="password" name='confPassword' value={signUpForm.confPassword}placeholder='Confirm Password' required/><br />
      <button>Sign Up</button>
      </form>
  </div>;
}

export default SignUp;
