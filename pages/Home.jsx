import React from "react";
import Image from "next/image";

import lang from "../public/picture/lang.jpg";
import programming from "../public/picture/programming.jpg";
import stock from "../public/picture/stock.jpg";
import frontend from "../public/picture/frontend.jpg";
import mypic from "../public/picture/mypic.jpg";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  const imgStyle = {
    objectFit: "cover",
    mergintop: "20px",
  };

  return (
    <MainLayout>
      <div className="middle d-flex">
        <span className="mt-3">
          <Image
            src={mypic}
            className="mypic"
            style={imgStyle}
            class="rounded-circle"
            height={300}
            width={300}
          />
        </span>

        <span>
          <p1 className="title title1">Napatsiri Phetsri</p1>
          <p2 className="descrip1">
            Hi, my name is Napatsiri Phetsri. I graduated from Phraharuthai
            <br />
            Nonthaburi School. Studied Math-sci. I want to be programmer. <br />
            So I focused on reading and practicing my skills for the <br />
            entrance exams at Chiang Mai University, and now I'm studying,{" "}
            <br />
            Faculty of Engineering, Computer Science.
          </p2>
        </span>
      </div>

      <div className="bottom">
        <p className="title title2 justify-content-center">MY SKILL</p>
        <div className="d-flex gap-5">
          <span>
            <div className="card">
              <Image
                src={programming}
                width="200"
                height="300"
                className="card-img-top"
              />
              <div className="card-body">
                <p>BACK-END</p>
                <p className="card-text ms-2">
                  C++ <br /> Python <br /> JavaScript
                </p>
              </div>
            </div>
          </span>
          <span>
            <div className="card">
              <Image
                src={frontend}
                width="200"
                height="300"
                className="card-img-top"
              />
              <div className="card-body">
                <p>Robotic/AI</p>
                <p className="card-text ms-2">
                  To design robots that make them more comfortable and develop
                  AI systems.
                </p>
              </div>
            </div>
          </span>
          <span>
            <div className="card">
              <Image
                src={lang}
                width="200"
                height="300"
                className="card-img-top"
              />
              <div className="card-body">
                <p>LANGUAGE</p>
                <p className="card-text ms-2">
                  I can be written, read, spoken in 5 languages: Thai, English,
                  Spanish. French, Russian
                </p>
              </div>
            </div>
          </span>
          <span>
            <div className="card">
              <Image
                src={stock}
                width="200"
                height="300"
                className="card-img-top"
              />
              <div className="card-body">
                <p>LANGUAGE</p>
                <p className="card-text ms-2">
                  I have knowledge of trading stocks to use the money available
                  to build on the future carefully.
                </p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </MainLayout>
  );
}
