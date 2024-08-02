import React from 'react';
import Card from '../../components/Card'; // Importe o componente Card
import useFetchProducts from '../../utils/useFetchProducts';

const Itens = () => {
  const { products, loading } = useFetchProducts();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <section className="mt-24 mx-auto p-8 bg-bgitens rounded-md below-768:bg-container2 below-768:p-0" style={{ maxWidth: 'calc(100% - 10px)' }}>
      <div className="grid gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 6xl:grid-cols-8">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            title={product.title}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            isOnPromotion={product.isOnPromotion}
            promotionEndTime={product.promotionEndTime}
            processor={product.processor}
            memory={product.memory}
            storage={product.storage}
            additionalImages={product.additionalImages || []}
            moreImages={product.moreImages || []}
          />
        ))}
      </div>
    </section>
  );
};

export default Itens;
