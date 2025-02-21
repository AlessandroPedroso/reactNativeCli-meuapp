import {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

function App() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  function pegaNome(texto) {
    if (texto.length > 0) {
      setNome('Bem vindo ' + texto);
    } else {
      setNome('');
    }
  }

  function entrar() {
    if (input === '') {
      alert('Digite seu nome!');
      return;
    }

    setNome(input);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setInput(text)} />
      <Button title="Entrar" onPress={entrar} />
      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 17,
    fontSize: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
  },
});

export default App;
