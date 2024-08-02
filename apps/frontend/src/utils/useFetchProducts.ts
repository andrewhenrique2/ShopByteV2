import { useState, useEffect } from 'react';

interface Product {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  oldPrice?: string;
  newPrice?: string;
  isOnPromotion?: boolean;
  promotionEndTime?: string;
  processor?: string;
  memory?: string;
  storage?: string;
  additionalImages?: string[];
  moreImages?: string[];
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export default useFetchProducts;
