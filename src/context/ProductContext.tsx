import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchProducts } from '../services/api';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

type ProductContextType = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
  loading: false,
  error: null,
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (e) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
