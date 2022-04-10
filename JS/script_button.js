function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const btn = document.getElementById('button');
const div = document.getElementById('div');

btn.onclick = function() {
    div.innerHTML = Random(-100, 100);
}
