function valid(formInput) {
    var _name=formInput.nameUser.value;
    var _email=formInput.email.value;
    var _pass=formInput.password1.value;
    var _repass=formInput.rePassword.value;

    var adr_pattern =/[0-9a-z_.]+@[0-9a-z_]+\.[a-z]{2,5}/i;

    if (_name == '') {
        document.getElementById('nameErr').innerText = 'Введіть імя.';
        return;
    }
    else {
        document.getElementById('nameErr').innerText = '';
    }

    if (!adr_pattern.test(_email)) {
        document.getElementById('emailErr').innerText = 'Введіть електронну пошту.';
        return;
    }
    else {
        document.getElementById('emailErr').innerText = '';
    }

    if (_pass == '') {
        document.getElementById('passErr').innerText = 'Введіть пароль.';
        return;
    }
    else {
        document.getElementById('passErr').innerText = '';
    }

    if (_repass != _pass) {
        document.getElementById('rePassErr').innerText = 'Паролі не збігаються.';
        return;
    }
    else {
        document.getElementById('rePassErr').innerText = '';
        window.location = "https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin";

    }
}