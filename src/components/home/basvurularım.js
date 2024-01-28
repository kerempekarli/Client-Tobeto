import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function basvurularım() {
  return (
    <div>
      <div className="p-5  text-left col-4 align-items-center">
        <div className="d-flex justify-content-between ">
          {" "}
          <div className="h5 px-2 text-xs">
            İstanbul kodluyor bilgilendirme
          </div>{" "}
          <FontAwesomeIcon className="" icon={faCoffee} />{" "}
        </div>

        <div className="d-flex">
          {" "}
          <div> İstanbul kodluyor başvuru formu onaylandı</div>
          <FontAwesomeIcon className="" icon={faCoffee} />{" "}
        </div>
        <div className="d-flex">
          {" "}
          <div> İstanbul Kodluyor Belge Yükleme Formu onaylandı.</div>
          <FontAwesomeIcon className="" icon={faCoffee} />{" "}
        </div>
      </div>
    </div>
  );
}
