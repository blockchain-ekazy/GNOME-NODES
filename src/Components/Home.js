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
                          ContractAddress:XXXXXXX.....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="imghead" src={bg1}></img>
                <br />
                <br />
                {/* <h1 className=" centered text-white h1">Cash <span className='Tclr'>Crabs</span></h1> */}
                <h2 className=" hod text-white">
                  PRICE PER GNOME NFT: 1AVAX + GAS:{" "}
                </h2>

                <div className="text-center ">
                  <br></br>
                  {/* <button type="button" class="Wbtn btn btn-lg px-5 mb-5">CONNECT YOUR WALLET</button> */}
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
                            <a href=" https://discord.gg/cashcrabs">
                              <i className="fab fa-discord Footer px-1"></i>
                            </a>
                            <a href="https://twitter.com/CashCrabsNFT">
                              <i className=" px-1 Footer fab fa-twitter"></i>
                            </a>
                            <a href="https://opensea.io/collection/cash-crabs">
                              <img
                                src={os}
                                className="px-1"
                                style={{ width: "25px" }}
                              />
                            </a>
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
