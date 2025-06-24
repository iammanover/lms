import { lazy } from "react";
import { Route } from "react-router-dom";

// lazy loading the components
const CourseList = lazy(() => import("./pages/CourseList/CourseList"));
const CourseDetail = lazy(() => import("./pages/CourseDetail/CourseDetail"));

const routes = [
  <Route key="home" path="/" element={<CourseList />} />,
  <Route key="course" path="/course/:id" element={<CourseDetail />} />,
];

export default routes;
