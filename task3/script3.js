const url = 'https://jsonplaceholder.typicode.com/users';
const result = document.querySelector('.users');

function getRandomId() {
    const randomId = [];
    randomId.push(Math.floor(Math.random() * 10) + 1);
    randomId.push(Math.floor(Math.random() * 10) + 1);
    while (randomId[0] === randomId[1]) {
        randomId[1] = Math.floor(Math.random() * 10) + 1;
    }
    return randomId;
}


fetch(url)
    .then(response => response.json())
    .then(json => {
        const randomId = getRandomId();
        const newArrayUsers = json.filter(elem => !randomId.includes(elem.id)).map(elem => `${elem.name + ' ' + elem.username}`);
        result.textContent = `[${newArrayUsers.map(user => " '" + user + "'")}]`;
    })




