import {View, Text, Image} from 'react-native';

function App() {
  let nome = 'Alessandro Pedroso';
  let img = 'https://sujeitoprogramador.com/reactlogo.png';

  return (
    <View>
      <Text>Hello World!</Text>
      <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
        Meu primeiro App
      </Text>
      <Text style={{fontSize: 20, colo: 'green'}}>Alessandro</Text>

      <Image style={{width: 300, height: 300}} source={{uri: img}} />

      <Text style={{fontSize: 20}}>{nome}</Text>
    </View>
  );
}

export default App;
