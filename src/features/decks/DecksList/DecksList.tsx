import { useEffect } from 'react'
import { DeckResponceType, decksApi } from '../decks-api'
import s from './DecksList.module.css'

import { useAppDispatch, useAppSelector } from '../../../app/store'
import { setDecksAC } from '../decks-reducer'
import { DeckItem } from './DeckItem/DeckItem'
import { selectDecks } from '../decks-selectors'
import { setDecksTC } from '../decks-thunks'
import { useSetDecks } from './useSetDecks'

export const DecksList = () => {
const {decks} = useSetDecks()
return <ul className={s.list}>
  {decks.map(deck => <DeckItem deck={deck} key={deck.id} />)}
  
</ul>

}
