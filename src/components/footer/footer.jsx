import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <ul className='permalinks'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href='https://facebook.com/antpcorreia' target='_blank_'><BsFacebook /></a>
            <a href='https://instagram.com/_ant_pedro_' target='_blank_'><BsInstagram /></a>
            <a href='https://twitter.com/ant_pedro_' target='_blank_'><BsTwitter /></a>
        </div>

        <div className="footer__copyright">
            <small>This website was made using </small>
            <a href='https://www.youtube.com/watch?v=G-Cr00UYokU' target='_blank_'>EGATOR's tutorial</a>
            <small> as reference</small><br/>
            <small>&copy; António Correia | 2023 | All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer