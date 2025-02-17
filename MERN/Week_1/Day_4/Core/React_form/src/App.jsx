import { useState } from 'react';
import "./App.css"

function App() {
  const [personList, setPersonList] = useState([]);


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorFirstName, seterrorFirstName] = useState("");
  const [errorLastName, seterrorLastName] = useState("");
  const [errorEmail, seterrorEmail] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [errorConfirmPassword, seterrorConfirmPassword] = useState("");


  const handleFirstNameChange = (e) => {
    const fName = e.target.value;
    setFirstName(fName);
    if (fName.length <= 2) {
      seterrorFirstName("First name needs to be more than 2 characters");
    } else {
      seterrorFirstName("");
    }
  };


  const handleLastNameChange = (e) => {
    const lName = e.target.value;
    setLastName(lName);
    if (lName.length <= 2) {
      seterrorLastName("Last name needs to be more than 2 characters");
    } else {
      seterrorLastName("");
    }
  };


  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      seterrorEmail("Invalid email format");
    } else if (emailValue.length < 8) {
      seterrorEmail("Email needs to be more than 8 characters");
    } else {
      seterrorEmail("");
    }
  };


  const handlePasswordChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    if (pass.length < 8) {
      seterrorPassword("Password needs to be more than 8 characters");
    } else {
      seterrorPassword("");
    }
  };


  const handleConfirmPasswordChange = (e) => {
    const confirmPass = e.target.value;
    setConfirmPassword(confirmPass);
    if (confirmPass !== password) {
      seterrorConfirmPassword("Confirm password does not match");
    } else {
      seterrorConfirmPassword("");
    }
  };


  const submitHandler = (e) => {
    e.preventDefault();


    if (
      errorFirstName || errorLastName || errorEmail ||
      errorPassword || errorConfirmPassword ||
      !firstName || !lastName || !email || !password || !confirmPassword
    ) {
      alert("Please fix the errors before submitting!");
      return;
    }


    setPersonList((prev) => [
      ...prev,
      { firstName, lastName, email, password }
    ]);


    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      
      <form onSubmit={submitHandler}>
        <div className="inputContainer">
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            onChange={handleFirstNameChange}
            id="firstName"
            type="text"
          />
          <p className="error">{errorFirstName}</p>
        </div>

        <div className="inputContainer">
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastName}
            onChange={handleLastNameChange}
            id="lastName"
            type="text"
          />
          <p className="error">{errorLastName}</p>
        </div>

        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            id="email"
            type="email"
          />
          <p className="error">{errorEmail}</p>
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            id="password"
            type="password"
          />
          <p className="error">{errorPassword}</p>
        </div>

        <div className="inputContainer">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            id="confirmPassword"
            type="password"
          />
          <p className="error">{errorConfirmPassword}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
