import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { Reducer } from '../store/reducer'

export const useTypedSelector: TypedUseSelectorHook<Reducer> = useSelector
