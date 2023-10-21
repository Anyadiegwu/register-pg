import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { GoUnlock } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { BsHouseAdd, BsTelephone } from 'react-icons/bs';
import style from "./Register.module.css";


function Register() {
  return (
    <div className={style.registerBody}>
        <main  className={style.main}>
            <h1>Join Us</h1>
            <div  className={style.regBox}>
                <div className={style.boxPos}>
                    <div >
                        <p>Username</p>
                        <div className={style.inputWrpapper}>
                            <i><AiOutlineUser /></i>
                            <input type='text' placeholder='John Dol' required />
                        </div>
                    </div>
                    <div>
                        <p>Email</p>
                        <div className={style.inputWrpapper}>
                            <i><HiOutlineMail /></i>
                            <input type='email' placeholder='JohnDol@example.com' required />
                        </div>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <div className={style.inputWrpapper}>
                            <i><BsTelephone /></i>
                            <input type='tel' maxlength="14" minlength="9" placeholder='+1230000000000' required />
                        </div>
                    </div>
                    <div>
                        <p>House Address</p>
                        <div className={style.inputWrpapper}>
                            <i><BsHouseAdd /></i>
                            <input type='text' placeholder='Apapa 123' required />
                        </div>
                    </div>
                    <div>
                        <p>Password</p>
                        <div className={style.inputWrpapper}>
                            <i><GoUnlock /></i>
                            <input type='password' minlength="8" required />
                        </div>
                    </div>
                    <div>
                        <p>Confirm Password</p>
                        <div className={style.inputWrpapper}>
                            <i><GoUnlock /></i>
                            <input type='password' minlength="8" required />
                        </div>
                    </div>
                </div>
                <div className={style.terms}>
                    <div>
                        <p>By clicking Register, you agree to the <a href='https'>User Agreement</a>, <a href='https'>Privacy Policy</a>, 
                        and <a href='https'> Cookie Policy</a>.</p>
                    </div>
                </div>
                <div className={style.btnWrapper}>
                    <button type='submit' className={style.btn}>Register</button> 
                    <div className={style.signIn}>
                        <p>Already have an account?</p>
                        <a href='https'>Login</a>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Register;