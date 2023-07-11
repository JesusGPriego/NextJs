import React, { useEffect, useState } from 'react';
import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { getFavoriteList } from '@/utils/LocalFavorites';
import { FavoriteContainer } from '@/components/favorites/FavoriteContainer';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  console.log({ favorites });
  useEffect(() => {
    setFavorites(getFavoriteList());
  }, []);

  return (
    <Layout title='favorites'>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoriteContainer favorites={favorites} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
