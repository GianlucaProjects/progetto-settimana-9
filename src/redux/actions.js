// Definisce l'azione per selezionare una canzone
export const selectSong = (song) => {
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};

export const toggleLike = (songId) => {
  return {
    type: "TOGGLE_LIKE",
    payload: songId,
  };
};
