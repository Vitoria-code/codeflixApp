import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text style={styles.textoVoltar}>Voltar</Text>
        </TouchableOpacity>

        <Image
          style={styles.capa}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${props.filme.poster_path}`,
          }}></Image>
        <Text style={styles.titulo}> {props.filme.title}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{props.filme.overview}</Text>
        <Text style={styles.avaliacao}>
          Avaliação: {''}
          {parseInt(props.filme.vote_average)} /10
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#121212',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  btnVoltar: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#E52246',
    padding: 10,
  },
  textoVoltar: {
    color: '#FFF',
    fontSize: 17,
  },
  titulo: {
    textAlign: 'center',
    color: '#FFF',
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  sinopse: {
    color: '#FFF',
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 3,
  },
  descricao: {
    color: '#FFF',
    marginLeft: 5,
    marginRight: 5,
  },
  capa: {
    width: 180,
    height: 250,
    margin: 5,
    marginLeft: 120,
  },
  avaliacao: {
    fontSize: 17,
    color: '#FFF',
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5,
  },
});
