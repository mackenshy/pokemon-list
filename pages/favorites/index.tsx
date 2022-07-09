import { useEffect, useState } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { Layout } from '../../components/layouts/Layout';
import { EmptyFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';
const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(localFavorites.favorites())
  }, [])
  
  return (
    <Layout title="Favorites">
      {favorites.length === 0 
       ? (<EmptyFavorites />)
       : ( <FavoritePokemons favorites={favorites} /> )
      }
    </Layout>
  )
}

export default FavoritesPage