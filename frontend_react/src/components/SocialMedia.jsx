import React from 'react'
import {BsGithub, BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'

const SocialMedia = ()=>{
    return (
        <div className='app__social'>
            <div>
                <a href='https://github.com/kennethogrey' target='_blank' rel="noopener noreferrer">
                    <BsGithub/>
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/ogire-kenneth-68999a213' target='_blank' rel="noopener noreferrer">
                    <BsLinkedin/>
                </a>
            </div>
            <div>
                <a href='https://twitter.com/KennethOgrey' target='_blank' rel="noopener noreferrer">
                    <BsTwitter/>
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/kennethogrey/' target='_blank' rel="noopener noreferrer">
                    <BsInstagram/>
                </a>
            </div>
        </div>
    )
}

export default SocialMedia