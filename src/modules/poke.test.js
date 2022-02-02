import { getPokeCount } from './poke.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ results: new Array(1118) }),
}));

describe('Testing Items Count', () => {
  document.body.innerHTML = '<div class="intro">list count is <span class="tag">0</span></div>';

  it('pokemon list count should be 1118', async () => {
    const count = await getPokeCount();
    expect(count).toBe(1118);
  });

  it('the intro text should contain the items count', () => {
    document.querySelector('.intro .tag').textContent = '20';
    expect(document.querySelector('.intro').textContent).toBe(
      'list count is 20',
    );
  });
});
