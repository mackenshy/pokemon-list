const getFavorites = (): number[] => {
	return JSON.parse(localStorage.getItem('favorites') || '[]')
}

const toggleFavorite = (id: number): void => {
	let favorites: number[] = getFavorites()
	if (favorites.includes(id)) {
		favorites = favorites.filter((pokemonId) => pokemonId !== id)
	} else {
		favorites.push(id)
	}

	localStorage.setItem('favorites', JSON.stringify(favorites))
}

const isFavorite = (id: number): boolean => {
	// if (typeof window === 'undefined') return false

	return getFavorites().includes(id)
}

const favorites = (): number[] => {
	return getFavorites()
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { toggleFavorite, isFavorite, favorites }
