import React, { useState } from 'react';
import { Icon } from 'react-native-elements'
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './style';

export default function DetalheRefeicao({ navigation, route }) {

  const { refeicao } = route.params;
  const [dataCriacaoAbreviada, setDataCriacaoAbreviada] = useState(refeicao.data_cadastro.substring(0, 15));

  return (
    <View style={styles.container}>

      <View style={styles.containerCard}>

        <View style={styles.containerInput}>
          <Text style={styles.inputStyle}>
            Descrição: {refeicao.descricao}
          </Text>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.inputStyle}>
            Data de cadastro: {dataCriacaoAbreviada}
          </Text>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.inputStyle}>
            Quantidade de dias: {refeicao.qtd_dias}
          </Text>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.inputStyle}>
            Quantidade de pessoas: {refeicao.qtd_pessoas}
          </Text>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.inputStyle}>
            Quantidade de arroz (kg): {refeicao.qtd_arroz_kg.toFixed(1)}
          </Text>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.inputStyle}>
            Quantidade de feijão (kg): {refeicao.qtd_feijao_kg.toFixed(1)}
          </Text>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.inputStyle}>
            Quantidade de mistura (kg): {refeicao.qtd_mistura_kg.toFixed(1)}
          </Text>
        </View>

      </View>

      <View style={styles.containerBotao}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("EdicaoRefeicao", { refeicao: refeicao })}>
          <Icon
            name='create-outline'
            type='ionicon'
            color='white' />
          <Text style={{ fontSize: 22, color: 'white' }}>
            Editar
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}