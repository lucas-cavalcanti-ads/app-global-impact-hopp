import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements'
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './style';

import { getRefeicoes, adicionarRefeicao } from '../../../utils/firebase/connection';

export default function ListaRefeicoes({ navigation }) {

  const [refeicoes, setRefeicoes] = useState([]);

  useEffect(() => {
    getRefeicoes(setRefeicoes);
  }, []);

  function excluirRefeicao(data_cadastro) {
    adicionarRefeicao(refeicoes.filter(elemento => elemento.data_cadastro != data_cadastro));
  }

  function ExibirMensagemListaVazia() {
    if (refeicoes.length <= 0) {
      return (
        <View>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Não existem refeições cadastradas!</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      {ExibirMensagemListaVazia()}

      <FlatList
        style={styles.listContainer}
        data={refeicoes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>

            <View style={styles.containerCard}>
              <Text style={styles.item}>
                {item.descricao}
              </Text>
              <Text style={styles.item}>
                {item.data_cadastro.substring(4, 16)}
              </Text>
              <View style={styles.containerIcone}>
                <TouchableOpacity
                  style={{ flexDirection: 'column' }}
                  onPress={() => excluirRefeicao(item.data_cadastro)}>
                  <Icon
                    name='trash-outline'
                    type='ionicon'
                    color='red' />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flexDirection: 'column' }}
                  onPress={() => { navigation.navigate("DetalheRefeicao", { refeicao: item }) }}>
                  <Icon
                    name='eye-outline'
                    type='ionicon'
                    color='white' />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        )}
      />
      <View style={styles.containerBotao}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CadastroRefeicao")}>
          <Icon
            name='add-circle-outline'
            type='ionicon'
            color='white' />
          <Text style={{ fontSize: 22, color: 'white' }}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
