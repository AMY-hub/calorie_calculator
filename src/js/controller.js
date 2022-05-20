import { validateFormData, calcResults } from './model';
import {elements, getFormData, toggleGender, showError, showResult, showResultDetails, flipCard, clearFields} from './view'

elements.genderField.addEventListener('click', toggleGender);
elements.calcBtn.addEventListener('click', handleFormData);
elements.recalcBtn.addEventListener('click', flipCard)
elements.resultList.addEventListener('click', showResultDetails);

[ elements.weight, elements.height, elements.age ].forEach( el => {
    el.addEventListener('keydown', onChangeNumberField);
});

function onChangeNumberField(e) {
    const intRx = /\d/;    
    if ( e.key ==='Tab' 
    || e.key === 'ArrowLeft'
    || e.key === 'ArrowRight'
    || e.key ==='Backspace' 
    || e.key ==='Delete' 
    || intRx.test(e.key) ) return;
    e.preventDefault();
}

function handleFormData(e) {
    e.preventDefault();
    const data = getFormData();
    console.log(data);
    
    try {
        validateFormData(data);
    } catch(err) {
        showError(err.message);
        return null;
    }

    const result = calcResults(data);
    showResult(result);
    flipCard();
    clearFields();
}

