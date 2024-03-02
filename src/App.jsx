import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./сomponents/Header/Header";
import Footer from "./сomponents/Footer/Footer";

const App = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header logoSrc="/src/assets/logo.png" title="pomoZen" />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
