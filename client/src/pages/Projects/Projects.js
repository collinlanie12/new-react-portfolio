import React, { Component } from 'react';
import Footer from '../../componenets/Footer/Footer';
import Header from '../../componenets/Header/Header';
import RecentWork from '../../componenets/RecentWork/RecentWork';

class Projects extends Component {

    render() {
        return (
            <div>
                <Header />
                <RecentWork />
                <Footer />
            </div>
        );
    }
}

export default Projects;