import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Detalhes from '../Detalhes';

export default function Filmes({data}) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}> {data.title}</Text>

        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
          }}
          style={styles.capa}></Image>

        <View style={styles.areaBotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setVisibleModal(true)}>
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={() => setVisibleModal(false)}></Detalhes>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 350,
  },
  titulo: {
    fontSize: 19,
    padding: 15,
    fontWeight: 'bold',
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
  },
  botao: {
    width: 100,
    opacity: 1,
    backgroundColor: '#09A6FF',
    padding: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  botaoTexto: {
    color: '#FFF',
    textAlign: 'center',
  },
});
