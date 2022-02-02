import { counter } from './comments.js';

test('counts the data and displays on HTML', () => {
  document.body.innerHTML = `<section class="comments">
  <h3 id="comment-title">Comments</h3></section>`;

  counter([1, 2, 3, 4, 5, 6]);
  const commentTitle = document.getElementById('comment-title');
  expect(commentTitle.innerHTML).toBe('Comments (6)');
});

test('counts the data and displays on HTML', () => {
  document.body.innerHTML = `<section class="comments">
<h3 id="comment-title">Comments</h3></section>`;

  counter([
    1, 2, 3, 4, 5, 6, 2222, 3333, 1, 44, 230, 240203023, 44, 5213, 33, 444,
    52134,
  ]);
  const commentTitle = document.getElementById('comment-title');
  expect(commentTitle.innerHTML).toBe('Comments (17)');
});

test('empty array turns only comments', () => {
  document.body.innerHTML = `<section class="comments">
  <h3 id="comment-title">Comments</h3></section>`;
  const commentTitle = document.getElementById('comment-title');
  counter([]);
  expect(commentTitle.innerHTML).toBe('Comments');
});
