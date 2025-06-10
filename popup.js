// 🔧 EDIT THIS ARRAY to define your strings
const predefinedStrings = [
  { text:"t130271d@techdata.com", description: "description"},
  { text:"michal.rodziewicz@techdata.com.", description: "description"},
  { text:"Ma**ska(1", description: "description"},
  { text:"31020889", description: "PL external cust"},
  { text:"michal.rodziewicz@gmail.com", description: "PL ext admin login"},
  { text:"michalr90@o2.pl", description: "PL ext user login"}
];

const container = document.getElementById('container');

predefinedStrings.forEach(({ text, description }) => {
  const row = document.createElement('div');
  row.className = 'row';

  const mainText = document.createElement('div');
  mainText.className = 'main-text';
  mainText.textContent = text;
  mainText.addEventListener('click', () => {
    navigator.clipboard.writeText(text).then(() => {
      row.style.backgroundColor = '#a0e7a0';
      setTimeout(() => row.style.backgroundColor = '', 1000);
    });
  });

  const desc = document.createElement('div');
  desc.className = 'description';
  desc.textContent = description;

  row.appendChild(mainText);
  row.appendChild(desc);
  container.appendChild(row);
});

