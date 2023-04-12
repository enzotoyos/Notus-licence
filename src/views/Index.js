/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall.js";
import Background from "../assets/img/register_bg_2.png";

export default function Index() {
  return (
    <>
      <main>
        <div style={{ backgroundColor: "#0f172a" }}>
          <section className="relative w-full h-full py-40 min-h-screen ">
            <div class="wrapper">
              <div data-reactroot>
                <div>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h1
                      style={{
                        color: "white",
                        fontSize: "300%",
                      }}
                    >
                      Notus Licence
                    </h1>
                  </div>
                  <div
                    className="container mx-auto px-4 h-full"
                    style={{ marginTop: 50 }}
                  >
                    <div className="flex content-center items-center justify-center h-full">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                          <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                              <h6 className="text-blueGray-500 text-sm font-bold">
                                Bienvenue sur votre gestionnaire de licence en
                                ligne, connectez-vous à votre espace afin
                                d'accéder à votre dashboard
                              </h6>
                            </div>
                            <div
                              className="text-center mt-6"
                              style={{ marginTop: 50 }}
                            >
                              <Link
                                to="/auth/login"
                                className="text-blueGray-200"
                              >
                                <button
                                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                  type="button"
                                >
                                  J'accède à mon espace
                                </button>
                              </Link>
                            </div>
                          </div>
                          <div className="flex-auto px-4 lg:px-10 py-10 pt-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterSmall absolute />
          </section>
        </div>
      </main>
      ;
    </>
  );
}
