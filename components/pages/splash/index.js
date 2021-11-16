import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import getImage from '../../../utils/Images';
import { styles } from './style';

import LoadingSplash from '../../../utils/loading/LoadingSplash';

export default function Splash({ navigation }) {
    
    useEffect(() => {
        setTimeout(function(){ navigation.navigate("ListaRefeicoes") }, 4000);
    }, [])

    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={getImage('logo-hopp')} />
            <LoadingSplash/>
            
        </View>        
    );     
}