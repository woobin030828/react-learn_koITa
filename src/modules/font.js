import { createAction, handleActions } from 'redux-actions'

// dux패턴

// type
const CHANGE_COLOR = "font/CHANGE_COLOR"
const CHANGE_FONT_SIZE = "font/CHANGE_FONT_SIZE"

// action
export const changeColor = createAction(CHANGE_COLOR)
export const changeFontSize = createAction(CHANGE_FONT_SIZE)

// state
const initialState = {
    fontSize : "16px",
    color : "red"
}

// reducer
const font = handleActions({
    [CHANGE_COLOR]: (state, action) => ({...state, color: action.payload}),
    [CHANGE_FONT_SIZE]: (state, action) => ({...state, fontSize : "100px"})
}, initialState)

export default font;