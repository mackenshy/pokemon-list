import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { pokemonAPI } from '../../api'
import { Layout } from '../../components/layouts'
import { Pokemon, PokemonListResponse } from '../../interfaces'
import { getPokemonInfo } from '../../utils'
import { PokemonFullCard } from '../../components/pokemon'

type Props = {
  pokemon: Pokemon
}

const PokemonByNamePage:NextPage<Props> = ({pokemon}) => {
  return (
   <Layout title={pokemon.name}>
      <PokemonFullCard pokemon={pokemon} />
   </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (_) => {
  const { data } = await pokemonAPI.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: pokemonNames.map(name => ({
      params: { name }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string }

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    }
  }
}

export default PokemonByNamePage