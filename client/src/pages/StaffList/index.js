/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, Fragment } from 'react'
import { Menu, Dialog, Transition, Listbox } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import styles from './StaffList.module.css'
import addIcon from '../../assets/images/icons/add.png'
import closeIcon from '../../assets/images/icons/close.png'
import menuIcon from '../../assets/images/icons/menu.png'
import TripleDots from "../../assets/images/icons/triple-dot.svg"
import Jss_Logo from '../../assets/images/logo/jss_logo.png'
import { HiSelector } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai'

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
        <div className="block lg:hidden px-8 cursor-pointer">
          <img src={menuIcon} alt="icon" width={32} height={24} />
        </div>
      </div>

      <div>
        <div className="bg-white rounded-lg my-6 mx-8">
          <div className={`flex flex-row justify-between items-center px-5 py-6`}>
            <div className="font-semi-bold font-18 text-primary">Faculty List</div>
            <div onClick={openModal} className="flex flex-row justify-center items-center bg-default cursor-pointer text-primary py-2 px-4 rounded">
              <div><img src={addIcon} alt="icon" width={20} height={20} /></div>
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
                            <div className="font-regular font-16 text-secondary pb-5 w-60">
                              <input type="text" placeholder="Name..." className={`rounded-lg focus:outline-none ${styles.input}`} />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-baseline">
                            <div className="font-regular font-16 text-secondary">Department</div>
                            <div className="font-regular font-16 text-secondary pb-5 w-60">
                              <input type="text" placeholder="Department..." className={`rounded-lg focus:outline-none ${styles.input}`} />
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
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-3 pr-2 py-3 text-left text-xs font-medium text-shadow
                        tracking-wider"
                        >
                          Sr No.
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-shadow
                        tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-shadow 
                        tracking-wider"
                        >
                          Department
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-shadow 
                        tracking-wider"
                        >
                          Subjects
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-shadow 
                        tracking-wider"
                        >

                        </th>

                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {people?.map((person) => (
                        <tr
                          // eslint-disable-next-line no-underscore-dangle
                          key={person.name}
                        // className={`${person.selected && 'bg-blue-100'}`}
                        >
                          <td className="px-4 py-2 text-sm font-regular whitespace-nowrap font-regular">
                            1
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap font-regular">
                            <div className="text-sm font-regular text-gray-900">
                              {person.name}
                            </div>
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap font-regular font-regular text-sm text-gray-500">
                            CSE
                          </td>
                          <td
                            className="px-4 py-2 whitespace-nowrap font-regular font-regular text-left
                           text-sm font-medium"
                          >
                            DS, DSTL
                          </td>
                          <td
                            className="px-4 py-2 whitespace-nowrap text-left
                           text-sm font-medium"
                          >
                            Table
                          </td>
                          <td
                            className="px-4 py-2 whitespace-nowrap text-left
                           text-sm font-medium"
                          >
                            <Menu as="div" className="relative inline-block text-left">
                              <div>
                                <Menu.Button className="inline-flex justify-center w-full ">
                                  <img src={TripleDots} alt="Triple" />

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
                                <Menu.Items className="origin-top-right z-50 absolute -right-20 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                          )}
                                        >
                                          Edit
                                        </a>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                          )}
                                        >
                                          Delete
                                        </a>
                                      )}
                                    </Menu.Item>

                                  </div>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}
