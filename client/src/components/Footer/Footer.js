import React from "react";

import "./styles.css";

function Footer() {
  return (
    <div id="footer" className="container">
      <div className="footer-text">
        <p>
          Copyright © 2021 bubbleCode. Designated trademarks and brands are the
          property of their respective owners. Use of this Web site constitutes
          acceptance of the bubbleCode Privacy Policy.
        </p>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <a href="/information/privacy-policy.aspx">Privacy</a>
          </li>
          <li>
            <a href="/information/terms-and-conditions.aspx">
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a href="/information/help-and-faqs.aspx">Help &amp; FAQs</a>
          </li>
          <li>
            <a href="/information/fast-delivery.aspx">Fast Delivery</a>
          </li>
          <li>
            <a href="http://www.prodirectcareers.com/">Careers</a>
          </li>
          <li>
            <a href="/information/contact-us.aspx">Customer Service</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
