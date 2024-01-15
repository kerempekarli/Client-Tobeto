import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Applications from "./home/application"; // Başvurularım sayfasını içeren bileşen
import Trainings from "./home/trainings"; // Eğitimlerim sayfasını içeren bileşen
import Announcements from "./home/announcements"; // Duyurular ve haberler sayfasını içeren bileşen
// import Surveys from "./Surveys"; // Anketlerim sayfasını içeren bileşen
import Layout from "../layouts/HeaderLogicLayout";

export default function Home() {
  const [key, setKey] = useState("Announcements");

  return (
    <Layout showHeader={true}>
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
          <Tab eventKey="Announcements" title="Başvurularım">
          <Announcements />
        </Tab>
        <Tab eventKey="announcements" title="Duyurular ve Haberler">
          <Applications />
        </Tab>
          {/* 


        <Tab eventKey="surveys" title="Anketlerim">
          <Surveys />
        </Tab> */}
        </Tabs>
      </div>
    </Layout>
  );
}
