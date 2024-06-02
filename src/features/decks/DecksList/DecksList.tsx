import s from './DecksList.module.css'

import { DeckItem } from './DeckItem/DeckItem'
import { useSetDecks } from './useSetDecks'

export const DecksList = () => {
const {decks} = useSetDecks()
return <ul className={s.list}>
  {decks.map(deck => <DeckItem deck={deck} key={deck.id} />)}
  
</ul>

}
