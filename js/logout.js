const alertKonfirmasiLogout = new bootstrap.Modal('#alert-konfirmasi-logout', {
  keyboard: true,
})

const logout = document.querySelector('.logout')
logout.addEventListener('click', (event) => {
  event.stopPropagation()
  alertKonfirmasiLogout.show()
})

const btnKonfirmasiYa = document.querySelector('.btn-konfirmasi-ya')
const alertLogoutSukses = new bootstrap.Modal('#alert-logout-sukses', {
  keyboard: true,
})

btnKonfirmasiYa.addEventListener('click', () => {
  alertKonfirmasiLogout.hide()
  alertLogoutSukses.show()

  setTimeout(() => {
    window.location.href = 'login.html'
  }, 5000)
})
