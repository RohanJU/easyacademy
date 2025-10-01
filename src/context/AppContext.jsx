import humanizeDuration from "humanize-duration";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  //fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  //function to calculate average rating of course
  const calculateRating = (course) => {
    if (!course || course.courseRatings.length === 0) {
      return 0;
    }

    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });

    return (totalRating / course.courseRatings.length).toFixed(1);
  };

  // function to calculate Course Chapter Time //

  const calculateChapterTime = (chapter) => {
    let time = 0;

    chapter.chapterContent.map((lecture) => {
      time += lecture.lectureDuration;
    });

    return humanizeDuration(time * 60 * 1000, {
      units: ["h", "m"],
    });
  };
  // function to calculate course duration //

  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map(
        (leacture) => (time += leacture.leactureDuration)
      )
    );
    return humanizeDuration(time * 60 * 1000, {
      units: ["h", "m"],
    });
  };

  // function to calculate total no of leactures in the course//
  const calculateNoOfLeactures = (course) => {
    let totalLeactures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLeactures += chapter.chapterContent.length;
      }
    });
    return totalLeactures;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
