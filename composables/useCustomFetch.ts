export default (url: string, options: optionsType) => {
  return $fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer `,
    },
  });
};

interface optionsType {
  method: string;
  body?: any;
}
