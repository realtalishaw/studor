var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) {window.location.href = "dashboard.html" },
  onResponse: function (error, response) { },
  successTemplate: '<span>Thank you!</span>'
})