const form = document.querySelector('.form-validation');
if (form) { //чтобы работало только на нужных страницах, т.е. только там, где есть такой элемент

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const fields = form.querySelectorAll('.need-validate');
    const selectFieldCurrent = form.querySelector('.nice-select span.current ');

    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    function checkValidate(fields) {
        // return (!field.classList.contains('has-error'));

        let errors = [];
        fields.forEach(function (item) {
            if (item.classList.contains('has-error')) {
                errors.push(item.index);
            }
        })

        return (!errors.length > 0);
    }

    function checkEmail(field) {
        if (isEmailValid(field.value)) {
            field.classList.remove('has-error');
        } else {
            field.classList.add('has-error');
        }
    }

    function checkTel(field) {
        if (field.value.length === 17) {
            field.classList.remove('has-error');
        } else {
            field.classList.add('has-error');
        }
    }

    function checkSelect() {
        //немножечко колхоза, т.к. селект у нас осообенный
        if (selectFieldCurrent.innerHTML === 'Выбрать') {
            selectFieldCurrent.parentElement.classList.add('has-error');
        } else {
            selectFieldCurrent.parentElement.classList.remove('has-error');
        }
    }

    function checkEmpty(field) {
        if (field.value) {
            field.classList.remove('has-error');
        } else {
            field.classList.add('has-error');
        }
    }

    //live check
    const observer = new MutationObserver(() => {
        checkSelect();
    });
    observer.observe(selectFieldCurrent, {subtree: true, childList: true});

    fields.forEach(function (item) {
        item.addEventListener('keyup', function () {
            checkEmpty(item);

            if (item.classList.contains('field-email')) {
                checkEmail(item);
            }

            if (item.classList.contains('field-tel')) {
                checkTel(item);
            }

        });
    });

    //onsubmit check
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let errors = [];

        fields.forEach(function (item) {
            checkEmpty(item);

            if (item.classList.contains('field-email')) {
                checkEmail(item);
            }

            if (item.classList.contains('field-tel')) {
                checkTel(item);
            }

            checkSelect();

        });

        //if all fields ok - fires submit
        if (checkValidate(fields)) {
            form.submit();
        }
    });

}