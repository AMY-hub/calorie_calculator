function validateFormData(data) {
    let error = ``;

    for ( let key in data ) {
        if ( !data[key] ) {
            error = `Заполните все поля!`;
        }
    }

    if ( +data.weight < 10 || +data.weight > 640 
        || +data.height < 50 || +data.height > 290 ) {
        error += error? 
        `\nВведите корректные данные.` 
        : `Введите корректные данные.`;
        }
    
    if ( +data.age < 14 || +data.age > 80 ) {
        error += error? 
        `\nРасчеты актуальны только для лиц в возрасте от 13 до 80 лет.` 
        : `Расчеты актуальны только для лиц в возрасте от 13 до 80 лет.`;
    }

    if ( error ) throw new Error(error);
 
    return true;
}

function calcResults(data) {
    const {gender, weight, height, age, activity } = data;

    const bmi = Math.round( weight / ( ( height / 100 )**2 ) );

    let base =  (10 * weight + 6.25 * height - 5 * age);
    if (gender === 'woman') {
        base -= 161;
    } else {
        base += 5;
    }

    const norm = base * activity;
    const def20 = norm * 0.8;
    const def15 = norm * 0.85;

    return {
        bmi: bmi,
        bmiText: rangeBMI(bmi),
        base: Math.round(base),
        norm: Math.round(norm),
        def15: Math.round(def15),
        def20: Math.round(def20),
    }
}

function rangeBMI(bmi) {
    let BMImeaning;

    switch(true) {
        case ( bmi < 18.5 ): BMImeaning = 'Дефицит веса';
        break;
        case ( bmi >= 18.5 && bmi < 25 ): BMImeaning = 'Норма';
        break;
        case ( bmi >= 25 && bmi < 30 ): BMImeaning = 'Избыточный вес';
        break;
        case ( bmi >= 30 && bmi < 35 ): BMImeaning = 'Ожирение I ст.';
        break;
        case ( bmi >= 35 && bmi < 40 ): BMImeaning = 'Ожирение II ст.';
        break;
        case ( bmi >= 40 ): BMImeaning = 'Ожирение III ст.';
    }
    return BMImeaning;
}

export {validateFormData, calcResults};