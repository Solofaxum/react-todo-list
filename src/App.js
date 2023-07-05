import PageTitle from "./components/PageTitle";
import style from "./styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <>
      <PageTitle>TO DO LIST</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
      </div>
    </>
  );
}

export default App;
