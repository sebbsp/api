// https://randomuser.me/api/?results=25
const ul = document.getElementById('users'); // Get the list where we will place our authors
const url = 'https://randomuser.me/api/?results=1';

    fetch(url)
    .then (response => response.json())
    .then (data => {
        
        let users = data.results;
        return users.map( user => {
            console.log(user);
            document.getElementById('pic').src = user.picture.large;
            document.getElementById('name').innerHTML = `${user.name.first} ${user.name.last}`;
            document.getElementById('username').innerHTML = `Username: ${user.login.username}`;
            document.getElementById('email').innerHTML = `Email: ${user.email}`;
        })
    })
    .catch(err => {
        console.log('Error API')
    })
    document.getElementById('refresh').onclick = randomizer => {location.reload()}


     

    