import React from 'react'
import { Link } from 'gatsby'

import HeadComponent from '../components/head'
import LayoutComponent from '../components/layout';

const NotFound = () => {
    return (
        <LayoutComponent>
            <HeadComponent title="404"/>
            <h1>Page not found</h1>
            <p><Link to="/">Head home</Link></p>
        </LayoutComponent>
    )
}
export default NotFound