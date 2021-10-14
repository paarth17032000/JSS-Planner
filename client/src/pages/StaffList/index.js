import React, { useState, Fragment } from 'react'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Link } from 'react-router-dom'
import styles from './StaffList.module.css'
import addIcon from '../../assets/images/icons/add.png'
import closeIcon from '../../assets/images/icons/close.png'
// import detailsIcon from '../../assets/images/icons/details.png'
import Jss_Logo from '../../assets/images/logo/jss_logo.png'
import {HiSelector} from 'react-icons/hi'
import {AiOutlineCheck} from 'react-icons/ai'

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ]

export default function StaffList() {
    let [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(people[0])

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

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
                <div className="flex md:flex-row flex-col justify-center items-center uppercase font-semi-bold font-14 text-shadow px-8">
                    <Link>
                        <div className="text-primary-red pr-8">Home</div>
                    </Link>
                    <Link>
                        <div className="pr-8">Time-table</div>
                    </Link>
                    <Link to='/'>
                        <div className="bg-primary text-white rounded py-3 px-8">Sign Out</div>
                    </Link>
                </div>
            </div> 

            <div>
                <div className="bg-white rounded-lg my-6 mx-8">
                    <div className={`flex flex-row justify-between items-center px-5 py-6`}>
                        <div className="font-semi-bold font-18 text-primary">Faculty List</div>
                        <div onClick={openModal} className="flex flex-row justify-center items-center bg-default cursor-pointer text-primary py-2 px-4 rounded">
                            <div><img src={addIcon} alt="icon" width={20} height={20}/></div>
                            <div className="font-semi-bold font-14 pl-1">Add Faculty</div>

                            <Transition appear show={isOpen} as={Fragment}>
                                <Dialog
                                as="div"
                                className={`fixed inset-0 z-10 overflow-y-auto ${styles.modalBg}`}
                                onClose={closeModal}
                                >
                                    <div className="min-h-screen px-4 text-center">
                                        <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                        >
                                            <Dialog.Overlay className="fixed inset-0" />
                                        </Transition.Child>

                                        {/* This element is to trick the browser into centering the modal contents. */}
                                        <span
                                        className="inline-block h-screen align-middle"
                                        aria-hidden="true"
                                        >
                                            &#8203;
                                        </span>
                                        <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                        >
                                            <div className="inline-block w-full max-w-lg px-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                                                <Dialog.Title
                                                className="flex flex-row justify-between items-center pt-5 pb-3"
                                                >
                                                    <div className="font-semi-bold font-18 text-primary">Add Faculty</div>
                                                    <div className="cursor-pointer" onClick={closeModal}><img src={closeIcon} alt="icon" width={32} height={32} /></div>
                                                </Dialog.Title>
                                                <hr className={styles.hr} />

                                                <div className="mt-5 mb-10 px-5">
                                                    <div className="flex flex-row justify-between items-baseline">
                                                        <div className="font-regular font-16 text-secondary">Name</div>
                                                        <div className="font-regular font-16 text-secondary pb-5">
                                                            <input type="text" placeholder="Name..." className={`rounded-lg focus:outline-none ${styles.input}`} />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row justify-between items-baseline">
                                                        <div className="font-regular font-16 text-secondary">Department</div>
                                                        <div className="font-regular font-16 text-secondary pb-5">
                                                            <input type="text" placeholder="Department..." className={`rounded-lg focus:outline-none ${styles.input}`} />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row justify-between items-baseline">
                                                        <div className="font-regular font-16 text-secondary">Subjects</div>
                                                        {/* <div className="font-regular font-16 text-secondary pb-5">
                                                            <input type="text" placeholder="Choose" className={`rounded-lg ${styles.input}`} />
                                                        </div> */}
                                                        <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className={`relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg ${styles.input} focus:outline-none `}>
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiSelector
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
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
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
                          <AiOutlineCheck className="w-5 h-5" aria-hidden="true" />
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

                                                <hr className={styles.hr} />
                                                <div className="flex flex-row justify-end items-center my-4">
                                                    <button
                                                        type="button"
                                                        className="font-semi-bold font-14 justify-center px-8 py-2"
                                                        onClick={closeModal}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="font-semi-bold font-14 bg-primary text-white justify-center px-7 py-2 rounded"
                                                        onClick={closeModal}
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </Transition.Child>
                                    </div>
                                </Dialog>
                            </Transition>
                        </div>
                    </div>
                    <hr className={styles.hr} />
                    {/* <div className="py-6 px-5">
                        <table responsive="md" className="font-regular font-16 mt-5 bg-tertiaryColor">
                            <tbody className="text-secondaryColor">
                                <tr>
                                    <th><span className="ml-4">Sr.No.</span></th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Subjects</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td><span className="ml-4">1.</span></td>
                                    <td>Seema Shukla</td>
                                    <td>Information Technology</td>
                                    <td>Data Structure, Python Programming, DSTL</td>
                                    <td>Assign Time-Table</td>
                                    <td>detailsIcon</td>
                                </tr>
                                <tr>
                                    <td><span className="ml-4">2.</span></td>
                                    <td>Seema Shukla</td>
                                    <td>Information Technology</td>
                                    <td>Data Structure, Python Programming, DSTL</td>
                                    <td>Assign Time-Table</td>
                                    <td>detailsIcon</td>
                                </tr>
                                <tr>
                                    <td><span className="ml-4">3.</span></td>
                                    <td>Seema Shukla</td>
                                    <td>Information Technology</td>
                                    <td>Data Structure, Python Programming, DSTL</td>
                                    <td>Assign Time-Table</td>
                                    <td>detailsIcon</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>

        </div>
    )
}
