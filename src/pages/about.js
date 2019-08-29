import React from 'react';
import { Link } from 'gatsby'
import LayoutComponent from '../components/layout';
import HeadComponent from '../components/head'

const AboutPage = () => {
    return (
        <LayoutComponent>
            <HeadComponent title="About" />
            <h1>About me</h1>
            <p><strong>Bio</strong></p>
            <p>    Coming soon...</p>
            <Link to="/contact">Email me</Link>
        </LayoutComponent>
    )
}
export default AboutPage