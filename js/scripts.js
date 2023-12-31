const form = document.getElementById("form")
const errorMessages = document.getElementsByClassName("form-field__error")
const inputDay = document.getElementById("day")
const inputMonth = document.getElementById("month")
const inputYear = document.getElementById("year")
const resultDays = document.getElementById("days")
const resultMonths = document.getElementById("months")
const resultYears = document.getElementById("years")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const day = inputDay.value.trim()
  const month = inputMonth.value.trim()
  const year = inputYear.value.trim()
  const birthday = new Date(year, month, day)
  const today = new Date()

  const isValidDay = validateDay(day)
  const isValidMonth = validateMonth(month)
  const isValidYear = validateYear(year)

  if (isValidDay && isValidMonth && isValidYear) {
    clearErrors()
    const diffYears = today.getFullYear() - birthday.getFullYear()
    const diffMonths = today.getMonth() - birthday.getMonth()
    const diffDays = today.getDate() - birthday.getDate()
    resultDays.textContent = diffDays
    resultMonths.textContent = diffMonths
    resultYears.textContent = diffYears
  }
})

function validateDay(day) {
  if (day.length === 0) {
    errorMessages[0].textContent = "Is required."
    inputDay.classList.add("form-field__input--error")
    return false
  }

  if (parseInt(day) < 1 || parseInt(day) > 31) {
    errorMessages[0].textContent = "Is out of the valid range."
    inputDay.classList.add("form-field__input--error")
    return false
  }

  if (!/^\d+$/.test(day)) {
    errorMessages[0].textContent = "It must be a number."
    inputDay.classList.add("form-field__input--error")
    return false
  }

  errorMessages[0].textContent = ""
  inputDay.classList.remove("form-field__input--error")
  return true
}

function validateMonth(month) {
  if (month.length === 0) {
    errorMessages[1].textContent = "Is required."
    inputMonth.classList.add("form-field__input--error")
    return false
  }

  if (parseInt(month) < 1 || parseInt(month) > 12) {
    errorMessages[1].textContent = "Is out of the valid range."
    inputDay.classList.add("form-field__input--error")
    return false
  }

  if (!/^\d+$/.test(month)) {
    errorMessages[1].textContent = "It must be a number."
    inputDay.classList.add("form-field__input--error")
    return false
  }

  errorMessages[1].textContent = ""
  inputMonth.classList.remove("form-field__input--error")
  return true
}

function validateYear(year) {
  if (year.length === 0) {
    errorMessages[2].textContent = "Is required."
    inputYear.classList.add("form-field__input--error")
    return false
  }

  if (parseInt(year) < 1923) {
    errorMessages[2].textContent = "Is out of the valid range."
    inputYear.classList.add("form-field__input--error")
    return false
  }

  if (!/^\d+$/.test(year)) {
    errorMessages[2].textContent = "It must be a number."
    inputDay.classList.add("form-field__input--error")
    return false
  }

  errorMessages[2].textContent = ""
  inputYear.classList.remove("form-field__input--error")
  return true
}

function clearErrors() {
  errorMessages[0].textContent = ""
  errorMessages[1].textContent = ""
  errorMessages[2].textContent = ""
  inputDay.classList.remove("form-field__input--error")
  inputDay.classList.remove("form-field_input--error")
  inputDay.classList.remove("form-field_input--error")
}
