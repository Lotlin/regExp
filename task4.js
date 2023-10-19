export const urlStr = `какой-то текст http://site.ru 133 снова текст`;

export const replaceUrlTag = (str) => {
  const regExp = /https?:\/\/[\w]{1,}\.[a-z]{2,3}/g;
  const regFindDomain = /[\w]{1,}\.[a-z]{2,3}/;
  const sopeningTag = `<a href="`;
  const closingTag = '</a>';
  let newStr = '';

  if (str.match(regExp)) {
    const url = str.match(regExp);
    const domain = str.match(regFindDomain);
    const tag = `${sopeningTag}${url}">${domain}${closingTag}`;
    newStr = str.replace(regExp, tag);
  }

  return `В строке url заменён на тег: ${newStr}`;
};
