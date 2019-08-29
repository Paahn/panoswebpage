import React from 'react'
import HeaderComponent from './header'
import FooterComponent from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const LayoutComponent = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <HeaderComponent />
                {props.children}
            </div>
            <FooterComponent />
        </div>
    )
}

export default LayoutComponent