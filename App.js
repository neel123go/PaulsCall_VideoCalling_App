import { StatusBar } from 'expo-status-bar';
import ContactsPage from './src/Pages/ContactsPage';
import CallingPage from './src/Pages/CallingPage';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <CallingPage />

    </>
  );
}

export default App;