import React from 'react';

import formIllustration from './images/form_illustration.png';

export const RegisterForm = () => (
  <div className="signup-form-wrapper">
    <div className="signup-form-div">
      <h2>Join us for the third edition of GraphQL Asia!</h2>
      <p>24th &amp; 25th Feb | Online | Free </p>
      <form>
        <input type="email" placeholder="Your email adress" />
        <button type="submit">Register</button>
      </form>
    </div>
    <img src={formIllustration} alt="gqla-illustration" />
  </div>
);
