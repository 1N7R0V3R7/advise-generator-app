const adviceBody = document.getElementById('advice-body');
const adviceId = document.getElementById('advice-id');

const getAdvice = async() => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json()
    return data;
}
getAdvice().then(data => console.log(data));

const updateAdvice = () => {
    getAdvice().then(data =>{
        adviceId.textContent = data.slip.id;
        adviceBody.textContent = data.slip.advice;
    });
}
