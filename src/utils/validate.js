export const validateInput = (password) => {
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isPasswordValid) {
    return "make a strong password";
  }
  return null;
};
