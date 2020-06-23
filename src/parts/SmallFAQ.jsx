import React from "react";
import Fade from "react-reveal/Fade";

import imgFlow from "assets/images/flow-img.jpg";

export default function SmallFAQ() {
  return (
    <>
      <Fade bottom>
        <hr />
        <section>
          <div className="text-center">
            <h1 className="medium">Save Your Time</h1>
            <p className="text-gray-500" style={{ marginTop: "-15px" }}>
              Find answers to your questions here
              <br />
              to be more confident before joining
            </p>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 text-center">
                <img
                  src={imgFlow}
                  alt="Learning Flow"
                  width="291"
                  height="291"
                />
              </div>
              <div className="col-6">
                <h4 className="text-dark">
                  <i className="fa fa-question"></i> How to Learn
                </h4>
                <hr />
                <p className="text-dark">
                  Kelas di Otodyduck{" "}
                  <strong>100% dilakukan secara online</strong> (tidak ada
                  pertemuan di tempat selama masa belajar) dan{" "}
                  <strong>video pembelajarannya dapat diunduh</strong> untuk
                  dipelajari secara offline (tanpa menggunakan koneksi
                  Internet).
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
}
