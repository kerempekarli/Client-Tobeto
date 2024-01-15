import React from "react";

const ApplicationCard = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-12 mt-2">
        <div className="status-card status_accepted">
          <span className="form_name">İstanbul Kodluyor</span>
          <span className="form_status"></span>
          <span className="pull_back"></span>
          <span className="form_name">Bilgilendirme</span>
          <div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <i className="fa fa-check fa-sm" aria-hidden="true" style={{ color: "green", marginRight: "5px" }}></i>
                <span className="form_date"> İstanbul Kodluyor Başvuru Formu onaylandı.</span>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <i className="fa fa-check fa-sm" aria-hidden="true" style={{ color: "green", marginRight: "5px" }}></i>
                <span className="form_date"> İstanbul Kodluyor Belge Yükleme Formu onaylandı.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
