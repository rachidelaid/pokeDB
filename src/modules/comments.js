export default async (id, user, comment) => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/d0HqiZcQvtTYVZAFmqCY/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username: user,
        comment,
      }),
    },
  );
};

const populateComments = (data) => {
  const list = document.querySelector('.comment-list');
  if (!data.length) {
    list.innerHTML = '<p>No comments found</p>';
  } else {
    data.forEach((d) => {
      list.innerHTML += `<p><small>${d.creation_date}</small> | <span>${d.username}:</span> ${d.comment}</p>`;
    });
  }
};

export const getComments = async (pokemon) => {
  const request = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/d0HqiZcQvtTYVZAFmqCY/comments?item_id=${pokemon}`,
  );
  const dataText = await request.json();
  populateComments(dataText);
};
