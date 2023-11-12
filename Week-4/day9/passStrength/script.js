function isStrongPassword(password) {
  return password.length >= 8 && !password.toLowerCase().includes("password") && /[A-Z]/.test(password)
}