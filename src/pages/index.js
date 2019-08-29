import React from 'react'
import { Link } from 'gatsby'
import LayoutComponent from '../components/layout'
import HeadComponent from '../components/head'


const IndexPage = () => {
    return (
        <LayoutComponent>
            <HeadComponent title="Home"/>
            <h1>Hello there!</h1>
            <h2>I'm Panos Hatzinikolaou. I'm a software developer.</h2>
            <p>Find me on social media or <Link to="/contact">Contact me.</Link></p>
            <ul>
                <li><a href="https://github.com/Paahn" target="_blank" rel="noopener norefferer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/panos-hatzinikolaou-2712a1a3/" target="_blank" rel="noopener norefferer">linkedin</a></li>
                <li><a href="https://news.ycombinator.com/user?id=Paahn" target="_blank" rel="noopener norefferer">HackerNews</a></li>
                <li><a href="https://www.youtube.com/channel/UCJibEa-vQ574cwfcIe9zjfQ?view_as=subscriber" target="_blank" rel="noopener norefferer">Youtube</a></li>
                <li><a href="https://stackoverflow.com/users/10130360/paahn" target="_blank" rel="noopener norefferer">StackOverflow</a></li>
                <li><a href="https://medium.com/@pjhatzis" target="_blank" rel="noopener norefferer">Medium</a></li>
                <li><a href="https://www.udemy.com/user/panos-40/" target="_blank" rel="noopener norefferer">Udemy</a></li>
                <li><a href="https://devpost.com/Paahn" target="_blank" rel="noopener norefferer">DevPost</a></li>
                <li><a href="https://codereview.stackexchange.com/users/206085/paahn" target="_blank" rel="noopener norefferer">CodeReview</a></li>
                <li><a href="http://maureenhatzinikolaou.site/" target="_blank" rel="noopener norefferer">Other projects</a></li>
            </ul>
        </LayoutComponent>
    )
}

export default IndexPage
