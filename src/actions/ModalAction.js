
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function togglerModal(bool) {
  if (bool) {
    return dispatch => {
      dispatch({
        type: OPEN_MODAL,
        payload: true,
      })
    }
  } else {
    return dispatch => {
      dispatch({
        type: CLOSE_MODAL,
        payload: false,
      })
    }
  }
}