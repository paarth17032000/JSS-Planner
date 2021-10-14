import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import bg from '../../assets/images/bg-login.png'
import Jss_Logo from '../../assets/images/logo/jss_logo.png'

export default function Login() {
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
                    <div className="text-left ">
                        <div className="font-regular font-28 text-secondary pb-6">Welcome back!</div>
                        <div className="pb-5"><input type="text" placeholder="Email" className={`rounded-lg ${styles.input}`} /></div>
                        <div className="pb-2"><input type="text" placeholder="Password" className={`rounded-lg ${styles.input}`} /></div>
                        <div className="font-regular font-16 text-right text-secondary pb-8">Forget Password?</div>
                        <Link to='/staff-list'>
                            <div className="bg-primary text-white rounded-lg p-3 text-center font-semi-bold font-16">Login</div>
                        </Link>
                    </div>
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
