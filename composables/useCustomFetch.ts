export default <T>(url: string, options: optionsType): Promise<T> => {
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
