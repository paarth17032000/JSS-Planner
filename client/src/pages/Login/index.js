import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { login } from "../../apis/index"
import styles from './Login.module.css'
import bg from '../../assets/images/bg-login.svg'
import Jss_Logo from '../../assets/images/logo/jss_logo.png'
import { toastNotification } from '../../components/utils/helper'

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            let response = await login(user, history)
            console.log(response)
            if(response.status) {toastNotification('success','Login Success', 3000)}
        } catch(error){
            toastNotification('error','Invalid Username or Password', 3000)
            // console.log(error)
        }
        
        
        // if(data) toastNotification('success','Login Success', 3000)
        // if(error) toastNotification('error',error, 3000)
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background">
            <div>
                <div className={`h-28 pl-5 flex flex-row justify-start items-center ${styles.borderBottom}`}>
                    <div><img src={Jss_Logo} alt="jss_logo" className={styles.jss_logo} /></div>
                    <div className="pl-5">
                        <div className="font-bold text-primary font-22">JSS Academy of technical education</div>
                        <div className="font-regular text-primary font-16">C-20/1, Sector-62, NOIDA.</div>
                    </div>
                </div>
                <div className={`flex justify-center items-center ${styles.section}`}>
                    <form onSubmit={handleSubmit} className="text-left">
                        <div className="font-regular font-28 text-secondary pb-6">Welcome back!</div>
                        <div className="pb-5 flex flex-col">
                            <div className="font-regular font-12 text-shadow pl-1">Email</div>
                            <input type="text" name="email" placeholder="Email..." className={`rounded-lg focus:outline-none ${styles.input}`} onChange={handleChange} />
                        </div>
                        <div className="pb-2 flex flex-col">
                            <div className="font-regular font-12 text-shadow pl-1">Password</div>
                            <input type="text" name="password" placeholder="Password..." className={`rounded-lg focus:outline-none ${styles.input}`} onChange={handleChange} />
                        </div>
                        <div className="font-regular font-16 text-right text-secondary pb-8">Forget Password?</div>
                        {/* <Link to='/staff-list'> */}
                        {/* <input type="submit" className="bg-primary text-white rounded-lg p-3 text-center font-semi-bold font-16">Login</input> */}
                        <input type="submit" value="Login" className="bg-primary cursor-pointer w-full text-white rounded-lg p-3 text-center font-semi-bold font-16" />
                        {/* </Link> */}
                    </form>
                </div>
            </div>

            <div className="bg-secondary hidden lg:block">
                <div className="h-28"></div>
                <div className={`flex flex-col justify-center items-center ${styles.section}`}>
                    <div className="font-regular font-36 text-white text-center">
                        Manage
                        <span className="font-bold">{' '}Time Table{' '}</span>
                        Easily
                    </div>
                    <div className="mt-6 mx-5">
                        <img src={bg} alt="bg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
