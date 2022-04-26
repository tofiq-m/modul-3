let input = document.querySelectorAll('.input');
let currencies = document.querySelectorAll('.currencies');
let curr1 = currencies[0].children;
let curr2 = currencies[1].children;
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let from = document.getElementById("from");
let to = document.getElementById("to");
// STYLING----------------------------------

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
    fetch(`https://api.exchangerate.host/latest?base=${selected1}&symbols=RUB,USD,EUR,GBP`)
        .then(response => response.json())
        .then(data => {        
            if (selected2 == 'RUB') {
                let amount = (input1.value * data.rates.RUB).toFixed(4); 
                input2.value = amount;
                from.innerHTML = `1 ${selected1} = ${ data.rates.RUB} ${selected2}`;
                to.innerHTML = `1 ${selected2} = ${1/ data.rates.RUB} ${selected1}`;
            }
            if (selected2 == 'USD') {
                let amount = (input1.value * data.rates.USD).toFixed(4);
                input2.value = amount;
                from.innerHTML = `1 ${selected1} = ${ data.rates.USD} ${selected2}`;
                to.innerHTML = `1 ${selected2} = ${1/ data.rates.USD} ${selected1}`;
            }
            if (selected2 == 'EUR') {
                let amount = (input1.value * data.rates.EUR).toFixed(4);
                input2.value = amount;
                from.innerHTML = `1 ${selected1} = ${ data.rates.EUR} ${selected2}`;
                to.innerHTML = `1 ${selected2} = ${1/ data.rates.EUR} ${selected1}`;
            }
            if (selected2 == 'GBP') {
                let amount = (input1.value * data.rates.GBP).toFixed(4);
                input2.value = amount;
                from.innerHTML = `1 ${selected1} = ${ data.rates.GBP} ${selected2}`;
                to.innerHTML = `1 ${selected2} = ${1/ data.rates.GBP} ${selected1}`;
            };
        })
        .catch(err => console.error(err));
}  

for (let i = 0; i < curr1.length; i++) {
    curr1[i].addEventListener('click', () => {
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



