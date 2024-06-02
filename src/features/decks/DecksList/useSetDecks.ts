import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/store"
import { selectDecks } from "../decks-selectors"
import { setDecksTC } from "../decks-thunks"

export const useSetDecks = ()=>{const dispatch = useAppDispatch()
const decks = useAppSelector(selectDecks)

useEffect(() => {
  dispatch(setDecksTC())
  }, [dispatch])
  
  return{
    decks
  }
}