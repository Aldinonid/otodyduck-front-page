import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  const year = new Date();
  return (
    <Fade>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <IconText />
              <p className="brand-tagline">
                We provide all course that will make you greater than you past.
              </p>
            </div>

            <div className="col-2 mr-5">
              <h4 className="mt-2">For Beginners</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/class">
                    Classes
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/journey">
                    Packet Learning
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/faq">
                    FAQ
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-2 mr-5">
              <h4 className="mt-2">Contact Us</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="mailto:aldino.efendi7@gmail.com"
                  >
                    aldino.efendi7@gmail.com
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button isExternal type="link" href="tel:+6281234567890">
                    0812 - 3456 - 7890
                  </Button>
                </li>
                <li className="list-group-item">
                  <span>Batam, Indonesia</span>
                </li>
              </ul>
            </div>

            <div className="col-3">
              <h4 className="mt-2">Connect Us</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col text-center copyrights">
              © {year.getFullYear()} • All rights reserved • Otodyduck
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
