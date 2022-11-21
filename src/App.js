
import './App.css';
// import Singup from "../auth/Singup.js"
import { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { useGetAllUserQuery, } from './services/profile';
import Meeting from "./Room/Meeting"
import Singup from "./auth/Singup"
import { Outlet, Route, Routes } from "react-router-dom";
import IndividualRoom from "./Room/IndividualRoom"
import CreateMeeting from './Room/CreateMeeting';
import AllClasses from './Class/AllClasses';
import RegisterTeacher from "./admin/RegisterTeacher";
import DashBoard from "./admin/DashBoard";
import Navbar from "./components/Navbar";
import StudentLogin from './student/Login';
import { Admin, AdminLogin } from './admin/Login';
import { Teacher, TeacherLogin } from './teacher/Login';
import { Student } from './student/Student';
import { ClassDetails } from './student/ClassDetails';
import { LiveClass } from './student/LiveClass';
import { Classes, ClassHome } from './teacher/Classes';
import { Students } from './teacher/Students';
import { ThemeProvider } from '@mui/material';
import { xTheme } from './theme';

// const socket = io('http://192.168.1.38:8001');

function App() {
  const { data } = useGetAllUserQuery()

  useEffect(() => {
  }, [])

  return (
    <ThemeProvider theme={xTheme}>
      <div className="App bg-slate-100 w-full h-full">
        <Routes>
          <Route path="/admin" element={<StudentLogin />} />
          <Route path="/IndividualRoom/:_id" element={<IndividualRoom />} />
          <Route path="/CreateMeeting" element={<CreateMeeting />} />
          <Route path="/AllClasses" element={<AllClasses />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/RegisterTeacher" element={<RegisterTeacher />} />
          <Route path="/Meeting" element={<Meeting />} />

          {/* NEW ROUTES DEFINED BELOW */}
          {/* STUDENT ROUTES */}
          <Route path="/" element={<StudentLogin />} />
          <Route path="student" element={<Student />}>
            <Route path="" element={<ClassDetails />} />
            <Route path="class/:id" element={<LiveClass />} />
          </Route>

          {/* ADMIN ROUTES */}
          <Route path='/admin' element={<Admin />}>
            <Route path='' element={<AdminLogin />}></Route>
            <Route path='dashboard' element={<DashBoard />} />
          </Route>

          {/* TEACHER ROUTES */}
          <Route path='/teacher' element={<Teacher />}>
            <Route path='' element={<TeacherLogin />}></Route>
            <Route path='classes' element={<ClassHome />}>
              <Route path='' element={<Classes />}/>
              <Route path=':id' element={<Students />}/>
            </Route>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
