/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import styles from './TimeTable.module.css'
import { NavLink } from 'react-router-dom'
import Jss_Logo from '../../assets/images/logo/jss_logo.png'
import menuIcon from '../../assets/images/icons/menu.png'
import {BiChevronDown} from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import TTBlock from '../../components/TTBlock'

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
] 

export default function TimeTable() {
    const [selected, setSelected] = useState(people[0])
    // const [table, setTable] = useState(
    //     {
    //         cells: [
    //           [{}, {}, {}, {}, {}, {}, {}],
    //           [{}, {}, {}, {}, {}, {}, {}],
    //           [{}, {}, {}, {}, {}, {}, {}],
    //           [{}, {}, {}, {}, {}, {}, {}],
    //           [{}, {}, {}, {}, {}, {}, {}],
    //           [{}, {}, {}, {}, {}, {}, {}]
    //         ]
    //     }
    // )
    return (
        <div className="min-h-screen bg-background">

            <div className={`h-28 pl-5 flex flex-row justify-between items-center ${styles.borderBottom}`}>
                <div className="flex flex-row justify-center items-center">
                    <div><img src={Jss_Logo} alt="jss_logo" className={styles.jss_logo} /></div>
                    <div className="pl-5">
                        <div className="font-bold text-primary font-22 ">JSS Academy of Technical Education</div>
                        <div className="font-regular text-primary font-16">C-20/1, Sector-62, NOIDA.</div>
                    </div>
                </div>
                <div className="flex hidden lg:inline-flex lg:flex-row flex-col justify-center items-center uppercase font-semi-bold font-14 text-shadow px-8">
                    <NavLink to='staff-list'>
                        <div className="text-primary-red pr-8">Home</div>
                    </NavLink>
                    <NavLink to='/time-table'>
                        <div className="pr-8">Time-table</div>
                    </NavLink>
                    <NavLink to='/'>
                        <div className="bg-primary text-white rounded py-3 px-8">Sign Out</div>
                    </NavLink>  
                </div>
                <div className="block lg:hidden pr-6 cursor-pointer">
                    <img src={menuIcon} alt="icon" width={32} height={24} />
                </div>
            </div>

            <div className="my-6 mx-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col">
                        <div className="font-regular font-12 text-shadow">Faculty</div>
                        <div className="w-50">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                        <span className="block truncate font-semi-bold font-12 text-secondary">{selected.name}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <BiChevronDown
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `${active ? 'text-amber-900 bg-amber-100 hover:bg-hover-bg' : 'text-gray-900'}
                                                    cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-hover-bg`
                                            }
                                            value={person}
                                            >
                                            {({ selected, active }) => (
                                                <>
                                                <span
                                                    className={`${
                                                    selected ? 'font-medium hover:bg-hover-bg' : 'font-normal'
                                                    } block truncate font-semi-bold font-12 text-secondary hover:bg-hover-bg cursor-pointer`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                    className={`${
                                                        active ? 'text-amber-600' : 'text-amber-600'
                                                    }
                                                            absolute inset-y-0 left-0 flex items-center pl-3`}
                                                    >
                                                    <BsCheck className="w-5 h-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                                </>
                                            )}
                                            </Listbox.Option>
                                        ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-regular font-12 text-shadow">Department</div>
                        <div className="w-50">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                        <span className="block truncate font-semi-bold font-12 text-secondary">{selected.name}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <BiChevronDown
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `${active ? 'text-amber-900 bg-amber-100 hover:bg-hover-bg' : 'text-gray-900'}
                                                    cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-hover-bg`
                                            }
                                            value={person}
                                            >
                                            {({ selected, active }) => (
                                                <>
                                                <span
                                                    className={`${
                                                    selected ? 'font-medium hover:bg-hover-bg' : 'font-normal'
                                                    } block truncate font-semi-bold font-12 text-secondary hover:bg-hover-bg cursor-pointer`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                    className={`${
                                                        active ? 'text-amber-600' : 'text-amber-600'
                                                    }
                                                            absolute inset-y-0 left-0 flex items-center pl-3`}
                                                    >
                                                    <BsCheck className="w-5 h-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                                </>
                                            )}
                                            </Listbox.Option>
                                        ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-regular font-12 text-shadow">Class</div>
                        <div className="w-50">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                        <span className="block truncate font-semi-bold font-12 text-secondary">{selected.name}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <BiChevronDown
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `${active ? 'text-amber-900 bg-amber-100 hover:bg-hover-bg' : 'text-gray-900'}
                                                    cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-hover-bg`
                                            }
                                            value={person}
                                            >
                                            {({ selected, active }) => (
                                                <>
                                                <span
                                                    className={`${
                                                    selected ? 'font-medium hover:bg-hover-bg' : 'font-normal'
                                                    } block truncate font-semi-bold font-12 text-secondary hover:bg-hover-bg cursor-pointer`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                    className={`${
                                                        active ? 'text-amber-600' : 'text-amber-600'
                                                    }
                                                            absolute inset-y-0 left-0 flex items-center pl-3`}
                                                    >
                                                    <BsCheck className="w-5 h-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                                </>
                                            )}
                                            </Listbox.Option>
                                        ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-regular font-12 text-shadow">Semester</div>
                        <div className="w-50">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                        <span className="block truncate font-semi-bold font-12 text-secondary">{selected.name}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <BiChevronDown
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `${active ? 'text-amber-900 bg-amber-100 hover:bg-hover-bg' : 'text-gray-900'}
                                                    cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-hover-bg`
                                            }
                                            value={person}
                                            >
                                            {({ selected, active }) => (
                                                <>
                                                <span
                                                    className={`${
                                                    selected ? 'font-medium hover:bg-hover-bg' : 'font-normal'
                                                    } block truncate font-semi-bold font-12 text-secondary hover:bg-hover-bg cursor-pointer`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                    className={`${
                                                        active ? 'text-amber-600' : 'text-amber-600'
                                                    }
                                                            absolute inset-y-0 left-0 flex items-center pl-3`}
                                                    >
                                                    <BsCheck className="w-5 h-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                                </>
                                            )}
                                            </Listbox.Option>
                                        ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>         
                           
                </div>

                <div className="my-6">
                    <div className="grid grid-cols-12 w-full gap-4">
                        <div className="col-span-2 bg-white rounded-lg h-20 w-full">{''}</div>

                        <div className="col-span-10 bg-white py-2 px-6 h-full rounded-lg">
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-6">
                                    <div className="grid grid-cols-4 gap-5">
                                        <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>8:30 - 9:30</div></div>
                                        <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>8:30 - 9:30</div></div>
                                        <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>8:30 - 9:30</div></div>
                                        <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>8:30 - 9:30</div></div>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>{''}</div></div>
                                </div>
                                <div className="col-span-5">
                                    <div className="grid grid-cols-3 gap-5">
                                        <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>8:30 - 9:30</div></div>
                                        <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>8:30 - 9:30</div></div>
                                        <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>8:30 - 9:30</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 bg-white p-6 w-full rounded-lg">
                            <div className="grid grid-cols-1 gap-5">
                                <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>Monday</div></div>
                                <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>Tuesday</div></div>
                                <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>Wednesday</div></div>
                                <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>Thursday</div></div>
                                <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>Friday</div></div>
                                <div className="h-16 w-full font-medium font-16 text-secondary flex items-center justify-center"><div>Saturday</div></div>
                            </div>
                        </div>

                        <div className="col-span-10 bg-secondary bg-white rounded-lg">
                            <div className="grid grid-cols-12 p-6 gap-5">

                                <div className="col-span-6">
                                    <div className="grid grid-cols-4 gap-5">
                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />

                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />

                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />

                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />
                                        
                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />
                                    
                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <div className="h-full w-full font-semi-bold font-18 text-shadow flex items-center justify-center tracking-widest">
                                        <div className={styles.textrtl}>LUNCH BREAK</div>
                                    </div>
                                </div>

                                <div className="col-span-5">
                                    <div className="grid grid-cols-3 gap-5">
                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />

                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />

                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />

                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />

                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />

                                        <TTBlock />
                                        <TTBlock />
                                        <TTBlock />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
                                                   
        </div>

    )
}

