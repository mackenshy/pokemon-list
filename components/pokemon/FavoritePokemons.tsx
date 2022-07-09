import { Grid } from '@nextui-org/react';
import { FC } from "react"
import { FavoritePokemonCard } from './';

type Props = {
  favorites: number[]
}

export const FavoritePokemons: FC<Props> = ({ favorites}) => {
  return (
    <Grid>
      <Grid.Container gap={2} direction='row' justify='flex-start'>
        {
          favorites.map((id) => (
            <FavoritePokemonCard id={id} key={id} />
          ))
        }
      </Grid.Container>
    </Grid>
  )
}
