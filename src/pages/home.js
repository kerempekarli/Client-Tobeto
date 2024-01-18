import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Applications from "./home/application"; // Başvurularım sayfasını içeren bileşen
import Trainings from "./home/trainings"; // Eğitimlerim sayfasını içeren bileşen
import Announcements from "./home/announcements"; // Duyurular ve haberler sayfasını içeren bileşen
import Surveys from "./home/surveys"; // Anketlerim sayfasını içeren bileşen
import Layout from "../layouts/HeaderLogicLayout";

export default function Home() {
  const [key, setKey] = useState("Announcements");

  return (
    <Layout showHeader={true}>
      <section className="py-5">
        <div className="position-relative mt-12">
          <div className="vector">
            <img alt="" aria-hidden="true" src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg" />
          </div>
          <div className="container text-center">
            <div className="mw-5xl mx-auto">
              <h3>
                <span className="text-secondary"> TOBETO</span>
                <span className="fw-normal text-info">'ya</span>
                <span className="fw-normal text-info"> hoş geldin</span>
              </h3>
              <h4 className="fw-normal text-info mb-5">Buse</h4>
              <p className="tobeto-slogan">Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!</p>
            </div>
          </div>
        </div>
      </section>
      <div className="row cv-box cv-padding display-flex mmt-n-4">
        <div className="col-12 ik-logo-platform">
          <div className="p-4">
            <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
              <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                <img alt="" aria-hidden="true" src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg" />
              </span>
              <img
                srcSet="/_next/static/media/ik-logo-dark.7938c0de.svg 1x, /_next/static/media/ik-logo-dark.7938c0de.svg 2x"
                src="/_next/static/media/ik-logo-dark.7938c0de.svg"
                decoding="async"
                data-nimg="intrinsic"
                style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                alt=""
              />
            </span>
          </div>
          <div className="mt-2 d-flex flex-column justify-content-center px-10 text-center">
            <span className="header-text-md mt-4">Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.</span>
            <span className="header-text mt-4 mb-4">Aradığın <span className="quot">“</span>İş<span className="quot">”</span> Burada!</span>
          </div>
        </div>
        <div className="col-12 mb-4">
          <ul className="nav nav-tabs mainTablist" id="myTab" role="tablist">
            {/* ... Diğer tablar ... */}
          </ul>
        </div>
        <div className="col-12">
          <div className="tab-content" id="myTabContent">
            {/* ... Diğer tab içerikleri ... */}
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <Tabs
          id="home-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="Trainings" title="Eğitimlerim">
            <Trainings />
          </Tab>
          <Tab eventKey="Applications" title="Başvurularım">
            <Applications />
          </Tab>
          <Tab eventKey="announcements" title="Duyurular ve Haberler">
            <Announcements />
          </Tab>


          <Tab eventKey="surveys" title="Anketlerim">
            <Surveys />
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
}
