/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {
  View,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import useSound from '../hooks/useSound';

const ListAnimals = () => {
    const {
        handleAguila,
        handleArdilla,
        handleBurro,
        handleCaballo,
        handleCabrito,
        handleChivo,
        handleCochito,
        handleCuye,
        handleElefante,
        handleGallo,
        handleJaguar,
        handleJirafa,
        handleLeon,
        handleLobo,
        handleOso,
        handlePaloma,
        handlePantera,
        handlePavo,
        handlePerro,
        handlePollo,
        handlePinguino,
        handleTigre,
        handleToro,
        handlerMono,
        handleVaca,
        handlerFoca,
        handlerGato} = useSound();


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Pressable onPress={handleAguila}>
            <Image
              source={require('../images/aguila.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleArdilla}>
            <Image
              source={require('../images/ardilla.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleBurro}>
            <Image
              source={require('../images/burro.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleCaballo}>
            <Image
              source={require('../images/caballo.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleCabrito}>
            <Image
              source={require('../images/cabra.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleChivo}>
            <Image
              source={require('../images/chivo.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleCochito}>
            <Image
              source={require('../images/coche.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleCuye}>
            <Image
              source={require('../images/cuye.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleElefante}>
            <Image
              source={require('../images/elefante.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleGallo}>
            <Image
              source={require('../images/gallo.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>

        <View style={styles.card}>
          <Pressable onPress={handleJaguar}>
            <Image
              source={require('../images/jaguar.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleJirafa}>
            <Image
              source={require('../images/jirafa.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleLeon}>
            <Image
              source={require('../images/leon.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleLobo}>
            <Image
              source={require('../images/lobo.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleOso}>
            <Image source={require('../images/oso.jpg')} style={styles.image} />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handlePaloma}>
            <Image
              source={require('../images/paloma.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handlePantera}>
            <Image
              source={require('../images/pantera.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handlePavo}>
            <Image
              source={require('../images/pavo.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handlePerro}>
            <Image
              source={require('../images/perro.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handlePinguino}>
            <Image source={require('../images/pin.jpg')} style={styles.image} />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handlePollo}>
            <Image
              source={require('../images/pollo.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleTigre}>
            <Image
              source={require('../images/tigre.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleToro}>
            <Image
              source={require('../images/toro.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleVaca}>
            <Image
              source={require('../images/vaca.jpg')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card} >
          <Pressable onPress={handlerMono}>
            <Image
              source={require('../images/mono.png')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handlerFoca}>
            <Image
              source={require('../images/foca.png')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handlerGato}>
            <Image
              source={require('../images/gato.png')}
              style={styles.image}
            />
          </Pressable>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    marginHorizontal: '5%',
  },
  image: {
    width: 100,
    height: 110,
    borderRadius: 100,
    objectFit: 'cover',
    marginHorizontal: 5,
  },
  card: {

    marginHorizontal: 3,
    marginTop: 20,
  },
});

export default ListAnimals;
