let input = document.querySelectorAll('.input');
let currencies = document.querySelectorAll('.currencies');
let curr1 = currencies[0].children;
let curr2 = currencies[1].children;


// STYLING--------------------------------

for (let i = 0; i < curr1.length; i++) {
    curr1[i].addEventListener('click', () => {
        for (let j = 0; j < curr1.length; j++) {
            curr1[j].style.backgroundColor = '#fff';
            curr1[j].style.color = 'var(--clr-primary)';
        }
        curr1[i].style.backgroundColor = 'var(--clr-secondary)';
        curr1[i].style.color = '#fff';
    });
};

for (let i = 0; i < curr2.length; i++) {
    curr2[i].addEventListener('click', () => {
        for (let j = 0; j < curr2.length; j++) {
            curr2[j].style.backgroundColor = '#fff';
            curr2[j].style.color = 'var(--clr-primary)';
        }
        curr2[i].style.backgroundColor = 'var(--clr-secondary)';
        curr2[i].style.color = '#fff';
    });
};

//FUNTIONALITY--------------------------------------

function getData() {
    let selected1 = document.querySelector('.selected1').innerHTML;
    let selected2 = document.querySelector('.selected2').innerHTML;
    fetch(`https://api.exchangerate.host/latest?base=${selected1}&symbols=${selected2}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err));
}

for (let i = 0; i < curr1.length; i++) {
    curr1[i].addEventListener('click', () => {
        // console.log(curr1[i].classList.contains("selected1"));
        if (!(curr1[i].classList.contains("selected1"))) {
            for (let j = 0; j < curr1.length; j++) {
                curr1[j].classList.remove('selected1');
            }
            curr1[i].classList.add('selected1');
        }
        getData();
    });
}
// Adding selected 2

for (let i = 0; i < curr2.length; i++) {
    curr2[i].addEventListener('click', () => {
        if (!(curr2[i].classList.contains("selected2"))) {
            for (let j = 0; j < curr1.length; j++) {
                curr2[j].classList.remove('selected2');
            }
            curr2[i].classList.add('selected2');
        }
        getData();
    });
}



