import React from 'react';
import { View } from 'react-native';
// import Login from './Login';
import Home from './Home';

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    }}>
      {/* <Login /> */}
      <Home />
    </View>
  );
};

export default App;
