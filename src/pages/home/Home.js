// home.js

import React from "react";
import Header from "../../components/header";
import { Col, Container, Nav } from "react-bootstrap";
import {Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Container className="text-center">
        <div className="pt-5 h2">
          TOBETO'ya Hoşgeldin <br></br> <p className="text-primary h1">Kerem</p>{" "}
        </div>
        <div className="pt-5 h3">
          Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
          yanında!
        </div>
        <Col xs={12} md={12} className="border mx-auto p-5">
          <div className="h1 text-info p-3">
            {" "}
            <div>İstanbul</div>
            <div>Kodluyor</div>{" "}
          </div>
          <div className="h3">
            {" "}
            Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
          </div>
          <div>
            <Nav fill variant="tabs">
              <Nav.Item>
                <Link to="basvurularim" className="nav-item-basvurularim">
                  Başvurularım
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="egitimlerim" className="nav-item-egitimlerim">
                  Eğitimlerim
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="duyuru-haberler" className="nav-item-duyuru-haberler">
                  Duyuru ve Haberlerim
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="anketlerim" className="nav-item-anketlerim">
                  Anketlerim
                </Link>
              </Nav.Item>
            </Nav>

            <Outlet />
          </div>
        </Col>
      </Container>
    </div>
  );
}
