import React from "react";

export default function Register() {
  return (
    <>
      <div>
        <form>
          <h1>Sign Up</h1>
          <label htmlFor="">Username</label>
          <input type="text" name="username" />
          <br />
          <label htmlFor="">Email</label>
          <input type="email" name="email" />
          <br />
          <label htmlFor="">Password</label>
          <input type="password" name="password" />
          <br />
          <label htmlFor="">Address</label>
          <input type="text" name="address" />
          <br />
          <button>Register</button>
        </form>
      </div>
    </>
  );
}
