const initialState = {
    marketData: [],
    loading: true,
    error: null,
  };
  
  const marketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MARKET_DATA_SUCCESS':
        return {
          ...state,
          marketData: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_MARKET_DATA_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default marketReducer;
  