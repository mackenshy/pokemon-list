import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces'
import { getPokemonInfo, localFavorites } from '../../utils'
import { useEffect } from 'react';
import { PokemonFullCard } from '../../components/pokemon'

type Props = {
  pokemon: Pokemon
}

const PokemonByIdPage:NextPage<Props> = ({pokemon}) => {
  return (
   <Layout title={pokemon.name}>
      <PokemonFullCard pokemon={pokemon} />
   </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (_) => {
  const pokemonIDs = [...(Array(151))].map((_, index) => `${index + 1}`)

  return {
    paths: pokemonIDs.map(id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string }

  const pokemon = await getPokemonInfo(id)

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  return {
    props: {
      pokemon
    },
    revalidate: 60 // seconds - ISR
  }
}

export default PokemonByIdPage