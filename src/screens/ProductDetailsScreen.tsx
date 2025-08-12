import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { ProductContext } from '../context/ProductContext';

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

type Props = {
  route: ProductDetailsScreenRouteProp;
};

const ProductDetailsScreen = ({ route }: Props) => {
  const { productId } = route.params;
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { width: '100%', height: 300, borderRadius: 8, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  price: { fontSize: 20, color: '#888', marginVertical: 8 },
  description: { fontSize: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default ProductDetailsScreen;
