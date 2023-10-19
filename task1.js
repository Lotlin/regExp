export const array = [
  'module.jsx', 'index.html', 'style.css',
  'index.js', 'file.ts', 'library.css', 'my.plugin.js',
];

export const getFilteredArray = (array) => {
  const regExp = /\.+(jsx?|ts)$/;
  const filteredArr = [];

  array.forEach(element => {
    if (regExp.test(element)) {
      filteredArr.push(element);
    }
  });

  return `нужные файлы: ${filteredArr}`;
};
