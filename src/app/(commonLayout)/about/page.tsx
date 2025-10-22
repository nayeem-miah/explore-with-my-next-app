import React from 'react'
import style from "./About.module.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'about us',
    description: "This is about us page"
}

function AboutPage() {
    return (
        <div className={style.about_text}>AboutPage</div>
    )
}

export default AboutPage