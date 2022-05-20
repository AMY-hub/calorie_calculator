import '../styles/main.scss'

const elements = {
    errAlert: document.getElementById('formAlert'),
    genderField: document.querySelector('.form__gender'),
    genderRadio: document.querySelectorAll('[name="gender"]'),
    weight: document.getElementById('inputWeight'),
    height: document.getElementById('inputHeight'),
    age: document.getElementById('inputAge'),
    activity: document.getElementById('selectActivity'),
    calcBtn: document.getElementById('calc'),
    cards: document.querySelector('.main__cards'),
    //RESULT side:
    bmi: document.getElementById('bmi'),
    resultList: document.querySelector('.result__calories'),
    base: document.getElementById('base'),
    norm: document.getElementById('norm'),
    def15: document.getElementById('def15'),
    def20: document.getElementById('def20'),
    recalcBtn: document.getElementById('recalc'),
}

function toggleGender(e) {
    elements.genderField.querySelectorAll('label')
    .forEach( el=> el.classList.remove('active'));
    e.target.closest('label').classList.add('active');
}

function getFormData() {
    const gender = Array.from(elements.genderRadio)
    .find( el => el.checked ).value;
    const weight = +elements.weight.value;
    const height = +elements.height.value;
    const age = +elements.age.value;
    const activity = +elements.activity.value;

    return {
        gender,
        weight,
        height,
        age,
        activity,
    };
}

function showError(err) {
    elements.errAlert.innerText = err;
    elements.errAlert.classList.add('visible');
}

function showResult(result) {
    elements.bmi.innerText = `${result.bmi} - ${result.bmiText}`;
    elements.base.innerText = result.base;
    elements.norm.innerText = result.norm;
    elements.def15.innerText = result.def15;
    elements.def20.innerText = result.def20;
}

function flipCard() {
    hideDetails();
    elements.cards.classList.toggle('flipped');
}

function hideDetails() {
    elements.resultList.querySelectorAll('.details')
    .forEach (el => el.classList.remove('visible') );
    elements.resultList.querySelectorAll('.result__show-more')
    .forEach (el => el.classList.remove('opened') );
}

function clearFields() {
    elements.weight.value = '';
    elements.height.value = '';
    elements.age.value = '';
    elements.errAlert.classList.remove('visible');
}

function showResultDetails(e) {
    const current = e.target.closest('li');
    current.querySelector('.details')
    .classList.toggle('visible');
    current.querySelector('.result__show-more')
    .classList.toggle('opened');
}

export {elements, getFormData, toggleGender, showError, showResult, showResultDetails, flipCard, clearFields,};