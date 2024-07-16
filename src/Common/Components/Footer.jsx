import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <footer
          className="text-center  text-lg-start  text-muted"
          style={{ background: "#171717" }}
        >
          <section className="footer">
            <div className="container text-light text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>FarmEasy
                  </h6>
                  <p>
                    Here you can Borrow and rent the agricultural machines and
                    also buy and sell machines and commodities related to
                    agriculture
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="/" className="text-reset">
                      Tractor
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Harvestor
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Cultivator
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="/" className="text-reset">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Products
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Categories
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> Phagwara, PB 144401, IN
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@farmeasy.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> +91 9946892545
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center text-light p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="/">
              FarmEasy.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
