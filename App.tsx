/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */


import {View, Text} from 'react-native';
import ListAnimals from './src/components/ListAnimals';
function App(): JSX.Element {
  return (
      <View style={{  backgroundColor: '#e5e5e5',flex: 1,paddingBottom : 20}}>
        <Text style={{fontSize : 30, color : '#000', fontWeight : "bold", textAlign : 'center', marginVertical : 20}}>Animals Sound</Text>
        <ListAnimals/>
      </View>
  );
}

export default App;
