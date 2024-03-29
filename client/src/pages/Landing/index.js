import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'
import guest1 from '../../assets/images/logo/guest10.png'
import guest2 from '../../assets/images/logo/guest11.png'
import Jss_Logo from '../../assets/images/logo/jss_logo.png'

export default function Landing() {
    return (
        <div className="min-h-screen bg-background">

            <div className={`h-28 pl-5 flex flex-row justify-start items-center ${styles.borderBottom}`}>
                <div><img src={Jss_Logo} alt="jss_logo" className={styles.jss_logo} /></div>
                <div className="pl-5">
                    <div className="font-bold text-primary font-22">JSS Academy of technical education</div>
                    <div className="font-regular text-primary font-16">C-20/1, Sector-62, NOIDA.</div>
                </div>
            </div>

            <div className={`${styles.section} text-center flex justify-center items-center`}>
                <div>
                    <div className="text-secondary font-36 font-semi-bold pt-7">Welcome to time table management system</div>
                    <div className="text-shadow font-regular font-24 pt-3">Choose your profile below</div>
                    <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-around px-10 pt-5 pb-0">
                        <Link to='/login'>
                            <div className={`bg-white mt-6 rounded-3xl ${styles.block}`}>
                                <div className="bg-primary h-36 flex justify-center items-center rounded-3xl">
                                    <img src={guest1} alt="logo" width={96} height={85.6} />
                                </div>
                                <div className="mt-6 text-left ml-5">
                                    <div className="font-bold font-18 text-primary">Admin</div>
                                    <div className="font-regular font-14 text-shadow">Create/Edit time table</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/time-table-view'>
                            <div className={`bg-white mt-6 rounded-3xl ${styles.block}`}>
                                <div className="bg-secondary h-36 flex justify-center items-center rounded-3xl">
                                    <img src={guest2} alt="logo" width={96} height={85.6} />
                                </div>
                                <div className="mt-6 text-left ml-5">
                                    <div className="font-bold font-18 text-primary">Guest</div>
                                    <div className="font-regular font-14 text-shadow">View access only</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
