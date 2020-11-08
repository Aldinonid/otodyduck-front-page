import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import BrandIcon from "./IconText";

export default function Header(props) {
  const [User, setUser] = useState(() => null);

  useEffect(() => {
    const userCookie =
      decodeURIComponent(window.document.cookie)
        ?.split(";")
        ?.find?.((item) => item.indexOf("OTODYDUCK:user") > -1)
        ?.split("=")[1] ?? null;

    setUser(userCookie ? JSON.parse(userCookie) : null);
  }, []);

  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  const linkCTA =
    props.location.pathname.indexOf("/login") > -1
      ? `${process.env.REACT_APP_MEMBERPAGE_URL}/register`
      : `${process.env.REACT_APP_MEMBERPAGE_URL}/login`;
  const textCTA =
    props.location.pathname.indexOf("/login") > -1 ? "Register" : "Login";

  if (props.isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <div className="navbar navbar-expand-lg navbar-light">
              <Button type="link" href="/" className="brand-text-icon mx-auto">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </div>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <Fade>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto d-flex align-items-center">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/class")}`}>
                  <Button className="nav-link" type="link" href="/class">
                    All Class
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/flow")}`}>
                  <Button className="nav-link" type="link" href="/flow">
                    Flow Learn
                  </Button>
                </li>
                <li className="nav-item">
                  {User ? (
                    <Button
                      isExternal
                      href={linkCTA}
                      type="link"
                      className="btn medium d-flex d-inline-flex align-items-center user-profile"
                    >
                      <div className="mr-3 span-profile">
                        {User?.thumbnail ? (
                          <img
                            src={User?.thumbnail}
                            alt={User?.name ?? "Username"}
                            className="rounded-circle"
                          />
                        ) : (
                          "User Image"
                        )}
                      </div>
                      Hi, {User.name}
                    </Button>
                  ) : (
                    <Button
                      isExternal
                      className="btn btn-primary text-white medium"
                      type="link"
                      href={linkCTA}
                    >
                      {textCTA}
                    </Button>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
