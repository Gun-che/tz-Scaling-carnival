import { OPEN_MODAL, CLOSE_MODAL } from '../actions/ModalAction'

const initState = {
  showModal: false,
}

export function modalReducer(state = initState, action) {
  switch (action.type) {

    case OPEN_MODAL:
      return { ...state, showModal: true }

    case CLOSE_MODAL:
      return { ...state, showModal: false }

    default:
      return state;
  }
}
