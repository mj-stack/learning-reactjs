import { useState } from 'react';
import './Form.css'

export function Form() {
  const [ passwordVisibility, setPasswordVisibility ] = useState('hidden');
  function showPassword() {
    if(passwordVisibility === 'hidden') {
      setPasswordVisibility('visible');
    } else {
      setPasswordVisibility('hidden');
    }
  }

  return(
    <>
      <p className="form-title">Hello, welcome to my website</p>
      <input className="email-input" type="text" placeholder="Email" />
      <div className="password-input-container">  
        <input className="password-input" type={passwordVisibility === 'visible' ? "text" : "password"} placeholder="Password" />
        <button className="show-password-btn" value={passwordVisibility} onClick={showPassword}>{passwordVisibility === 'hidden' ? 'Show' : 'Hide'}</button>
      </div>
      <button className="btn">Login</button>
      <button className="btn">Sign up</button>
    </>
  );
}