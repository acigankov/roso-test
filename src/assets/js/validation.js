const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const form = document.querySelector('.form-validation');
const fields = form.querySelectorAll('.need-validate');
const emailName = form.querySelector('.field-name');
const emailField = form.querySelector('.field-email');
const telField = form.querySelector('.field-tel');
const selectFieldCurrent = form.querySelector('.nice-select span.current ');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function checkValidate(field) {
    return (!field.classList.contains('has-error'));
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let errors = [];

    fields.forEach(function (item) {
        // if(!item.value)  {
        //     item.classList.add('has-error');
        // }

        if (item.classList.contains('field-name') || item.classList.contains('field-comment') || item.classList.contains('field-ddu')) {
            if(item.value.length <= 2)  {
                item.classList.add('has-error');
            }
        }

        if(item.classList.contains('field-email')) {
            if(!isEmailValid(item.value))  {
                item.classList.add('has-error');
            }
        }

        if(item.classList.contains('field-tel')) {
            if (item.value.length !== 17) {
                item.classList.add('has-error');
            }
        }

        //немножечко колхоза, т.к. селект у нас осообенный
        if(item.classList.contains('field-select')) {
            if(selectFieldCurrent.value === 'Выбрать') {
                item.classList.add('has-error');
            }
        }
    });

    if(checkValidate(emailName) && checkValidate(emailField) && checkValidate(telField)) {
        form.submit();
    }
});


fields.forEach(function (item) {
    item.addEventListener('keyup', function () {
        if(item.classList.contains('field-name')) {
            if(item.value.length >= 2)  {
                item.classList.remove('has-error');
            }
        }

        if(item.classList.contains('field-email')) {
            if(isEmailValid(item.value))  {
                item.classList.remove('has-error');
            }
        }

        if(item.classList.contains('field-tel')) {
            if (item.value.length === 17) {
                item.classList.remove('has-error');
            }
        }

    });
});

