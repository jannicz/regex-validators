/*
 * Returns true if number contains valid digital place separator
 */
function isValidFloat(number) {
  return /^[+-]?\d+[.,]?\d*$/.test(number);
}
/*
 * Returns true if username
 * - has no leading/trailing whitespace
 * - starts with alphanumeric character ^[0-9a-zA-Z]
 * - has a min-length of 3 and max-length of 30 ^[]{2,30}
 * - can contain '.-_ ' except as first character
 */
function isUsernameString(username) {
  if (!username || username.trim().length !== username.length)
		return false;
  return /^[0-9a-zA-Z](\w|\d|\s|[._\-]){2,30}$/i.test(username);
}

/*
 * Returns true if
 * - contains at least one alphabetic character (?=.*[a-zA-Z])
 * - contains at least one digit (?=.*\d) or a non-alphabetic character [^a-zA-Z]
 * - is beetween 5 and 50 characters long {5,50}
 * - can contain anything else (.) if rules 1-3 apply
 */
function isPasswordComplex(password) {
  if (!password)
		return false;
  return /((?=.*(\d|([^a-zA-Z])))(?=.*[a-zA-Z]).{5,50})/.test(password);
}

/*
 * Returns true if email matches pattern x@y.z where:
 * x, y: alphabetic characters, numbers and characters (._%+-), min-length is 1
 * z: only alphabetic characters, min-length is 2
 */
function isEmailValid(email) {
  if (!email)
		return false;
  return /^[A-Za-z0-9]{1,}[A-Za-z0-9_%+-.]*@[A-Za-z0-9]{1,}[A-Za-z0-9_\-]*[A-Za-z0-9]{1}(\.([A-Za-z0-9]{1,}[A-Za-z0-9_-]{2,}[A-Za-z0-9]*))*\.[A-Za-z0-9]{2,}$/.test(email);
}

/*
 * Returns true if birthday is between max and min, tests plausibility
 */
function isBirthdayValid(day, month, year) {
  var birthday = new Date(year, month - 1, day),
      date = new Date(),
      diff = date - birthday,
      maxAge = 120 * 365.25 * 24 * 60 * 60 * 1000, // 120 years
      underAge = 18 * 365.25 * 24 * 60 * 60 * 1000; // 18 years
     
  if (day > 0 && day < 32 && month > 0 && month < 13 && diff > underAge && diff < maxAge) {
    return true;
  }
  return false;
}

/*
 * Returns true if date format
 * - matches iso format, i.e. 2015-08-30
 * - matches german DIN, i.e. 30.08.2015
 */
function isDateValid(date) {
  if (!date)
		return false;
  return /^([0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4})$|^([0-9]{4}-[0-9]{2}-[0-9]{2})$/gm.test(date);
}
