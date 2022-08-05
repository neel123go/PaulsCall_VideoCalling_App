import { StatusBar } from 'expo-status-bar';
import ContactsPage from './src/Pages/ContactsPage';
import CallingPage from './src/Pages/CallingPage';
import IncomingCallPage from './src/Pages/IncomingCallPage';
import CallPage from './src/Pages/CallPage';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <CallPage />

    </>
  );
}

export default App;