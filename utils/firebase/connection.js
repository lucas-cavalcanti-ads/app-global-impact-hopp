import { firebase } from '../firebase/config'

export function getRefeicoes(setRefeicoes){
    firebase
        .database()
        .ref('refeicoes/')
        .on('value', (snapshot) => {
            const refeicoes = snapshot.val();
            (refeicoes == null) ? setRefeicoes([]) : setRefeicoes(refeicoes);
        });        
}

export function adicionarRefeicao(refeicoes){            
    firebase
        .database()
        .ref('refeicoes')
        .set(refeicoes);
}

export function deleteRecord(){
    
}