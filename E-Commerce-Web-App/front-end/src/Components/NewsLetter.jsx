import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="news-letter">
      <h1>Get Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email Id"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
