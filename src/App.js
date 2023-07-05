import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import styles from "./styles/modules/app.module.scss";
import AppContent from './components/AppContent';

function App() {
  return (
    <div className="container">
      <PageTitle>TO DO LIST</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
