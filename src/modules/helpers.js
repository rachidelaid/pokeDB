export default (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const newDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};
