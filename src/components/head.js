import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function HeadComponent ({ title }) {
    const data = useStaticQuery(graphql`
    query{
        site {
            siteMetadata{
                title
            }
        }
    }`)

    return (
        <div>
            <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
        </div>
    )
}
