
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function togglerModal(bool, link) {
  if (bool) {
    return dispatch => {
      dispatch({
        type: OPEN_MODAL,
        payload: link,

      })
    }
  } else {
    return dispatch => {
      dispatch({
        type: CLOSE_MODAL,
        payload: link,
      })
    }
  }
}