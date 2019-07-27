function loginFetch(req){
    return fetch('http://localhost:9000/api/login', {
        method: "POST",
        //mode: "no-cors",
        cache: "no-cache",
        //credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        //redirect: "follow",
        //referrer: "no-referrer",
        body: JSON.stringify(req)

    }).then(res => console.log(res))
}

function login(){
    loginFetch({id: 1, passWord: "xxxx", hash: "hf3857oty9whg"})
}

function badReqLogin(){
    loginFetch({id: 1, x: 2, y:3})
}

window.onload = () => {
    const loginBtn = document.getElementById('login');
    const badReqLoginBtn = document.getElementById('login_badreq');
    console.log(loginBtn, badReqLoginBtn)

    loginBtn.addEventListener('click', () => login());
    badReqLoginBtn.addEventListener('click', () => badReqLogin());
    
}
