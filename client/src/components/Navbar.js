import React from 'react'

const Navbar = props => {
  return (
    <div>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <p className="navbar-item logo is-uppercase">BioMed Sanity</p>
            <p className="navbar-item subheading">Built in spare time by @karpathy following biorxiv and my older project arxiv-sanity to help with influx of papers on COVID-19, 
            currently indexing {props.len} papers.</p>
          </div>

        </div>
      </nav>
    </div>
  )
};

export default Navbar;