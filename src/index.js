import './style.css';

import { getPokeCount, getPokeList } from './modules/poke.js';
import { showCards } from './modules/showCards.js';
import setupPagination from './modules/pagination.js';

const startup = async () => {
  document.querySelector('.list').classList.add('hide');
  document.querySelector('.pagination').classList.add('hide');
  document.querySelector('.loading').classList.remove('hide');

  const pokeCount = await getPokeCount();
  document.querySelector('.intro .tag').innerText = pokeCount;

  let pageNum = window.location.search.split('page=')[1]
    ? +window.location.search.split('page=')[1]
    : 1;

  if (pageNum > 56) {
    pageNum = 56;
  }
  const list = await getPokeList(20 * (pageNum - 1));
  showCards(list);
};

startup();
setupPagination();
