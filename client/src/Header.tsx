import React from "react";

function Header(){
  return (
  <header className="page-header">
    <a href="/en-US/" className="logo" aria-label="MDN Web Docs">       
      <button type="button" className="ghost main-menu-toggle" aria-haspopup="true" aria-label="Show Menu"></button>
      <div className="page-header-main ">
        <nav className="main-nav" aria-label="Main menu"></nav>
          <div className="header-search">
            <form action="/en-US/search" className="search-form" role="search">
              <label htmlFor="main-q" className="visually-hidden">Search MDN</label>
              <input type="search" name="q" id="main-q" className="search-input-field" placeholder="Search MDN" pattern="(.|\s)*\S(.|\s)*"/>
              <input type="submit" className="ghost search-button" aria-label="Search" value=""/>
            </form>
          </div>
          <div className="auth-container">
            <a href="/en-US/users/account/signup-landing?next=%2Fen-US%2Fdocs%2FWeb%2FJavaScript" rel="nofollow" className="signin-link">Sign in</a>
          </div>
        </div>
      </a>
    </header>
  )
};

export default Header;