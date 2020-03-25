import React, { Fragment, useState, useLayoutEffect } from "react";
import "../Styles/BannerStyle.less";

function BannerMessage(props) {
  const [status, setStatus] = useState(false);
  let divBanner;
  console.log("status state", status);

  useLayoutEffect(() => {
    divBanner = document.getElementsByClassName("div--banner")[0];
  });

  function bannerDown() {
    divBanner.style.top = "0px";
    setStatus(false);
  }

  function bannerUp() {
    console.log("up");
    divBanner.style.top = "-120px";
    setStatus(true);
    setTimeout(() => {
      bannerDown();
    }, 2000);
  }

  function DropDownMenu() {
    status ? bannerDown() : bannerUp();
  }

  return (
    <>
      <div className="div--banner">
        {props.children}
        <div className="chevron" onClick={DropDownMenu}>
          {" "}
        </div>
      </div>
    </>
  );
}

export default BannerMessage;
