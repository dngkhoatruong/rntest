import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppNavigation from './src/navigation';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <AppNavigation />
    </SafeAreaView>
  );
}

export default App;