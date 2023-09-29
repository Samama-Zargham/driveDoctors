import React, { useEffect, useState } from 'react';
import MainStack from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import navServices from './src/others/utils/navServices';
import Splash from './src/screens/auth/Splash';

const App = () => {
  const [splash, setsplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setsplash(false)
    }, 3200);
  }, [])

  return (
    <NavigationContainer ref={navServices.setTopLevelNavigator}>
      {splash ? <Splash /> : <MainStack />}
    </NavigationContainer>
  );
};

export default App;
