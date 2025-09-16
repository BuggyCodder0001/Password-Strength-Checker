// import React, { useState } from 'react'
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const checkPasswordstrength = (password) => {
    let criteriaMet = 0;
    if(password.length >= 8)criteriaMet++;
    if(/[A-Z]/.test(password)) criteriaMet++;
    if(/[a-z]/.test(password)) criteriaMet++;
    if(/[0-9]/.test(password)) criteriaMet++;
    if(/[^A-Za-z0-9]/.test(password)) criteriaMet++;

    if(criteriaMet === 0)return 'Weak Password';
    else if(criteriaMet === 1) return 'Level 1';
    else if(criteriaMet === 2 || criteriaMet === 3) return 'Level 2';
    else if(criteriaMet === 4 || criteriaMet === 5) return 'Level 3';
}

const PasswordStrength = () => {

    const [password , setPassword] = useState('');
    const [strength , setStrength] = useState('');
    const [showPassword , setshowPassword] = useState(false);

    const handelStrength = () => {
        const result = checkPasswordstrength(password);
        setStrength(result);
    }
    

    return (
        <div className='container'>
            <h2>Password Strength checker</h2>
            <div className='p-container'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
                <span className='eye-container' onClick={() => setshowPassword(!showPassword)}>
                    {showPassword ? <Eye/> : <EyeOff/>}
                    
                </span>
                <button 
                    onClick={handelStrength}
                >
                    Check Strength
                </button>

                <div className='result-container'>
                    {strength && (
                        <p className="result">Strength : {strength}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PasswordStrength;
