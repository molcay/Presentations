import React from 'react';

export default () => {
  return (
    <>
      <p>Thank you for your attention</p>
      <hr />

      <span className="firstname">Muhammed</span> <span className="middlename">Olcay</span> <span className="lastname">TERCANLI</span>
      <span className="footnote">
        <a href="http://github.com/molcay"><span className="github-icon"><i className="fab fa-github"></i></span> molcay </a><br />
        <a href="mailto:molcay@mail.com"><span className="email-icon"><i className="fa fa-envelope" aria-hidden="true"></i></span> molcay@mail.com</a>
      </span>
    </>
  )
};