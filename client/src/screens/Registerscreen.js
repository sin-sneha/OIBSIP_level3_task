import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {registerUser} from '../actions/userActions';

export default function Registerscreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

const dispatch =useDispatch()
    function register (){
        if(password!=cpassword){
            alert("password not matched")
        }else{
            const user={
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }
    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left'>
                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input required type='text' placeholder='name' className='form-control'  value={name} onChange={(e)=>{setname(e.target.value)}} />
                        <input required type='text' placeholder='email' className='form-control'  value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        <input type='text' placeholder='password' className='form-control'  value={password} required onChange={(e)=>{setpassword(e.target.value)}} />
                        <input type='text' placeholder='confirm password' className='form-control'  value={cpassword} required onChange={(e)=>{setcpassword(e.target.value)}}/>
                        <button onClick={register} className='btn mt-3'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )


}