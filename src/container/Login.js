import React, { useEffect, useState, } from 'react';
import { getUserInfor } from '../redux/slices/UserInforSlice'
import { useDispatch } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import './Login.scss';
import { handleSignUp, handleSignin } from '../services/adminService';
import { toast } from 'react-toastify';

const Login = () => {
    const [signin, setSignin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullname] = useState('');
    const [isShowPassword, setShowPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [isShowForgotPassword, setIsShowForgotPassword] = useState('');
    const dispatch = useDispatch();
    const handleOnChangeUser = (event) => {
        setUsername(event.target.value)
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleShowHidePassword = () => {
        setShowPassword(!isShowPassword);
    }

    const handleForgotPassword = () => {
        setIsShowForgotPassword(true);
        setSignin(false);
    }

    const handleOnChangeFullName = (event) => {
        setFullname(event.target.value);
    }
    const handleLogin = async () => {
        setErrMessage('');
        //  console.log("check data login:", username, password)
        //  try
        // dispatch(getUserInfor({ username, password }));
        await handleSignin(username, password)
        // if (data && data.errCode !== 0) {
        //     setErrMessage(data.errMessage)
        // }
        // if (data && data.errCode === 0) {
        //     // this.props.adminLoginSuccess(data.user)
        // }
        // } catch (e) {
        //     if (e.response) {
        //         if (e.response.data) {
        //             setErrMessage(e.response.data.errMessage)
        //         }
        //     }
        // }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            handleLogin()
        }
    }

    const handleChangeStatus = () => {
        setSignin(!signin)
        setIsShowForgotPassword(false);
        setErrMessage('');
    }

    const handleSignup = async () => {

        let data = {
            email: username,
            password: password,
            fullName: fullName
        }
        let response = await handleSignUp(data);
        if (response && response.errCode === 0) {
            setUsername('');
            setPassword('');
            setFullname('');
            toast.success("Đăng kí thành công !")
        } else {
            toast.error(response.errMessage);
        }
    }
    const handleSendForgotPassword = () => {
        alert("hoang dep trai !");
    }

    return (
        <div className='extra-infor'>
            <div className='body'>
                <div className='left-container'>
                    <div className='header-logo'>
                    </div>
                    <div className='group-item'>

                        <label className='label-title'>welcome to HomeCare</label>
                        <span className='content-introduction'> To keep connected with us please </span>
                        <span className='content-introduction'>login with your persional infor.</span>
                        {signin === false ?
                            < button className='btn-signin'
                                onClick={() => handleChangeStatus()}
                            >
                                sign in
                            </button> :
                            <button className='btn-signin'
                                onClick={() => handleChangeStatus()}
                            >
                                sign up
                            </button>
                        }
                    </div>
                </div>
                <div className='right-container'>
                    <div className='container'>
                        <div className=' body-right'>

                            {isShowForgotPassword === true ?
                                <>
                                    <div className='title-right mb-3 '>
                                        Forgot Password
                                    </div>
                                    <span className='mt-3'>
                                        Please enter your email address or mobile number to search for your account
                                    </span>
                                    <div className='group-signup-input'>
                                        <div className="form-floating mb-3 mt-3">
                                            <input type="email" className="form-control is-valid" id="floatingInput"
                                                placeholder="name@example.com" value={username}

                                                onChange={(event) => handleOnChangeUser(event)}
                                                onKeyDown={(event) => handleKeyDown(event)}
                                            />

                                            <label className='label-input' htmlFor="floatingInput">
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput1"
                                                placeholder="FullName" value={fullName}
                                                onChange={(event) => handleOnChangeFullName(event)}
                                                onKeyDown={(event) => handleKeyDown(event)}
                                            />

                                            <label className='label-input' htmlFor="floatingInput1">
                                                <i className="fa fa-user" aria-hidden="false"></i>
                                                FullName</label>
                                        </div>
                                    </div>
                                    <button className='btn-signup'
                                        onClick={() => handleSendForgotPassword()}
                                    >
                                        Send request
                                    </button>
                                </>

                                : <>
                                    <div className='title-right'>
                                        {signin === false ? "create acount" : "Login to your account"}
                                    </div>
                                    <div className='icon-signup'>
                                        <div className='group-signup-icon'>

                                            <div className='facebook-logo'>

                                            </div>
                                            <div className='instagram-logo'>

                                            </div>

                                        </div>
                                        <span className='type-signup'>or use your email for registration</span>

                                    </div>
                                    <div className='group-signup-input'>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput"
                                                placeholder="name@example.com" value={username}

                                                onChange={(event) => handleOnChangeUser(event)}
                                                onKeyDown={(event) => { handleKeyDown(event) }}
                                            />

                                            <label className='label-input' htmlFor="floatingInput">
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                Email address</label>
                                        </div>
                                        <div className="form-floating  mb-3">
                                            <input type={isShowPassword ? 'text' : 'password'} className="form-control"
                                                id="floatingPassword" placeholder="Password" value={password}
                                                onChange={(event) => handleOnChangePassword(event)}
                                                onKeyDown={(event) => { handleKeyDown(event) }}
                                            />
                                            <label className='label-input ' htmlFor="floatingPassword">
                                                <i className="fa fa-lock" aria-hidden="true"></i>
                                                Password
                                            </label>

                                            <span className='icon-isshow' onClick={() => { handleShowHidePassword() }}>
                                                <i className={isShowPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
                                            </span>
                                        </div>

                                        {signin === false ?
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput1"
                                                    placeholder="FullName" value={fullName}
                                                    onChange={(event) => handleOnChangeFullName(event)}
                                                    onKeyDown={(event) => handleKeyDown(event)}
                                                />

                                                <label className='label-input' htmlFor="floatingInput1">
                                                    <i className="fa fa-user" aria-hidden="false"></i>
                                                    FullName</label>
                                            </div>
                                            :
                                            <div>
                                            </div>
                                        }

                                        <div className='group-message'>
                                            <div className='errLogin' style={{ color: 'red' }}>
                                                {errMessage}
                                            </div>
                                            {signin === true ?
                                                <div className='forgot-passname'>
                                                    <span
                                                        onClick={() => handleForgotPassword()}
                                                    >Forgot Password</span>
                                                </div> : <></>}
                                        </div>
                                    </div>
                                    {signin === false ?
                                        <button className='btn-signup'
                                            onClick={() => handleSignup()}
                                        >
                                            sign up
                                        </button> :
                                        <button className='btn-signup'
                                            onClick={() => handleLogin()}
                                        >
                                            sign in
                                        </button>
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login;
