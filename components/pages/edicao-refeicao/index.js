import React, { useEffect, useState } from 'react';

import {
  Button,
  Text,
  TextInput,
  View
} from 'react-native';

import { styles } from './style';

import { getRefeicoes, adicionarRefeicao } from '../../../utils/firebase/connection';

export default function EdicaoRefeicao({ navigation, route }) {
  const { refeicao } = route.params;

  const [refeicoes, setRefeicoes] = useState([]);
  const [descricao, setDescricao] = useState(refeicao.descricao);
  const [qtdPessoas, setQtdPessoas] = useState(refeicao.qtd_pessoas);
  const [qtdDias, setQtdDias] = useState(refeicao.qtd_dias);
  const [ativaErro, setAtivaErro] = useState(false);

  useEffect(() => {
    getRefeicoes(setRefeicoes);
  }, []);

  function ExibirMensagemErro(flag) {
    if (flag) {
      return (
        <View>
          <Text style={{ color: 'white' }}>Verifique as informações do formulário!</Text>
        </View>
      )
    }
  }

  function montarObjetoRefeicao() {
    const now = new Date();
    const objetoRefeicao = {
      "id": refeicoes.length + 1,
      "descricao": descricao,
      "qtd_pessoas": parseInt(qtdPessoas),
      "qtd_dias": parseInt(qtdDias),
      "qtd_arroz_kg": parseFloat(((parseInt(qtdPessoas) * 0.5) * parseInt(qtdDias)).toFixed(2)),
      "qtd_feijao_kg": parseFloat(((parseInt(qtdPessoas) * 0.4) * parseInt(qtdDias)).toFixed(2)),
      "qtd_mistura_kg": parseFloat(((parseInt(qtdPessoas) * 0.3) * parseInt(qtdDias)).toFixed(2)),
      "data_cadastro": now.toString()
    };

    return objetoRefeicao;
  }

  function realizarEdicao() {
    if (camposValidos()) {
      setAtivaErro(true);
      return false;
    } else {
      const vetor = refeicoes.filter(elemento => elemento.data_cadastro != refeicao.data_cadastro)
      adicionarRefeicao(refeicoes.filter(elemento => elemento.data_cadastro != refeicao.data_cadastro))
      montarObjetoRefeicao();
      vetor.push(montarObjetoRefeicao());
      adicionarRefeicao(vetor);
      navigation.navigate("ListaRefeicoes");
    }
  }

  function camposValidos() {
    return descricao == '' || qtdPessoas == '' || qtdDias == '';
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerCard}>
        {ExibirMensagemErro(ativaErro)}

        <View style={styles.containerInput}>
          <Text style={{color: 'white'}}>Descrição</Text>
          <TextInput style={styles.inputStyle}
            keyboardType="text"
            onChangeText={setDescricao}            
            value={descricao} />
        </View>
        
        <View style={styles.containerInput}>
          <Text style={{color: 'white'}}>Quantidade de pessoas</Text>
          <TextInput style={styles.inputStyle}
            keyboardType="numeric"
            onChangeText={setQtdPessoas}            
            value={qtdPessoas} />
        </View>

        <View style={styles.containerInput}>
        <Text style={{color: 'white'}}>Quantidade de dias</Text>
          <TextInput style={styles.inputStyle}
            keyboardType="numeric"
            onChangeText={setQtdDias}            
            value={qtdDias} />
        </View>

        <View style={styles.conteinerButton}>
          <Button
            color="#2F2E2E"
            title="Salvar Edição"
            accessibilityLabel="Botão que realiza o cadastro de usuário"
            onPress={realizarEdicao} />
        </View>
      </View>

    </View>
  );
}
