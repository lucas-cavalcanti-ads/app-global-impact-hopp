import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../../pages/splash';
import ListaRefeicoes from '../../pages/lista-refeicoes';
import DetalheRefeicao from '../../pages/detalhe-refeicao';
import CadastroRefeicao from '../../pages/cadastro-refeicao';
import EdicaoRefeicao from '../../pages/edicao-refeicao';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ListaRefeicoes"
                    component={ ListaRefeicoes }
                    options={{ title: "Lista de Refeições"}}
                    />
                <Stack.Screen
                    name="CadastroRefeicao"
                    component={ CadastroRefeicao }
                    options={{ title: "Cadastro Refeição"}}
                    />
                <Stack.Screen
                    name="EdicaoRefeicao"
                    component={ EdicaoRefeicao }
                    options={{ title: "Edição Refeição"}}
                    />
                <Stack.Screen
                    name="Splash"
                    component={ Splash }
                    options={{ title: "Splash", headerLeft: null }}
                    />                
                <Stack.Screen
                    name="DetalheRefeicao"
                    component={ DetalheRefeicao }
                    options={{ title: "Detalhe Refeições" }}
                    />
            </Stack.Navigator>
            <StatusBar barStyle="default" />
        </NavigationContainer>
    );
}