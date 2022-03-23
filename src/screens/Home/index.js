import React, {useState,useEffect} from "react";

import { 
    View, 
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home(){

    //Criando os states 
    let [filme, setFilme] = useState('');
    let [saudacao, setSaudacao] = useState('');
    
    let [meusFilmes, setMeusFilmes] = useState([
        
        {
            id: 0,
            nome: 'Vingadores'
        },

        {
        id: 1,
        nome: 'Batman'
        },

    ]);

    useEffect(()=>{

      alert('Executou o UseEffect');
      
      const currentHour = new Date().getHours();
   
      if (currentHour < 12) {
        setSaudacao("Bom dia");
      } else if (currentHour >= 12 && currentHour < 18) {
        setSaudacao("Boa tarde");
      } else {
        setSaudacao("Boa noite");
      }

    },[]);


    //Criando a função que adiciona um novo filme
    function adicionaFilme(){
       if(filme.trim() != ''){
        const dados = {
            id: String(new Date().getTime()),
            nome: filme,
          };
     
          //alert("clicou");
      
          setMeusFilmes((oldState) => [... oldState, dados]);
          setFilme('');
       }
       else{
           alert('Digite um nome de um filme')
       }
     
     }

     function deletarfilme(index){

        console.log('id filme:' + index);    

        let novosFilmes = [...meusFilmes];
        
         novosFilmes = novosFilmes.filter((item, i)=>{
           if(item.id != index ) {
            return true;
           }
           else{
               return false;
           }           
        });
       setMeusFilmes(novosFilmes);
    }
    
 

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>App Movies, {saudacao}</Text>
            <Text style={styles.subTitulo}>Minha lista de Filmes Favoritos</Text>

            <TextInput 
                value={filme}
                
                returnKeyType="search" 
                style={styles.campo} 
                onChangeText={setFilme} 
                placeholder="Digite o nome do filme"/>

            <TouchableOpacity style={styles.botao}  onPress={adicionaFilme}>
                <Text style={styles.textoBotao}>Adicionar</Text>
                
            </TouchableOpacity>

            <Text style={styles.titulo}>Meus Filmes favoritos</Text>

            <FlatList
                data={meusFilmes}
                keyExtractor={(item) => item.id}
                renderItem={(({item}) => 
                    <View style={styles.botaoFilme}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={styles.textoBotaoFilme}>{item.nome}</Text>
                            <TouchableOpacity onPress={()=>deletarfilme(item.id)}>
                                <Ionicons name="md-checkmark-circle" size={32} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
          
            />

        </View>
    );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#30478C',
      paddingVertical:70,
      paddingHorizontal:20
  },

  titulo:{
    color: '#FFF',
    fontSize:24,
    fontWeight: 'bold',
    marginBottom: 10
  },

  subTitulo:{
    color: '#FFF',
    fontSize:15,
  },

  campo:{
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize:18,
    marginTop:30,
    borderRadius:7,
    padding:15
  },

  botao:{
    backgroundColor: '#F2C53D',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    marginBottom:20
  },

  textoBotao:{
    color: '#4161BF',
    fontSize:17,
    fontWeight: 'bold'
  },

  botaoFilme:{
    backgroundColor: '#1F1E25',
    padding:15,
    marginBottom: 10
  },

  textoBotaoFilme:{
    color: '#FFF',
    fontSize:22,
    fontWeight: 'bold'
  }

});