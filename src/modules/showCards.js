import { getPoke } from './poke.js';
import populate from './modal.js';
import capitalize from './helpers.js';
import { addLike } from './likes.js';
import { getComments } from './comments.js';

const generateCard = (data) => {
  const card = document.createElement('div');
  card.className = 'card flex flex-aic';
  card.innerHTML = `<img
  class="avatar"
  src="${data.sprites.other['official-artwork'].front_default}"
  alt="${data.name} avatar"
/>
<div class="info flex flex-jcb flex-aic">
  <div class="flex title">
    <h3>${capitalize(data.name)}</h3>
    <div class="chips-wrap flex">
      ${data.types
    .map(
      (t) => `<span class="chips chip-${t.type.name}">${t.type.name}</span>`,
    )
    .join('')}
    </div>
  </div>
  <div class="actions flex">
    <svg id="like" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
      />
    </svg>
    <svg viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z"
      />
    </svg>
  </div>
</div>`;
  card.addEventListener('click', (e) => {
    if (e.target.id === 'like') {
      addLike({ item_id: data.id });
      e.target.outerHTML = `<svg class="filled-heart" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
      </svg>`;
      return;
    }

    populate(data, document.body);
    getComments(data.id);
  });
  return card;
};

const showCards = (list) => {
  const parent = document.querySelector('.list');
  parent.innerHTML = '';
  list.forEach(async (poke) => {
    const data = await getPoke(poke.name);
    const card = generateCard(data);
    parent.appendChild(card);
  });

  setTimeout(() => {
    parent.classList.remove('hide');
    document.querySelector('.pagination').classList.remove('hide');
    document.querySelector('.loading').classList.add('hide');
  }, 1500);
};

export { showCards, capitalize };
