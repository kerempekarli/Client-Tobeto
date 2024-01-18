import React from 'react';
import Header from '../components/header'; // Header bileşenini içeri aktarın
import { Container } from 'react-bootstrap';

const Layout = ({ showHeader = true, children }) => {
    return (
        <div>
            {showHeader && <Header />} {/* Header'ın gösterilip gösterilmeyeceğini kontrol et */}
            <Container fluid>
                {children} {/* Diğer bileşenleri (sayfa içeriği, vs.) buraya ekleyin */}
            </Container>
        </div>
    );
};

export default Layout;
