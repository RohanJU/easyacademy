import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import humanizeDuration from "humanize-duration";
import { assets } from "../../assets/assets";
import YouTube from "react-youtube";
import Footer from "../../components/student/Footer";
import Rating from "../../components/student/Rating";

const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);
  const {courseId} = useParams()
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [playerData, setPlayerData] = useState(null);

  const getCourseData = () => {
      enrolledCourses.map((course)=>{
       if(course._id === courseId){
          setCourseData(course);
       }
      })     
  };
    const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    getCourseData();
  }, [enrolledCourses]);

  return (
    <>
      <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
        {/*left column */}
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold">Course Structure</h2>
          <div>
            {courseData && courseData.courseContent.map((chapter, index) => (
              <div
                key={index}
                className="border border-gray-300 bg-white mb-2 rounded"
              >
                <div
                  className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      className={`transform transition-transform duration-300 ${
                        openSection[index] ? "rotate-180" : "rotate-0"
                      }`}
                      src={assets.down_arrow_icon}
                      alt="Arrow icon"
                    />
                    <p className="font-medium md:text-base text-sm">
                      {chapter.chapterTitle}
                    </p>
                  </div>
                  <p className="text-sm md:text-default">
                    {chapter.chapterContent.length} lectures -{" "}
                    {calculateChapterTime(chapter)}
                  </p>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSection[index] ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300 ">
                    {chapter?.chapterContent?.map((lecture, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 py-1  border-t"
                      >
                        <img
                          src={false ? assets.blue_tick_icon : assets.play_icon}
                          alt="Play icon"
                          className="w-4 h-4 mt-1"
                        />
                        <div className="flex item-center justify-between w-full text-gray-800 text-xs md:text-default">
                          <p>{lecture.lectureTitle}</p>

                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            {lecture.lectureUrl && (
                              <p
                                onClick={() =>
                                  setPlayerData({
                                    ...lecture,chapter:index+1, lecture:i+1
                                  })
                                }
                                className="text-blue-600 font-medium cursor-pointer"
                              >
                                Watch
                              </p>
                            )}

                            <p>
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                {
                                  units: ["h", "m"],
                                  round: true,
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 py-3 mt-10">
            <h1 className="text-xl font-bold">Rate this Course : </h1>
            <Rating initialRating={0}/>
          </div>
        </div>
        {/*right column */}
          <div className="md:mt-10 ">
    {playerData ? (
      <div>
        {/* YouTube Player */}
        {playerData.lectureUrl && (
          <YouTube
            videoId={playerData.lectureUrl.split("/").pop()}
            iframeClassName="w-full aspect-video"
          />
        )}

        {/* Lecture Info */}
        <div className="flex justify-between items-center mt-4">
          <p className="font-medium">
            {`Chapter ${playerData.chapter} : Lecture ${playerData.lecture} - ${playerData.lectureTitle}`}
          </p>

          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">
            Mark Completed
          </button>
        </div>
      </div>
    ) : (
      <img
        src={courseData?.courseThumbnail}
        alt="Course Thumbnail"
        className="w-full rounded"
      />
    )}
  </div>
    </div>
    <Footer/>
    </>
  );
};

export default Player;
