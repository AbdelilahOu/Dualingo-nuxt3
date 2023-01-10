export default () => {
  const AuthCookie = useCookie<String>("auth", {
    expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  });

  const setAuthCookie = (token: string) => (AuthCookie.value = token);
  const getAuthCookie = () => AuthCookie.value;

  return { setAuthCookie, getAuthCookie };
};
