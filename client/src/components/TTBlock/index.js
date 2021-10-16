/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, Fragment } from 'react'
import { Menu, Dialog, Listbox, Transition } from '@headlessui/react'
import styles from './TTBlock.module.css'
import circlePlus from '../../assets/images/icons/circlePlus.svg'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TTBlock() {
    return (
        <div className="px-6 flex items-center justify-center py-6 bg-tt h-16 w-full rounded-lg">
            <div>
                
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full mt-1">
                            <img src={circlePlus} alt="icon" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-40 absolute -right-20 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-4">
                            <Menu.Item>
                            <div className="flex flex-col justify-center items-center">
                                <div>
                                {/* <div className="font-regular font-16 text-secondary pl-1">Name</div> */}
                                <div className="font-regular font-16 text-secondary pb-5 w-full">
                                <input type="text" placeholder="Name..." className={`focus:outline-none ${styles.input}`} />
                                </div>
                                </div>
                            </div>
                            </Menu.Item>
                            <Menu.Item>
                            <div className="flex flex-col justify-center items-center">
                                <div>
                                    {/* <div className="font-regular font-16 text-secondary pl-1">Department</div> */}
                                    <div className="font-regular font-16 text-secondary w-full">
                                        <input type="text" placeholder="Department..." className={`focus:outline-none ${styles.input}`} />
                                    </div>
                                </div>
                            </div>
                            </Menu.Item>
                        </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}
