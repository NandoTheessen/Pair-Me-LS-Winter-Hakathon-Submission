import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-cta">
            <h3>Interested in supporting our app? Let’s talk:</h3>
            <form>
              <input
                type="text"
                name="input-email"
                placeholder="Please enter email!"
              />
            </form>

            <h5>We'll never share your email with anyone else.</h5>
          </div>
          <div className="address">
            <h3>New York</h3>
            <h5>
              <p>123 Lane</p>
              <p>Suite 100</p>
              <p>Albany, NY 12345</p>
              <p>202 555 0144</p>
            </h5>
          </div>

          <div className="address">
            <h3>Florida</h3>
            <h5>
              <p>Ocean Drive</p>
              <p>Suite 201</p>
              <p>Orlando, FL 22345</p>
              <p>502 555 0144</p>
            </h5>
          </div>

          <div className="address">
            <h3>California</h3>
            <h5>
              <p>Suite 105</p>
              <p>San Diego, CA 22345</p>
              <p>702 555 0144</p>
              <p>Mountain Street</p>
            </h5>
          </div>
        </div>
        <div className="footer-copyright">Copyright © 2019 PairMe </div>
      </footer>
    </>
  )
}

export default withRouter(Footer)
