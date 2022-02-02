const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/d0HqiZcQvtTYVZAFmqCY/likes/',
  );

  const likes = await response.json();

  return likes;
};

const addLike = async (like) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/d0HqiZcQvtTYVZAFmqCY/likes/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(like),
    },
  );

  const data = await response.json();

  return data;
};

export { getLikes, addLike };
