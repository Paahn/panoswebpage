import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const FooterComponent = () => {
    const data = useStaticQuery(graphql`
            query {
                site {
                siteMetadata {
                    creator
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.creator}, © 2019</p>
        </footer>
    )
}

export default FooterComponent