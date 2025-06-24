import { Suspense } from "react";
import { Routes, Link } from "react-router-dom";
import { ToastProvider } from "./contexts/ToastContext";
import routes from "./routers/routes";
import styles from "./styles/global.module.css";

function App() {
  return (
    <ToastProvider>
      <div>
        <div className={styles.topbar}>
          <Link to="/">
            <button className={styles.greenButton}>Courses</button>
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>{routes}</Routes>
        </Suspense>
      </div>
    </ToastProvider>
  );
}

export default App;
