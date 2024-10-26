import React, { useEffect, useState } from "react";
import "./Attendence.css";
import Service from "../components/Service";
import { toast } from 'react-toastify';

const Attendence = () => {
  const [classSection, setClassSection] = useState('');
  const [year, setYear] = useState('');
  const [attendanceDate, setAttendanceDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [subject, setSubject] = useState('');

  const allStudents = [
    {
      "id": 124,
      "name": "Aisha Khan",
      "fatherName": "Farooq",
      "cnic": "987654321",
      "contact": "9876543210",
      "email": "aishakhan124@gmail.com",
      "phase": 1
    },
    {
      "id": 125,
      "name": "Ahmed Raza",
      "fatherName": "Imran",
      "cnic": "912345678",
      "contact": "9123456789",
      "email": "ahmedraza125@gmail.com",
      "phase": 1
    },
    {
      "id": 126,
      "name": "Sana Fatima",
      "fatherName": "Zafar",
      "cnic": "923456789",
      "contact": "9234567890",
      "email": "sanafatima126@gmail.com",
      "phase": 1
    },
    {
      "id": 127,
      "name": "Ali Khan",
      "fatherName": "Jamal",
      "cnic": "934567890",
      "contact": "9345678901",
      "email": "alikhan127@gmail.com",
      "phase": 1
    },
    {
      "id": 128,
      "name": "Zainab Ali",
      "fatherName": "Sameer",
      "cnic": "945678901",
      "contact": "9456789012",
      "email": "zainabali128@gmail.com",
      "phase": 1
    },
    {
      "id": 129,
      "name": "Hamza Sheikh",
      "fatherName": "Tariq",
      "cnic": "956789012",
      "contact": "9567890123",
      "email": "hamzasheikh129@gmail.com",
      "phase": 1
    },
    {
      "id": 130,
      "name": "Fatima Noor",
      "fatherName": "Khalid",
      "cnic": "967890123",
      "contact": "9678901234",
      "email": "fatimanoor130@gmail.com",
      "phase": 1
    },
    {
      "id": 131,
      "name": "Imran Shaikh",
      "fatherName": "Akram",
      "cnic": "978901234",
      "contact": "9789012345",
      "email": "imranshaikh131@gmail.com",
      "phase": 1
    },
    {
      "id": 132,
      "name": "Alina Ansari",
      "fatherName": "Bilal",
      "cnic": "989012345",
      "contact": "9890123456",
      "email": "alinaansari132@gmail.com",
      "phase": 1
    },
    {
      "id": 133,
      "name": "Salman Khan",
      "fatherName": "Sajid",
      "cnic": "990123456",
      "contact": "9901234567",
      "email": "salmankhan133@gmail.com",
      "phase": 1
    },
    {
      "id": 134,
      "name": "Maryam Rafiq",
      "fatherName": "Rafiq",
      "cnic": "912334455",
      "contact": "9123344556",
      "email": "maryamrafiq134@gmail.com",
      "phase": 1
    },
    {
      "id": 135,
      "name": "Azhar Siddiqui",
      "fatherName": "Khalil",
      "cnic": "923445566",
      "contact": "9234455667",
      "email": "azharsiddiqui135@gmail.com",
      "phase": 1
    },
    {
      "id": 136,
      "name": "Rida Khan",
      "fatherName": "Farhan",
      "cnic": "934556677",
      "contact": "9345566778",
      "email": "ridakhan136@gmail.com",
      "phase": 1
    },
    {
      "id": 137,
      "name": "Junaid Malik",
      "fatherName": "Aslam",
      "cnic": "945667788",
      "contact": "9456677889",
      "email": "junaidmalik137@gmail.com",
      "phase": 1
    },
    {
      "id": 138,
      "name": "Hiba Khan",
      "fatherName": "Afzal",
      "cnic": "956778899",
      "contact": "9567788990",
      "email": "hibakhan138@gmail.com",
      "phase": 1
    },
    {
      "id": 139,
      "name": "Tariq Qureshi",
      "fatherName": "Qasim",
      "cnic": "967889900",
      "contact": "9678899001",
      "email": "tariqqureshi139@gmail.com",
      "phase": 2
    },
    {
      "id": 140,
      "name": "Farah Ahmed",
      "fatherName": "Zahid",
      "cnic": "978990011",
      "contact": "9789900112",
      "email": "farahahmed140@gmail.com",
      "phase": 2
    },
    {
      "id": 141,
      "name": "Adnan Rehman",
      "fatherName": "Ameer",
      "cnic": "989101122",
      "contact": "9891011223",
      "email": "adnanrehman141@gmail.com",
      "phase": 2
    },
    {
      "id": 142,
      "name": "Fariha Khan",
      "fatherName": "Waqar",
      "cnic": "990112233",
      "contact": "9901122334",
      "email": "farihakhan142@gmail.com",
      "phase": 2
    },
    {
      "id": 143,
      "name": "Asad Shaikh",
      "fatherName": "Irfan",
      "cnic": "912223344",
      "contact": "9122233445",
      "email": "asadshaikh143@gmail.com",
      "phase": 3
    },
    {
      "id": 144,
      "name": "Zoya Fatima",
      "fatherName": "Bashir",
      "cnic": "923334455",
      "contact": "9233344556",
      "email": "zoyafatima144@gmail.com",
      "phase": 3
    },
    {
      "id": 145,
      "name": "Bilal Hussain",
      "fatherName": "Rashid",
      "cnic": "934445566",
      "contact": "9344455667",
      "email": "bilalhussain145@gmail.com",
      "phase": 3
    },
    {
      "id": 146,
      "name": "Mahira Khan",
      "fatherName": "Sajjad",
      "cnic": "945556677",
      "contact": "9455566778",
      "email": "mahirakhan146@gmail.com",
      "phase": 3
    },
    {
      "id": 147,
      "name": "Yasin Ahmed",
      "fatherName": "Wajid",
      "cnic": "956667788",
      "contact": "9566677889",
      "email": "yasinahmed147@gmail.com",
      "phase": 3
    }
  ]
  
  

const phase1Subjects = ["Anatomy" ,"Physiology","Biochemistry","Community Medicine", "Foundation Course", "ECA"]
const phase2Subjects = ["Community Medicine" ,"Pathology","Microbiology","Pharmacology", "Forensic Med & TC","Medicine","Surgery", "Obs & Gyn","ECA"]
const phase3Subjects = ["Community Medicine" ,"Medicine","Surgery","Paediatrics", "Forensic Med & TC","Orthopaedics","Ophthalmology","ENT", "Obs & Gyn","ECA"]
const phase4Subjects = ["Psychiatry" ,"Medicine","Surgery","Dermatology", "Radiology","Orthopaedics","Paediatrics","ENT", "Anaesthsiology","Ophthalmology","Obs & Gyn"]

const [filteredStudents, setFilteredStudents] = useState([]);
const [availableSubjects, setAvailableSubjects] = useState([]);
const [checkedStudents, setCheckedStudents] = useState([]);
const [markAbsent, setMarkAbsent] = useState([]);


useEffect(() => {
  // Reset subject selection when phase changes
  setSubject('');
  
  // Update available subjects based on selected phase
  switch(classSection) {
    case 'Phase I':
      setAvailableSubjects(phase1Subjects);
      break;
    case 'Phase II':
      setAvailableSubjects(phase2Subjects);
      break;
    case 'Phase III Part I':
      setAvailableSubjects(phase3Subjects);
      break;
    case 'Phase III Part II':
      setAvailableSubjects(phase4Subjects);
      break;
    default:
      setAvailableSubjects([]);
  }
}, [classSection]);


useEffect(() => {
  let phase = 0;
  switch(classSection) {
    case 'Phase I':
      phase = 1;
      break;
    case 'Phase II':
      phase = 2;
      break;
    case 'Phase III Part I':
      phase = 3;
      break;
    case 'Phase III Part II':
      phase = 4;
      break;
    default:
      phase = 0;
  }

  const newFilteredStudents = phase === 0 ? [] : allStudents.filter(student => student.phase === phase);
  setFilteredStudents(newFilteredStudents);
  
  setCheckedStudents(new Array(newFilteredStudents.length).fill(false));
  setMarkAbsent(new Array(newFilteredStudents.length).fill(false));
}, [classSection]);


const handleCheckAll = () => {
  setCheckedStudents(new Array(filteredStudents.length).fill(true));
  setMarkAbsent(new Array(filteredStudents.length).fill(false));
};

const handleAbsentAll = () => {
  setMarkAbsent(new Array(filteredStudents.length).fill(true));
  setCheckedStudents(new Array(filteredStudents.length).fill(false));
};

const handleLeaveAll = () => {
  setCheckedStudents(new Array(filteredStudents.length).fill(false));
  setMarkAbsent(new Array(filteredStudents.length).fill(false));
};

const handleClearAll = () => {
  setMarkAbsent(new Array(filteredStudents.length).fill(false));
  setCheckedStudents(new Array(filteredStudents.length).fill(false));
};

const handleCheckboxChange = (index) => {
  const updatedCheckedStudents = [...checkedStudents];
  updatedCheckedStudents[index] = !updatedCheckedStudents[index];
  setCheckedStudents(updatedCheckedStudents);

  if (updatedCheckedStudents[index]) {
    const updatedMarkAbsent = [...markAbsent];
    updatedMarkAbsent[index] = false;
    setMarkAbsent(updatedMarkAbsent);
  }
};

const handleAbsentChange = (index) => {
  const updatedMarkedStudents = [...markAbsent];
  updatedMarkedStudents[index] = !updatedMarkedStudents[index];
  setMarkAbsent(updatedMarkedStudents);

  if (updatedMarkedStudents[index]) {
    const updatedCheckedStudents = [...checkedStudents];
    updatedCheckedStudents[index] = false;
    setCheckedStudents(updatedCheckedStudents);
  }
};


const handleSubmit = () => {
  toast.success("Attendence Updated In Record!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

  

  return (

    <div className=" bg-black mb-6">

      {/* this is the start of selection things */}
      <div className='my-5'>
        <h1 className="font-bold text-center mt-4 my-4 text-xl">Student Attendance</h1>

        
        <div className="flex flex-wrap lg:flex-nowrap justify-evenly gap-10">

        <div className="flex flex-col items-center justify-center h-full">
            <label
              htmlFor="class-section"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white ml-4"
            >
              Select Batch <span className="text-red-500">*</span>
            </label>
            <select
              id="class-year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-44 ml-8"
            >
              <option value="" disabled>Select class</option>
              <option value="2020">2020</option>
              <option value="2021 II">2021</option>
              <option value="2022 III Part I">2022</option>
              <option value="2023 III Part II">2023</option>
            </select>
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <label
              htmlFor="class-section"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white ml-4"
            >
              Select Phase <span className="text-red-500">*</span>
            </label>
            <select
              id="class-section"
              value={classSection}
              onChange={(e) => setClassSection(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-44 ml-8"
            >
              <option value="" disabled>Select class</option>
              <option value="Phase I">MBBS Phase I</option>
              <option value="Phase II">MBBS Phase II</option>
              <option value="Phase III Part I">MBBS Phase III Part I</option>
              <option value="Phase III Part II">MBBS Phase III Part II</option>
            </select>
          </div>

        <div className="flex flex-col items-center justify-center h-full">
          <label
            htmlFor="attendance-date"
            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white ml-5"
          >
            Attendance Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="attendance-date"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-8"
          />
        </div>

        <div className="flex flex-col items-center justify-center h-full">
          <label
            htmlFor="time-slot"
            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white ml-4"
          >
            Select Time Slot <span className="text-red-500">*</span>
          </label>
          <select
            id="time-slot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>Select time slot</option>
            <option value="09:00-10:00">08:00 AM - 09:00 AM</option>
            <option value="09:00-10:00">09:00 AM - 10:00 AM</option>
            <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
            <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
            <option value="12:00-13:00">12:00 PM - 01:00 PM</option>
            <option value="13:00-14:00">01:00 PM - 02:00 PM</option>
            <option value="14:00-15:00">02:00 PM - 03:00 PM</option>
            <option value="15:00-16:00">03:00 PM - 04:00 PM</option>
            <option value="16:00-17:00">04:00 PM - 05:00 PM</option>
          </select>
        </div>

        <div className="flex flex-col items-center justify-center h-full">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white ml-4"
            >
              Select Subject <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled>Select subject</option>
              {availableSubjects.map((subj, index) => (
                <option key={index} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>
        <div className="flex flex-col items-center justify-center h-full">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white ml-4"
          >
            Lecture number <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>Select Lecture Type</option>
            <option value="Lecture">Lecture</option>
            <option value="Practical">Practical</option>
            <option value="Morning Posting">Morning Posting</option>
            <option value="Family Adoption Programme">Family Adoption Programme</option>
            <option value="Self Directed Learning">Self Directed Learning</option>
            <option value="Small Gp Discussion">Small Gp Discussion</option>
            <option value="AETCOM">AETCOM</option>
            <option value="Pandemic Module">Pandemic Module</option>
            <option value="Sports/Yoga & Extra Curricular Acititvies">Sports/ Yoga & Extra Curricular Acititvies</option>
            <option value="Electives">Electives</option>
 
          </select>
        </div>
      </div>

      <div className="w-1/2 m-auto mt-5">
        <button className=" px-4 py-2 bg-blue-600  text-black rounded border-2">
          Search
        </button>
      </div>
      </div>
      {/* this is the end of selection things */}

      {/* Attendance Marking Table */}
      {filteredStudents.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-black text-left">Roll No</th>
                <th className="py-2 px-4 border-b text-black text-left">Name</th>
                <th className="py-2 px-4 border-b text-black text-left">Father's Name</th>
                <th className="py-2 px-4 border-b text-black text-left">
                  <button
                    onClick={handleAbsentAll}
                    className="px-4 py-2 text-black bg-red-600 rounded border-2">
                    Absent <i className="fa-regular fa-circle"></i>
                  </button>
                </th>
                <th className="py-2 px-4 border-b text-black text-left">
                  <button
                    onClick={handleCheckAll}
                    className="px-4 py-2 bg-green-600 text-black rounded border-2">
                    Present <i className="fa-regular fa-circle"></i>
                  </button>
                </th>
                
                <th className=" px-4 py-2 border-b text-black text-left  ">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={student.id} >
                  <td className="py-2 px-4 border-b text-black">{student.id}</td>
                  <td className="py-2 px-4 border-b text-black">{student.name}</td>
                  <td className="py-2 px-4 border-b text-black">{student.fatherName}</td>
                  <td className="py-2 px-4 border-b pl-6 text-black">
                    <input
                      type="checkbox"
                      className="w-6 h-6 mx-8"
                      checked={markAbsent[index]}
                      onChange={() => handleAbsentChange(index)}
                    />
                  </td>
                  <td className="py-2 px-4 border-b pl-6">
                    <input
                      className="w-6 h-6 mx-8"
                      type="checkbox"
                      checked={checkedStudents[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  
                  <td className="py-2 px-4 border-b text-black ">{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredStudents.length > 0 && (
        <div className="flex mt-4 md:flex-row flex-col justify-center">
          <button className="p-4 mx-8 my-2 rounded-lg text-white text-center bg-blue-600 py-2 hover:underline" onClick={handleClearAll}>Clear All</button>
          <button className="p-4 mx-8 my-2 rounded-lg text-center text-white bg-blue-600 py-2 hover:underline" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Attendence;