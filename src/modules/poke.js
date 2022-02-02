const getPokeList = async (offset, limit = 20) => {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );
  const { results } = await resp.json();
  return results;
};

const getPoke = async (name) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await resp.json();
  return data;
};

const getPokeCount = async () => {
  const list = await getPokeList(0, 2000);
  return list.length;
};

export { getPokeList, getPoke, getPokeCount };
