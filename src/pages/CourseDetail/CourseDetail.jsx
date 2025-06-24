import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../../contexts/CourseContext";
import { getLessonsByCourseId } from "../../services/mockAPI";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import styles from "./CourseDetail.module.css";

function CourseDetail() {
  const { id: courseId } = useParams();
  const { completedLessons, toggleLesson } = useContext(CourseContext);

  // fetching lesson list from mock API
  const lessons = getLessonsByCourseId(courseId);

  // get completed lesson titles
  const completed = completedLessons[courseId] || [];

  // calculate course progress
  const progress = Math.floor((completed.length / lessons.length) * 100);

  return (
    <div className={styles.container}>
      <h1>{courseId.toUpperCase()} Course</h1>
      <ProgressBar progress={progress} />

      <ul className={styles.lessonList}>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <input
              type="checkbox"
              checked={completed.includes(lesson.title)}
              onChange={() => toggleLesson(courseId, lesson.id)}
            />
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetail;
