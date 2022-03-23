import React from "react";
import "./Home.css";
import Img1 from "./Imgs/1.png";
import Img2 from "./Imgs/2.webp";
import Img3 from "./Imgs/3.webp";
import Img4 from "./Imgs/4.webp";
import Img5 from "./Imgs/5.webp";
import Img6 from "./Imgs/6.png";
import bg1 from "./Imgs/bg1.png";
import Mintbtn from "./mintbtn";
import os from "./Imgs/os.png";

export default function Home() {
  return (
    <div className="font">
      <div className="container-fluid home ">
        <div className="bg-main">
          <div className="  imgb">
            <div className="overlay d-flex flex-column justify-content-center">
              <div className="text-center">
                <div className="sect_1 container">
                  <div className="row">
                    <div className="col-12">
                      <div className="psev">
                        <p className="psm text-white text-right mt-4">
                          MaximumMintsPerAddress:3<br></br>
                          ContractAddress:
                          <a
                            className="text-warning"
                            href="https://snowtrace.io/address/0xd9ba57d5fcaf091bf5c1c8eaecb23533648fb5da"
                            style={{ cursor: "pointer" }}
                            target="_blank"
                          >
                            0xD9bA57d5F....B23533648fb5DA
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="imghead" src={bg1}></img>
                <br />
                <br />
                <h2 className=" hod text-white">
                  PRICE PER GNOME NFT: 1AVAX + GAS:{" "}
                </h2>

                <div className="text-center ">
                  <br></br>
                  {true ? <Mintbtn /> : ""}
                  <div className="psev">
                    <p className="pso text-white mt-5">
                      Please ensure you are connected to the Avalanche Mainnet
                      C-Chain Network and the correct address.<br></br> Please
                      note purchases cannot beundone.
                    </p>
                  </div>
                  <div className="sect_2 container">
                    <div className="row">
                      <div className="col-12">
                        <div className="container text-center py-2 text-white  ">
                          <p>
                            <a
                              href=" https://discord.com/invite/jxJCkJXTzx"
                              target="_blank"
                            >
                              <i className="fab fa-discord Footer px-1"></i>
                            </a>
                            <a
                              href="https://twitter.com/NftGnome"
                              target="_blank"
                            >
                              <i className=" px-1 Footer fab fa-twitter"></i>
                            </a>
                            <a
                              href="https://www.instagram.com/nftgnome/"
                              target="_blank"
                            >
                              <i className=" px-1 Footer fab fa-instagram"></i>
                            </a>
                            {/* <a href="https://opensea.io/collection/cash-crabs">
                              <img
                                src={os}
                                className="px-1"
                                style={{ width: "25px" }}
                              />
                            </a> */}
                            <span className="px-1 Footer">
                              © 2022, GNOME NODES
                            </span>
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
