export const checkCookieExists = cname => !!getCookie(cname);

export const getCookie = (cname) => {
  const decodedCookie = decodeURIComponent(document.cookie);

  return decodedCookie
    .replace(/\s/g, '')
    .split(';')
    .filter(v => v.startsWith(cname))
    .map(v => v.split('=')
      .pop())
    .pop();
};

export const setCookie = (cname, cvalue, exhours) => {
  const d = new Date(new Date().getTime() + exhours * 60 * 1000);
  const expires = `expires=${d.toGMTString()}`;

  document.cookie = `${cname}=${cvalue};${expires}path=/`;
};
