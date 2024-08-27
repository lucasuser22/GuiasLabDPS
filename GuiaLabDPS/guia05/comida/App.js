import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Card } from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: 'Pupusas',
    src: require('./src/imgs/pupusas.jpg'),
    calories: '300 kcal por unidad',
  },
  {
    id: '2',
    title: 'Yuca Frita con Chicharrón',
    src: require('./src/imgs/yuca.jpg'),
    calories: '450 kcal por porción',
  },
  {
    id: '3',
    title: 'Sopa de Gallina India',
    src: require('./src/imgs/sopa.jpg'),
    calories: '400 kcal por porción',
  },
];

const Item = ({ title, img, calories }) => (
  <Card containerStyle={styles.card}>
    <Card.Title>{title}</Card.Title>
    <Card.Image source={img} style={styles.img} />
    <Card.Divider />
    <Text style={styles.calories}>{calories}</Text>
  </Card>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} calories={item.calories} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
  },
  card: {
    padding: 10,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  calories: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default App;
