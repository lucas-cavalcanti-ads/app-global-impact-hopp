import React, { useEffect, useState } from 'react';

import {
  Button,
  Text,
  TextInput,
  View
} from 'react-native';

import { styles } from './style';

import { adicionarRefeicao, getRefeicoes } from '../../../utils/firebase/connection';

export default function CadastroRefeicao({ navigation }) {

  const [refeicoes, setRefeicoes] = useState([]);  
  const [descricao, setDescricao] = useState('');
  const [qtdPessoas, setQtdPessoas] = useState(0);
  const [qtdDias, setQtdDias] = useState(0);
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
      );
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

  function realizarCadastro() {
    if (camposValidos()) {
      setAtivaErro(true);
      return false;
    } else {      
      refeicoes.push(montarObjetoRefeicao());
      adicionarRefeicao(refeicoes);
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
            title="Cadastrar refeição"
            accessibilityLabel="Botão que realiza o cadastro de usuário"
            onPress={realizarCadastro} />
        </View>
      </View>

    </View>
  );
}
