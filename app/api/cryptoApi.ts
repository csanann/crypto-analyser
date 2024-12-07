import axios from 'axios';

const CRYPTOWATCH_API_URL = 'https://api.crytowatch.com/markets';
const COINMARKETCAP_API_URL = 'https://pro-api.coinmarketcap.com/v1/crytocurrency/listings/latest';

const fetchCryptoData = async (coinName: string) => {
  try {
    const response = await axios.get(`${CRYPTOWATCH_API_URL}/${coinName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from CryptoWatch:', error);

    try {
      const fallbackResponse = await axios.get(COINMARKETCAP_API_URL, {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
        },
      });
      return fallbackResponse.data;
    } catch (fallbackError) {
      console.error('Error fetching data from CoinMarketCap:', fallbackError);
      throw new Error('Unable to fetch cryptocurrency data from both APIs.');
    }
    }
  };

  export { fetchCryptoData };