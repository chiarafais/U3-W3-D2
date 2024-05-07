export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const aggiungiAction = (dato) => ({
  type: ADD_TO_FAVOURITES,
  payload: dato,
});

export const rimuoviAction = (dato) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: dato,
});
