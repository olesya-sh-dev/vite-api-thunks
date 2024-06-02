import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})
type AuthorType = {
  id: string
  name: string
}

export type DeckType = {
  isFavorite: boolean
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type DeckResponceType = {
  items: DeckType[]
  pagination: PaginationType
}

// export type AddDeckResponceType = {
// 	id: string;
// 	userId: string;
// 	name: string;
// 	isPrivate: boolean;
// 	cover: string;
// 	created: string;
// 	updated: string;
// 	cardsCount: number;
// }
export const decksApi = {
  getDecks: () => instance.get<DeckResponceType>('/v1/decks'),
  addDeck: (params: AddDeckParams) => instance.post('/v1/decks', params),
}
export type AddDeckParams = {
  name: string
}
