import { pokemonAPI } from '../api'
import { Pokemon } from '../interfaces'

export const getPokemonInfo = async (nameOrId: string) => {
	try {
		const { data } = await pokemonAPI.get<Pokemon>(`/pokemon/${nameOrId}`)

		return {
			id: data.id,
			name: data.name,
			sprites: data.sprites,
		}
	} catch (error) {
		console.log(error)
		return null
	}
}
