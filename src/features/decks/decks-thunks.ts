import { Dispatch } from "redux"
import { AddDeckParams, decksApi } from "./decks-api"
import { setDecksAC } from "./decks-reducer"
import { AppDispatch } from "../../app/store"

export const setDecksTC=()=>(dispatch:Dispatch) =>{
decksApi.getDecks().then((res)=> dispatch(setDecksAC(res.data.items)))
}

export const addDeckTC =(params: AddDeckParams)=> async (dispatch:AppDispatch) =>  {
    return decksApi.addDeck(params).then((res)=> 
    dispatch(setDecksTC()))
// dispatch(addDeckAC(res.data))
}