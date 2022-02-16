class Validator {
    isEmail(str) {
        const regExp = /[a-zA-Z_\d\.-]+@[a-zA-Z_\-]+(\.[a-zA-Z]+){1,6}/;
        return regExp.test(str);
    }
    isDomain(str) {
        const regExp = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
        return regExp.test(str);
    }
    isDate(str) {
        return !isNaN(Date.parse(str));
    }
    isPhone(str) {
        const regExp = /^\+?(\d{1,3})?[\s]*[- .]?[\s]*\(?(?:\d{2,3})\)?([\s]*[- .]?[\s]*\d{2,4}){2,4}$/;
        return regExp.test(str);
    }
}

class ValidatorStatic {
    static isEmail(str) {
        const regExp = /[a-zA-Z_\d\.-]+@[a-zA-Z_\-]+(\.[a-zA-Z]+){1,6}/;
        return regExp.test(str);
    }
    static isDomain(str) {
        const regExp = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
        return regExp.test(str);
    }
    static isDate(str) {

        return !isNaN(Date.parse(str));


    }
    static isPhone(str) {
        const regExp = /^\+?(\d{1,3})?[\s]*[- .]?[\s]*\(?(?:\d{2,3})\)?([\s]*[- .]?[\s]*\d{2,4}){2,4}$/;
        return regExp.test(str);
    }
}


var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67')); //тут используем формат своей страны

//а статическая так
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны