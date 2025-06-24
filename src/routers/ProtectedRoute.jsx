import { Navigate, useParams } from "react-router-dom";
import { getCourses } from "../services/mockAPI";

const ProtectedRoute = ({ children }) => {
  const { id } = useParams();

  // get course id from mock API
  const validCourses = getCourses().map((course) => course.id);
  const isValidCourse = validCourses.includes(id);

  // check enrolled courses
  const enrolledCourses =
    JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  const isEnrolled = enrolledCourses.includes(id);

  // if entered wrong url or not enrolled course it will redirect to home page
  if (!isValidCourse || !isEnrolled) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
