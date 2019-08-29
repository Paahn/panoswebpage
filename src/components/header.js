import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'


const HeaderComponent = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div>
            <header className={headerStyles.header}>
                <title>Panos Hatzinikolaou</title>
                <Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link>
                <nav>
                    <ul className={headerStyles.navList}>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Me</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Email me</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent