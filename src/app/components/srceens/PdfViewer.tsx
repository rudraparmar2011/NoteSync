import React from 'react';
import { 
  View, 
  FlatList, 
  Image, 
  Text, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity 
} from 'react-native';

// Sample warrior data - replace with your actual data
const WARRIORS_DATA = [
  {
    id: '1',
    name: 'Samurai',
    image: require('../assets/images/logo.jpg'), // Make sure to add your images
    description: 'Ancient Japanese warrior'
  },
  {
    id: '2',
    name: 'Viking',
    image: require('../assets/images/logo.jpg'),
    description: 'Norse warrior'
  },
  {
    id: '3',
    name: 'Spartan',
    image: require('../assets/images/logo.jpg'),
    description: 'Ancient Greek warrior'
  },
  {
    id: '4',
    name: 'Spartan',
    image: require('../assets/images/logo.jpg'),
    description: 'Ancient Greek warrior'
  }, {
    id: '5',
    name: 'Spartan',
    image: require('../assets/images/logo.jpg'),
    description: 'Ancient Greek warrior'
  }, {
    id: '6',
    name: 'Spartan',
    image: require('../assets/images/logo.jpg'),
    description: 'Ancient Greek warrior'
  },
  {
    id: '7',
    name: 'Spartan',
    image: require('../assets/images/logo.jpg'),
    description: 'Ancient Greek warrior'
  }, {
    id: '8',
    name: 'Spartan',
    image: require('../assets/images/logo.jpg'),
    description: 'Ancient Greek warrior'
  }, {
    id: '9',
    name: 'Spartan',
    image: require('../assets/images/logo.jpg'),
    description: 'Ancient Greek warrior'
  }, {
    id: '0',
    name: 'Spartan',
    image: require('../assets/images/logo.jpg'),
    description: 'Ancient Greek warrior'
  }, {
    id: '11',
    name: 'Spartan',
    image: require('../assets/images/logo.jpg'),
    description: 'Ancient Greek warrior'
  },
  // Add more warriors as needed
];

const { width } = Dimensions.get('window');

interface Warrior {
  id: string;
  name: string;
  image: any; // or more specific type if available
  description: string;
}

const PdfViewer = () => {
  const renderWarriorCard = ({ item }: { item: Warrior }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => console.log(`Selected ${item.name}`)}
    >
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={WARRIORS_DATA}
        renderItem={renderWarriorCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: (width - 36) / 2, // 2 columns with margins
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default PdfViewer;