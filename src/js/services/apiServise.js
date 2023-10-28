import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

class ApiService {
  #API_KEY = '40338519-9c8b50da07f911c128404e2d0';
  #page = 1;

  async fetchPhotos(inputValue) {
    const queryParams = new URLSearchParams({
      key: this.#API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.#page,
      per_page: 40,
    });
    const response = await axios.get(`?${queryParams}`);
    return response.data;
  }

  get page() {
    return this.#page;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }
}

export default ApiService;