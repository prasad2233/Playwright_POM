const LoginPageLocaters = {
    userName: `//input[@placeholder="Username"]`,
    password: `//input[@placeholder="Password"]`,
    LoginButton: `//span[text()="Login"]`,
    firstName: `//input[@placeholder="First name"]`,
    lastName: `//input[@placeholder="Last Name"]`,
    regUserName: `//input[@placeholder="User name"]`,
    confirmPassword: `//input[@placeholder="Confirm Password"]`,
    gender: (value) => `//input[@type="radio" and @value="${value}"]`,
    registerButton: `//span[normalize-space()='Register']`

};
export default LoginPageLocaters;