export const getCourses = () => [
  {
    id: "react",
    title: "React.js Course",
    description: "Learn the basics and advanced topics of React.",
  },
  {
    id: "nextjs",
    title: "Next.js Course",
    description: "Learn server-side rendering with Next.js.",
  },
];

export const getLessonsByCourseId = (courseId) => {
  const lessons = {
    react: [
      { id: 1, title: "Intro to React.js" },
      { id: 2, title: "React State and Props" },
      { id: 3, title: "React Hooks" },
    ],
    nextjs: [
      { id: 1, title: "Intro to Next.js" },
      { id: 2, title: "Pages and Routing" },
      { id: 3, title: "API Routes and SSR" },
    ],
  };

  return lessons[courseId] || [];
};
