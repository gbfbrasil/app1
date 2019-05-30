/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// O export default é igual ao export
export default class App extends Component {

  constructor(props){
    super(props);
    //O state serve para armazenar a estado da variável
    //Naquele momento
    this.state = { contador: 0};
}

// Criei uma função void
// com o nome de onPress
onPress = (acao) => {
  if(acao == '+'){
    //serve para atribuir valor 
    this.setState({
      contador: this.state.contador + 1
    });
  }else{
    this.setState({
      contador: this.state.contador === 0 ? 0 :this.state.contador - 1
    });
  }
  
}
//O render é responsavel por exibir todo conteudo
// na tela
render() {
  return (
    <View >
      <TouchableOpacity style={estilo.botao1} onPress={()=>{this.onPress('+')}}>
      <Text style={estilo.descricao}>Incrementar</Text> 
      </TouchableOpacity> 
      <Text style={estilo.contador}>
       { this.state.contador !== 0
        ? this.state.contador 
        : 0}
      </Text>
      <TouchableOpacity style={estilo.botao} onPress={()=>{this.onPress('-')}}>
      <Text style={estilo.descricao}>Decrementar</Text> 
      </TouchableOpacity> 
    </View>
    );
  }
}

// Responsavel por criar os elementos de estlização
const estilo = StyleSheet.create({
  botao: {
    padding: 20,
    backgroundColor: 'red',
  },
  descricao: {
    textAlign: 'center',
    fontSize: 60
  },
  contador: {
    textAlign : 'center',
    fontSize: 60,
    color:'cyan'
  },
  botao1: {
    marginTop: 140,
    padding: 20,
    backgroundColor: 'green',
  },
})