import { StatusBar } from 'expo-status-bar';
import ContactsPage from './src/Pages/ContactsPage';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />

      <ContactsPage />

    </SafeAreaView>
  );
}

export default App;