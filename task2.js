export const str = `
слова info@methed.ru max24@mail.com java_script@google.io /n
my-mail@yandex.ru tom_yam@ya.ru zero@mai1.xyz впыпыап
`;


export const findEmail = (str) => {
  const regExp = /^\w+@[a-z]{3,}\.[a-z]{2,5}/i;
  const separetedMails = str.split(' ');
  const validMails = [];
  separetedMails.forEach(elem => {
    if (regExp.exec(elem)) {
      validMails.push(elem);
    }
  });

  return `в строке есть валидные email: ${validMails}`;
};
