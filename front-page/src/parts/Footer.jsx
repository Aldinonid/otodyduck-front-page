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
                We kaboom your beauty holiday instantly and memorable.
              </p>
            </div>

            <div className="col-2 mr-5">
              <h4 className="mt-2">For Beginners</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/all-class">
                    Classes
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/flow-learn">
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
                  <Button isExternal type="link" href="tel:+6285765844454">
                    0857 - 6584 - 4454
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
                    href="https://youtube.com/aldinonid"
                    target="_blank"
                  >
                    Youtube
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="https://facebook.com/aldinonidefendi"
                    target="_blank"
                  >
                    Facebook
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="https://instagram.com/aldinonid"
                    target="_blank"
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
