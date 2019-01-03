import React from 'react';

export default () => {
  return (
    <div className="flex flex-column items-start">
      <div className="pv1">
        M. Olcay TERCANLI
      </div>
      <div className="pv1">
        <a href="mailto:olcay.tercanli@linovi.com">
          <span className="footnote-icon"><i className="fa fa-envelope" aria-hidden="true"></i></span> olcay.tercanli@linovi.com
        </a>
      </div>
      <div className="pv1">
        <a href="http://github.com/molcay"><span className="footnote-icon"><i className="fab fa-github"></i></span>/molcay </a>
        <a href="http://gitlab.com/molcay"><span className="footnote-icon"><i className="fab fa-gitlab"></i></span>/molcay </a>
      </div>
    </div>
  )
}