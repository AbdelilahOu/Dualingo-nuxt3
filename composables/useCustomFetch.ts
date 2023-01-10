import useAuth from "./useAuth";

export default <T>(url: string, options: optionsType): Promise<T> => {
  const { getAuthCookie } = useAuth();
  return $fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${getAuthCookie()}`,
    },
  });
};

interface optionsType {
  method: string;
  body?: any;
}
