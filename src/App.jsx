import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Loading from "./components/student/Loading";
import Navbar from "./components/student/Navbar";
import AddCourse from "./pages/educator/AddCourse";
import Dashboard from "./pages/educator/Dashboard";
import Educator from "./pages/educator/Educator";
import MyCourses from "./pages/educator/MyCourses";
import { StudentsEnrolled } from "./pages/educator/StudentsEnrolled";
import CourseDetails from "./pages/student/CourseDetails";
import CoursesList from "./pages/student/CoursesList";
import Home from "./pages/student/Home";
import MyEnrollements from "./pages/student/MyEnrollements";
import Player from "./pages/student/Player";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");

  return (
    <div className=" text-default min-h-screen bg-white ">
      {!isEducatorRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollements />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="My-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
