export default (id, user, comment) => {
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
