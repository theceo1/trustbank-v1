export const fetchMarketData = () => async (dispatch) => {
    dispatch({ type: 'FETCH_MARKET_DATA_REQUEST' });
    try {
      const response = await fetch('/api/market-data');
      const data = await response.json();
      dispatch({ type: 'FETCH_MARKET_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_MARKET_DATA_FAILURE', payload: error.message });
    }
  };
  