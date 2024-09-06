const initialState = {
  selectedSong: null,
  likedSongs: [], // Array di ID delle canzoni con "Mi piace"
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_SONG':
      return {
        ...state,
        selectedSong: action.payload,
      };
    case 'TOGGLE_LIKE':
      // Aggiungi o rimuovi la canzone dall'elenco di "Mi piace"
      const isLiked = state.likedSongs.includes(action.payload);
      return {
        ...state,
        likedSongs: isLiked
          ? state.likedSongs.filter((id) => id !== action.payload)
          : [...state.likedSongs, action.payload],
      };
    default:
      return state;
  }
};

export default songReducer;
