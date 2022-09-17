import React from "react";
import MainLayout from "../layout/MainLayout";
import Image from "next/image";

import mypic from "../public/picture/mypic.jpg";

export default function Contact() {
  return (
    <MainLayout>
      <div className="middle3 box-transparent">
        <p className="title title1 text-center" style={{ fontweight: "bold" }}>
          CONTACT ME
        </p>
        <div className="contact d-flex ms-5 ">
          <span>
            <Image
              className="d-block"
              src={mypic}
              width="250px"
              height="250px"
              style={{ borderradius: "50px", boxshadow: "5px 5px 20px black" }}
            />
          </span>

          <table className="t1">
            <tr>
              <td className="td2">👧🏻Name</td>
              <td className="td1">Napatsiri Phetsri</td>
            </tr>
            <tr>
              <td className="td2">👧🏻Nickname</td>
              <td className="td1">Nat</td>
            </tr>
            <tr>
              <td className="td2">🏡Address</td>
              <td className="td1">98 Moo.14 Suthep,Muang,Chiang-Mai 50200</td>
            </tr>
            <tr>
              <td className="td2">🔗Facebook</td>
              <td>
                <a
                  href="https://www.facebook.com/Napatsiri Phet"
                  className="facebook td1 text-decoration-none"
                  rel="noreferrer"
                >
                  Napatsiri Phet
                </a>
              </td>
            </tr>
            <tr>
              <td className="td2">📪Email</td>
              <td>
                <a
                  href="mailto: napatsiri_p@cmu.ac.th"
                  className="td1 email text-decoration-none"
                >
                  napatsiri_p@cmu.ac.th
                </a>
              </td>
            </tr>
            <tr>
              <td className="td2">☎️Phone</td>
              <td className="td1">094-490-1345</td>
            </tr>

            <tr />
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
