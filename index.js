
let btn  = document.getElementById("btn");
let user = document.getElementById('userID');


async function fetchuser(username) {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let result = await response.json();
   document.getElementById(`userProfile`).innerHTML = `<div class="userInfo">
                    <img src=${result.avatar_url} class="userImg" alt="">
                    <div class="userDetail">
                        <p class="userName">${result.name}</p>
                        <p class="userBio">${result.bio}</p>
                    </div>
                </div>
                <div class="userFollow">
                    <div class="Follower">
                        <div class="repo">
                            <p>Follower</p>
                            <p>${result.follower}</p>
                        </div>
                        <div class="repo">
                            <p>Following</p>
                            <p>${result.following}</p>
                        </div>
                        <div class="repo">
                            <p>Repo</p>
                            <p>${result.public_repos}</p>
                        </div>
                    </div>
                    <div class="VisitProile">
                        Visit Profile
                    </div>
                </div>`
}


btn = btn.addEventListener('click',() =>{
    let userid = user.value;
    fetchuser(userid);
 });