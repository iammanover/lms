import { createContext, useEffect, useState } from "react";
import { getLessonsByCourseId } from "../services/mockAPI";

// Course Context
export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [completedLessons, setCompletedLessons] = useState({});

  // Load data from localStorage on mount
  useEffect(() => {
    const savedEnrollments =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const savedLessons =
      JSON.parse(localStorage.getItem("completedLessons")) || {};
    setEnrolledCourses(savedEnrollments);
    setCompletedLessons(savedLessons);
  }, []);

  // Save data to localStorage on update
  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [enrolledCourses, completedLessons]);

  // Enroll in a course
  const enroll = (courseId) => {
    if (enrolledCourses.includes(courseId)) return;
    setEnrolledCourses((prev) => [...prev, courseId]);
  };

  // Toggle lesson completion
  const toggleLesson = (courseId, lessonId) => {
    const lesson = getLessonsByCourseId(courseId).find(
      (l) => l.id === lessonId
    );
    if (!lesson) return;

    setCompletedLessons((prev) => {
      const current = prev[courseId] || [];
      const updated = current.includes(lesson.title)
        ? current.filter((title) => title !== lesson.title)
        : [...current, lesson.title];

      return { ...prev, [courseId]: updated };
    });
  };

  return (
    <CourseContext.Provider
      value={{
        enrolledCourses,
        completedLessons,
        enroll,
        toggleLesson,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
