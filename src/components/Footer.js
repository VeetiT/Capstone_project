import React from "react";

function Footer() {
  return (
    <footer>
      <section>
        <p>Logo</p>
      </section>

      <section>
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </section>

      <section>
        <h3>Contact</h3>
        <p>Contact information</p>
      </section>

      <section>
        <h3>Social Media</h3>
        <ul>
          <li><a href="/">Social link</a></li>
          <li><a href="/">Social link</a></li>
          <li><a href="/">Social link</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;