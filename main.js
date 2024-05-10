document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repository = document.querySelector('#repository');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const linkProfile = document.querySelector('#linkProfile');

    fetch('https://api.github.com/users/JoaoVictorBarbieri').then(function(resposta){
        return resposta.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = json.login;
        repository.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        linkProfile.href = json.html_url;
    })
})