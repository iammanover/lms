import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CourseContext } from "../../contexts/CourseContext";
import { ToastContext } from "../../contexts/ToastContext";
import { getCourses } from "../../services/mockAPI";
import styles from "./CourseList.module.css";

function CourseList() {
  const navigate = useNavigate();
  const { enrolledCourses, enroll } = useContext(CourseContext);
  const { showToast } = useContext(ToastContext);

  // fetchiing all courses from mock api
  const courses = getCourses();

  // handle course enrollment
  const handleEnroll = (courseId) => {
    enroll(courseId);
    showToast(`Successfully enrolled in ${courseId}!`);

    // navigate to course detail after 2 seconds to make the toast visible
    setTimeout(() => {
      navigate(`/course/${courseId}`);
    }, 1950);
  };

  return (
    <div className={styles.container}>
      <h1>Courses</h1>

      <div className={styles.grid}>
        {courses.map((course) => {
          const isEnrolled = enrolledCourses.includes(course.id);

          return (
            <div key={course.id} className={styles.card}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>

              {isEnrolled ? (
                <button
                  className={styles.continueBtn}
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                  Continue Learning
                </button>
              ) : (
                <button
                  className={styles.enrollBtn}
                  onClick={() => handleEnroll(course.id)}
                >
                  Enroll Now
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseList;
