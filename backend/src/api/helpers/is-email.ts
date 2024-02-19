export function isEmail(email: string): boolean {
  // INFO: Basic email validation, don't want to install a lib only for that.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}
