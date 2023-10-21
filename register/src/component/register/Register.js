import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { GoUnlock } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import { BsHouseAdd, BsTelephone } from 'react-icons/bs';
import style from "./Register.module.css";



const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/;


function Register() {

    const userRef = useRef();
    const errRef = useRef();
  
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [houseAddress, setHouseAddress] = useState("");


    const [password, setPassword] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
  
  
  
    const [password_confirm, setConfirmPassword] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
  

  
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
  
      useEffect(() => {
          userRef.current.focus();
      }, [])
  

  
   
  
      useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === password_confirm);
      }, [password, password_confirm])
  
      useEffect(() => {
        setErrMsg('');
    }, [password, password_confirm])

  
    const handleSubmit = async (event) => {
      event.preventDefault();
    //   const data = {
    //     username: userName,
    //     email: email,
    //     password: password,
    //     password_confirm: password_confirm
    //   }
  
  
  
  
    const v1 = USER_REGEX.test(userName);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2 ) {
        setErrMsg("Invalid Entry");
        return;
    }  
    // try{
    //    axios.post(url, data, {
    //     headers:{
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     }
    //    }
    //    ).then((response) =>{
    //     setSuccess(true);
  
        //clear state and controlled inputs
        //need value attrib on inputs for this
  
        setUserName('');
        setPassword('');
        setPhoneNumber('');
        setHouseAddress('');
        setEmail('');
        setConfirmPassword('');
      }
    // )}
    // catch(error){
    //     console.log(error)
    //     if (!error?.response) {
    //       setErrMsg('No Server Response');
    //   } else if (error.response?.status === 409) {
    //       setErrMsg('Username Taken');
    //   } else {
    //       setErrMsg('Registration Failed')
    //   }
    //   errRef.current.focus();
  
    // }
  
   


  return (
    <>
    
    { success ? (
                  <>
                  </>

            ) : (
           
    <div className={style.registerBody}>
        <main  className={style.main}>
            <h1>Join Us</h1>
            <p ref={errRef} className={errMsg ? style.errmsg : style.offscreen} aria-live="assertive">{errMsg}</p>
            <form action="" onSubmit={handleSubmit}  className={style.regBox}>
                <div className={style.boxPos}>
                    <div >
                        <p>Username</p>
                        <div className={style.inputWrpapper}>
                            <i><AiOutlineUser /></i>
                            <input type='text' 
                            value={userName}
                            onChange={(event) => setUserName(event.target.value)}
                            placeholder='John Dol'
                            ref={userRef}
                            autoComplete="on"
                            required />
                        </div>
                    </div>
                    <div>
                        <p>Email</p>
                        <div className={style.inputWrpapper}>
                            <i><HiOutlineMail /></i>
                            <input type='email' 
                            value={email}
                            autoComplete="on"
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder='JohnDol@example.com' required />
                        </div>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <div className={style.inputWrpapper}>
                            <i><BsTelephone /></i>
                            <input type='tel' 
                            value={phoneNumber}
                            autoComplete="on"
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            maxlength="14" minlength="9" placeholder='+1230000000000' required />
                        </div>
                    </div>
                    <div>
                        <p>House Address</p>
                        <div className={style.inputWrpapper}>
                            <i><BsHouseAdd /></i>
                            <input type='text' 
                            value={houseAddress}
                            autoComplete="on"
                            onChange={(event) => setHouseAddress(event.target.value)}
                            placeholder='Apapa 123' required />
                        </div>
                    </div>
                    <div>
                        <p>Password</p>
                        <div className={style.inputWrpapper}>
                            <i><GoUnlock /></i>
                            <input type='password' 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            minlength="8" 
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            required />
                            <i className={validPwd ? style.valid : style.hide}><FcCheckmark /></i>
                            <i  className={validPwd || !password ? style.hide : style.invalid}><AiOutlineClose /></i>
                        </div>
                    <div id="pwdnote" className={pwdFocus && !validPwd ? style.instructions : style.offscreen}>
                    <i><FcCancel /></i>
                        8 to 24 characters.<br/>
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </div>
                    </div>
                    <div>
                        <p>Confirm Password</p>
                        <div className={style.inputWrpapper}>
                            <i><GoUnlock /></i>
                            <input type='password' 
                            value={password_confirm}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            minlength="8" 
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby= "confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            required />
                        <i className={validMatch && password_confirm ? style.valid : style.hide}><FcCheckmark /></i>
                        <i className={validMatch || !password_confirm ? style.hide : style.invalid}><AiOutlineClose /></i>
                        </div>
                        <div id="confirmnote" className={matchFocus && !validMatch ? style.instructions : style.offscreen}>
                            <i><FcCancel /></i>
                            Password did not match.
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
                    <button type='submit' className={style.btn}
                    disabled={!validPwd && !validMatch ? true : false}>Register</button> 
                    <div className={style.signIn}>
                        <p>Already have an account?</p>
                        <a href='https'>Login</a>
                    </div>
                </div>
            </form>
        </main>
    </div>
     ) 
    }
    </> 
  )
}

export default Register;