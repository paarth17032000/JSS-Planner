/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState,Fragment } from 'react'
// import addIcon from '../../assets/images/icons/add.png'
import closeIcon from '../../assets/images/icons/close.png'
import { Dialog, Transition,Listbox } from '@headlessui/react'
import styles from './TTBlock.module.css'
import circlePlus from '../../assets/images/icons/circlePlus.svg'
import { BiChevronDown } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import { addLecture } from "../../apis/index"
// import axios from 'axios'
// import { BASE_API_URL } from '../../config/config'

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// const semester = [
//     { name: 'I' },
//     { name: 'II' },
//     { name: 'III' },
//     { name: 'IV' },
//     { name: 'V' },
//     { name: 'VI' },
//     { name: 'VII' },
//     { name: 'VIII' },
// ]

export default function TTBlock(props) {
    // const [faculty, setFaculty] = useState([])
    const [selectedFaculty, setSelectedFaculty] = useState({})
    const {subject_name, subject_code, teacher_name} = props  
    // faculty.length !== 0 ? setFaculty(faculty) : null
    let [isOpen, setIsOpen] = useState(false)
    // const [subjects, setSubjects] = useState([])
    // const [classes, setClasses] = useState([])
    const [classroom, setClassroom] = useState()
    // const [departments, setDepartments] = useState([])
    // const [day, setDay] = useState()
    const [selectedSubject, setSelectedSubject] = useState({})
    // const [selectedClass, setSelectedClass] = useState({})
    // const [selectedDepartment, setSelectedDepartment] = useState({})

    // const [selectedSemester, setSelectedSemester] = useState(semester[0])
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }
    //   useEffect(() => {
    //     async function getData() {
    //         try {
    //             let subs = await getSubjects();
    //             setSubjects(subs);
    //             // let cls = await getClasses();
    //             // setClasses(cls);
    //             let dp = await getDepartments();
    //             setDepartments(dp);
    //             // let fc = await getFaculty();
    //             // setFaculty(fc);
    //             setLoading(false);
    //         } catch (error) {
    //             console.log(error)
    //         }

    //     }
    //     getData();
    // }, [])

    const handleSave = async () => {
        let formData;
        formData = {
            classroom: "23",
            time_slot: "1",
            week_day: props.d,
            class:'4CS1 ',
            subject: selectedSubject.code,
            faculty: selectedFaculty.code,
        }
        await addLecture(formData);
        console.log(formData)
        closeModal()
    }

//    console.log(props)
    return (
        <div className="px-6 flex items-center justify-center py-6 bg-tt h-16 w-full rounded-lg">
            <div>
                
                {/* <Menu as="div" className="relative inline-block text-left"> */}
                    <div>  
                        { subject_name != null || subject_code != null || teacher_name != null ? (
                            <div className="flex flex-col">
                                <div className="font-bold text-primary font-16">{subject_name || null}</div>
                                <div className="flex flex-row">
                                    <div className="font-semi-bold text-secondary font-8">{subject_code || null}</div>
                                    <div className="font-semi-bold text-secondary font-8">{','}{teacher_name || null}</div>
                                </div>
                            </div>
                        ) : (
                            // <Menu.Button  onClick={openModal} className="inline-flex justify-center w-full mt-1">
                            //     <img src={circlePlus} alt="icon" />
                            // </Menu.Button>
                            <div onClick={openModal} className="flex flex-row justify-center items-center cursor-pointer text-primary py-2 px-4 rounded">
                    <img src={circlePlus} alt="icon" />

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
                                <div className="font-semi-bold font-18 text-primary">Add Lecture</div>
                                <div className="cursor-pointer" onClick={closeModal}><img src={closeIcon} alt="icon" width={32} height={32} /></div>
                                </Dialog.Title>
                                <hr className={styles.hr} />

                                <div className="mt-5 mb-10 px-2">
                                    <div className="flex flex-row justify-between items-baseline">
                                        <div className="font-regular font-16 text-secondary">classroom</div>
                                        <div className="font-regular font-16 text-secondary pb-5 w-48 px-4 sm:w-60">
                                        <input type="text" placeholder="Classroom" onChange={e => setClassroom(e.target.value)} className={`rounded-lg focus:outline-none ${styles.input}`} />
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between items-baseline">
                                        <div className="font-regular font-16 text-secondary">subject</div>
                                        <div className="font-regular font-16 text-secondary pb-5 w-48 px-4 sm:w-60">
                                        <div className="flex flex-col">
                                                {/* <div className="font-regular font-12 text-shadow">Faculty</div> */}
                                                <div className="w-50">
                                                    <Listbox value={selectedSubject} onChange={setSelectedSubject}>
                                                        <div className="relative mt-1">
                                                            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                                                <span className="block truncate font-semi-bold font-12 text-secondary">{selectedSubject?.name}</span>
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
                                                                    {props?.subjects?.map((person, personIdx) => (
                                                                        <Listbox.Option
                                                                            key={personIdx}
                                                                            className={({ active }) =>
                                                                                `${active ? 'text-amber-900 bg-amber-100 hover:bg-hover-bg' : 'text-gray-900'}
                                                                            cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-hover-bg`
                                                                            }
                                                                            value={person}
                                                                        >
                                                                            {({ selectedSubject, active }) => (
                                                                                <>
                                                                                    <span
                                                                                        className={`${selectedSubject ? 'font-medium hover:bg-hover-bg' : 'font-normal'
                                                                                            } block truncate font-semi-bold font-12 text-secondary hover:bg-hover-bg cursor-pointer`}
                                                                                    >
                                                                                        {person.name}
                                                                                    </span>
                                                                                    {selectedSubject ? (
                                                                                        <span
                                                                                            className={`${active ? 'text-amber-600' : 'text-amber-600'
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
                                    </div>
                                    <div className="flex flex-row justify-between items-baseline">
                                        <div className="font-regular font-16 text-secondary">faculty</div>
                                        <div className="font-regular font-16 text-secondary pb-5 w-48 px-4 sm:w-60">
                                        <div className="flex flex-col">
                                                {/* <div className="font-regular font-12 text-shadow">Faculty</div> */}
                                                <div className="w-50">
                                                    <Listbox value={selectedFaculty} onChange={setSelectedFaculty}>
                                                        <div className="relative mt-1">
                                                            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                                                <span className="block truncate font-semi-bold font-12 text-secondary">{selectedFaculty.name}</span>
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
                                                                    {props?.faculty?.map((person, personIdx) => (
                                                                        <Listbox.Option
                                                                            key={personIdx}
                                                                            className={({ active }) =>
                                                                                `${active ? 'text-amber-900 bg-amber-100 hover:bg-hover-bg' : 'text-gray-900'}
                                                                            cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-hover-bg`
                                                                            }
                                                                            value={person}
                                                                        >
                                                                            {({ selectedFaculty, active }) => (
                                                                                <>
                                                                                    <span
                                                                                        className={`${selectedFaculty ? 'font-medium hover:bg-hover-bg' : 'font-normal'
                                                                                            } block truncate font-semi-bold font-12 text-secondary hover:bg-hover-bg cursor-pointer`}
                                                                                    >
                                                                                        {person.name}
                                                                                    </span>
                                                                                    {selectedFaculty ? (
                                                                                        <span
                                                                                            className={`${active ? 'text-amber-600' : 'text-amber-600'
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
                                    onClick={handleSave}
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
                        )}
                    </div>

                  
                
                    
                {/* </Menu> */}
            </div>
        </div>
    )
}
