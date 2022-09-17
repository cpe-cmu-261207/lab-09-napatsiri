import React from "react";
import Image from "next/image";
import MainLayout from "../layout/MainLayout";

import drawing from "../public/picture/drawing.jpg";
import sun from "../public/picture/sun.jpg";
import home from "../public/picture/home.jpg";

export default function Exp() {
  return (
    <MainLayout>
      <div className="bottom botttom2">
        <div className="d-flex gap-5" style={{ justifycontent: "center" }}>
          <p className="title title1 justify-content-center">EXPERIENCE</p>
          <br />

          <span>
            <div className="card2">
              <Image src={drawing} className="other-ex" />
              <div className="intro">
                <h1 className="title title3">Game</h1>
                <p className="inner">
                  I've done a project about creating games using work from
                  scratch programs using blocks to tile like code.
                </p>
              </div>
            </div>
          </span>

          <span>
            <div className="card2">
              <Image src={sun} className="other-ex" />
              <div className="intro">
                <h1 className="title title3">Solar cell</h1>
                <p className="inner">
                  Studied the making of renewable energy, such as solar energy,
                  that will help with electricity lighting.
                </p>
              </div>
            </div>
          </span>

          <span>
            <div className="card2">
              <Image src={home} className="other-ex" />
              <div className="intro">
                <h1 className="title title3">Drawing</h1>
                <p className="inner">
                  We have designed the house that you want to be in the drawing
                  class through the Autocd program, both outside the house and
                  inside the house.
                </p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </MainLayout>
  );
}
