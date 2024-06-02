import { useEffect } from 'react'
import { DeckResponceType, decksApi } from '../decks-api'
import s from './DecksList.module.css'

import { useAppDispatch, useAppSelector } from '../../../app/store'
import { setDecksAC } from '../decks-reducer'
import { DeckItem } from './DeckItem/DeckItem'
import { selectDecks } from '../decks-selectors'

export const DecksList = () => {
  const dispatch = useAppDispatch()
const decks = useAppSelector(selectDecks)

useEffect(() => {
  decksApi.getDecks().then((res)=> dispatch(setDecksAC(res.data.items)))
  }, [dispatch])
return <ul className={s.list}>
  {decks.map(deck => <DeckItem deck={deck} key={deck.id} />)}
  
</ul>

}
