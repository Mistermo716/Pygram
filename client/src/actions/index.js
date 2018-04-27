import { API_BASE_URL } from '../config';
export const GET_PHOTOS = 'GET_PHOTOS';
export const getPhotos = () => dispatch => {
  console.log('fetching photos');
  fetch(`${API_BASE_URL}/photos`)
    .then(res => res.json())
    .then(photos => {
      dispatch({
        type: GET_PHOTOS,
        payload: photos,
      });
    });
};

export const SUBMIT_PHOTO = 'SUBMIT_PHOTO';
export const submitPhoto = submitData => dispatch => {
  console.log('post action called');
  fetch(`${API_BASE_URL}/photos/new`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(submitData),
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SUBMIT_PHOTO,
        payload: data,
      })
    );
};

export const GET_COMMENTS = 'GET_COMMENTS';
export const getComments = comment => dispatch => {
  console.log('post action called');
  fetch(`${API_BASE_URL}/photos/new`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(comment),
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SUBMIT_PHOTO,
        payload: data,
      })
    );
};
