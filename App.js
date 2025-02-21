import {useState} from 'react'
import { View, Text, Image, Button } from 'react-native';

function App() {
  // let nome = 'Alessandro Pedroso';
  // let img = 'https://sujeitoprogramador.com/reactlogo.png';

  const [nome, setNome] = useState('Alessandro')
  const [idade, setIdade] = useState(20);
  
  function entrar(nome,idade) {
    setNome(nome)
    setIdade(idade)
  }

  return (
    <View style={{marginTop:25}}>

      <Button title='Mudar nome' onPress={() => entrar("Alessandro Schuquel Pedroso",33)} />
      <Text style={{ fontSize: 19 }}>{nome}</Text>
      <Text style={{ fontSize: 17 }}>{idade }</Text>
      {/* <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
        Meu primeiro App
      </Text> */}
      {/* <Text style={{fontSize: 20, color: 'green'}}>Alessandro</Text>

      <Image style={{width: 300, height: 300}} source={{uri: img}} />

      <Text style={{fontSize: 20}}>{nome}</Text> */}
    </View>
  );
}

export default App;
