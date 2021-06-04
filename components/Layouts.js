import style from "../styles/Layouts.module.css";
import Nav from "./Nav";
import Meta from "./Meta";

import Header from "./Header";
const Layouts = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />

      <div className={style.container}>
        <main className={style.main}>
            <Header />
            {children}
        </main>
      </div>
    </>
  );
};

export default Layouts;
