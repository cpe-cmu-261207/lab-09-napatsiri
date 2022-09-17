import Image from "next/image";
import Link from "next/link";
import React from "react";

import mypic from "../public/picture/mypic.jpg";

export function Navbar() {
  return (
    <div
      style={{ maxWidth: "600px", textDecoration: "none" }}
      className="mx-auto"
    >
      <br />
      <div class="d-flex justify-content-center gap-5 fw-bold my-4 ">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/Exp">
          <a>Experience</a>
        </Link>
        <Link href="/Contact">
          <a>Contact</a>
        </Link>
        <Link href="/lab-07">
          <a>Lab-07</a>
        </Link>
      </div>
      <hr />
    </div>
  );
}

/* <Link href='/welcome'>
        Click to go to Google.com
      </Link> */
