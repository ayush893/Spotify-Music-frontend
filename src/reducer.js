export const intialState = {user: null, 
  playlists: [],
  playing: false,
  item: null,
  // token: ""
  // token: "BQCLcy3CTiZuv_1D5dYflde42KM6FMtYlGMolOzlFoGspZKrALfz25FbYn2b1Mwm359qwJJ_c6fxxcypukC1AbEnw5oPO0pLXXMSxrB1sKCqiaTfMFuA71DxcGeiq3OAsRdxOsabfQqMtz6MsDdyMHv-1xfdhjAkyK_fWdcz2bBETgaC"
  };

const reducer = ((state, action) => {
console.log(action)

// Action -> type, Payload

  switch(action.type) {
      case 'SET_USER':
        return {
            ...state,
            user: action.user
        };
      case 'SET_TOKEN':
        return{
          ...state,
          token: action.token
        }
      case 'SET_PLAYLISTS':
        return {
          ...state,
          playlists: action.playlists
        }
        case 'SET_DISCOVER_WEEKLY':
          return {
            ...state,
            discover_weekly: action.response
          }
      default:
        return state;
    }
  });

export default reducer;