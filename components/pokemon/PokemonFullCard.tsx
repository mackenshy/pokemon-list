import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Button, Card, Container, Grid, Text } from "@nextui-org/react"
import confetti from "canvas-confetti";
import { localFavorites } from "../../utils";
import { Pokemon } from '../../interfaces/pokemon';
type Props = {
  pokemon: Pokemon
}

export const PokemonFullCard: FC<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsFavorite(!isFavorite)

    if (isFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  }

  useEffect(() => {
    setIsFavorite(localFavorites.isFavorite(pokemon.id))
  }, [pokemon.id])

  return (
    <Grid.Container css={{ marginTop: '15px'}} gap={2}>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ padding: '30px'}}>
          <Card.Body>
            <Card.Image
              src={pokemon.sprites.other?.dream_world.front_default || ''}
              alt={pokemon.name}
              width="100%"
              height={200}
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
            <Text h1 transform='capitalize'>{pokemon.name}</Text>
            <Button 
              color="gradient" 
              ghost={!isFavorite}
              onPress={onToggleFavorite}>
                {isFavorite ? 'En Favoritos' : 'Guardar en favoritos'}
              </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Sprites:</Text>
            <Container direction='row' display='flex' gap={0}>
              <Image 
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image 
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image 
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image 
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}