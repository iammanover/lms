import { lazy } from "react";
import { Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// lazy loading the components
const CourseList = lazy(() => import("../pages/CourseList/CourseList"));
const CourseDetail = lazy(() => import("../pages/CourseDetail/CourseDetail"));

const routes = [
  <Route key="home" path="/" element={<CourseList />} />,
  <Route
    key="course"
    path="/course/:id"
    element={
      <ProtectedRoute>
        <CourseDetail />
      </ProtectedRoute>
    }
  />,
  <Route key="not-found" path="*" element={<Navigate to="/" replace />} />,
];

export default routes;
