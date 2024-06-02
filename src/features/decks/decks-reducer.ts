import { DeckType } from "./decks-api"

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "SET-DECKS": {
      return {...state, decks: action.decks}
    }
    case "ADD-DECK": {
      return {...state, decks: [action.deck, ...state.decks]  }
    }
    default:
      return state
  }
}

type DecksActions = 
ReturnType<typeof setDecksAC>
| ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: DeckType[] ) => {
  return {type: "SET-DECKS", decks} as const
}
export const addDeckAC = (deck:DeckType)=>{
  return {type: "ADD-DECK", deck} as const
}
