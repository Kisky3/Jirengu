function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

$('header .login').onclick = function (e) {
  e.stopPropagation();
  $('.flip-modal').style.display = 'block';
};

$('.flip-modal').addEventListener('click', function (e) {
  e.stopPropagation();
  if (e.target.classList.contains('login')) {
    $('.flip-modal').classList.remove('register');
    $('.flip-modal').classList.add('login');
  }
  if (e.target.classList.contains('register')) {
    $('.flip-modal').classList.add('register');
    $('.flip-modal').classList.remove('login');
  }
  if (e.target.classList.contains('close')) {
    $('.flip-modal').style.display = 'none';
  }
});

document.addEventListener('click', function () {
  $('.flip-modal').style.display = 'none';
});
$('.modal-login form').addEventListener('submit', function (e) {
  e.preventDefault();
  if (!/^\w{3,8}$/.test($('.modal-login input[name=username]').value)) {
    $('.modal-login .errormsg').innerText = '用户名需要输入3-8个字符，包括字母数字和下划线';
    return false;
  }
  if (!/^\w{6,10}$/.test($('.modal-login input[name=password]').value)) {
    $('.modal-login .errormsg').innerText = '密码需要输入6-10个字符，包括字母数字和下划线';
    return false;
  }
  this.submit();
});

$('.modal-register form').addEventListener('submit', function (e) {
  e.preventDefault();
  if (!/^\w{3,8}$/.test($('.modal-register input[name=username]').value)) {
    $('.modal-register .errormsg').innerText = '用户名需要输入3-8个字符，包括字母数字和下划线';
    return false;
  }
  if (!/^\w{6,10}$/.test($('.modal-register input[name=password]').value)) {
    $('.modal-register .errormsg').innerText = '密码需要输入6-10个字符，包括字母数字和下划线';
    return false;
  }
  if ($('.modal-register input[name = password]').value != $('.modal-register input[name = password2]').value) {
    $('.modal-register .errormsg').innerText = '两次密码输入不一致';
    return false;
  }
  this.submit();
});