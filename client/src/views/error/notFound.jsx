import React from "react";
import style from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={style["not-found-container"]}>
      <img
        src="https://dinahosting.com/blog/upload/2020/07/eror-404.jpg"
        alt="imagen"
        className={style["error-image"]}
      />
    </div>
  );
}

export default NotFound;