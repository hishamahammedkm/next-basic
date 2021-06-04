import style from "../styles/Layouts.module.css";
import Nav from "./Nav";
import Header from "./Header";
const Layouts = ({ children }) => {
  return (
    <>
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
