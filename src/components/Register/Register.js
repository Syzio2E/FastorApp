import React, { useRef } from 'react';
import styles from './Register.module.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const numberInputRef = useRef()
    const navigate = useNavigate()

    const submitHandler=async(e)=>{
        e.preventDefault()
        const phone = numberInputRef.current.value
        localStorage.setItem('phone',phone)
        const dial_code = '+91'
        const response = await axios.post('https://staging.fastor.in/v1/pwa/user/register',{phone,dial_code},{headers:{'Content-Type':'application/json'}})
        console.log(response)
        if(response.status===200){
            navigate('/authpage')
        }
    }

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles['form-group']}>
          <label htmlFor="number" id="phone">Enter your Mobile Number</label>
          <p>We will send you a 4-digit verification code</p>
        </div>
        <div className={styles['form-group']}>
          <input type="text" id="phone" required ref={numberInputRef} placeholder='Enter Your Number'/>
          <button type="submit">Send Code</button>
        </div>
      </form>
    </div>
  );
};

export default Register;