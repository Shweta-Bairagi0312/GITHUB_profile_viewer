let btn  = document.getElementById("btn");
let user = document.getElementById('userID');
let userProfileDiv = document.getElementById("userProfile");

async function fetchuser(username) {
    userProfileDiv.innerHTML = `<div class="loader"></div>`; // show loader

    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error("User not found");
        let result = await response.json();

        userProfileDiv.innerHTML = `
            <div class="userInfo">
                <img src="${result.avatar_url}" class="userImg" alt="${result.name}">
                <div class="userDetail">
                    <p class="userName">${result.name || "No Name"}</p>
                    <p class="userBio">${result.bio || "No Bio available"}</p>
                </div>
            </div>
            <div class="userFollow">
                <div class="Follower">
                    <div class="repo">
                        <p>Followers</p>
                        <p>${result.followers}</p>
                    </div>
                    <div class="repo">
                     <p>Following</p>
                        <p>${result.following}</p>
                    </div>
                    <div class="repo">
                        <p>Repos</p>
                        <p>${result.public_repos}</p>
                    </div>
                </div>
                <a href="${result.html_url}" target="_blank" class="VisitProfile">
                    Visit Profile
                </a>
            </div>`;
    } catch (err) {
        userProfileDiv.innerHTML = `<p style="color:red; text-align:center;">User not found!</p>`;
    }
}

btn.addEventListener('click', () => {
    let userid = user.value.trim();
    if(userid) fetchuser(userid);
});
