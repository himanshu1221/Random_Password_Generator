document.querySelector('button').addEventListener('click', Create)
const URL = "https://passwordinator.onrender.com?num=true&char=true&caps=true&len=18"

async function Create() {
    await fetch(URL).then(response => response.json()).then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.data
    }).catch(err => {
        console.log('error', err)
    })
}