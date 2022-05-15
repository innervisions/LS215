let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(band => {
    return {
      name: processName(band['name']),
      country: 'Canada',
      active: band['active']
    };
  });
}

function processName(name) {
  let words = name.replace('.', '').split(' ');
  return words.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
