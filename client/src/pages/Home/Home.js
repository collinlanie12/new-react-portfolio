import React, { Component } from 'react';

import MainSection from '../../componenets/MainSection/MainSection';
import Footer from '../../componenets/Footer/Footer'
import Header from '../../componenets/Header/Header';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

class Home extends Component {

    render() {
        return (
            <div>
                <ReactNotification />
                <Header />
                <MainSection />
                <Footer />
            </div>
        );
    }
}

export default Home;