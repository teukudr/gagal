import React from "react";
import FB from "../image/icon_facebook.png";
import IG from "../image/icon_instagram.png";
import TWITTER from "../image/icon_twitter.png";
import EMAIL from "../image/icon_mail.png";
import TWITCH from "../image/icon_twitch.png";


const Footer =()=>{
    return(
        <div class="footer">
        <div class="footer_utama">
          <div class="footer_alamat">
            <p>Jalan Suroyo No. 161 Mayangan Kota <br />Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>

          <div class="footer_link">
            <a class="nav-link active" aria-current="page" href="#Our-Services-Section">Our Services</a>
            <a class="nav-link" href="#Why-Us-Section">Why Us</a>
            <a class="nav-link" href="#Testimonial-Section">Testimonial</a>
            <a class="nav-link" href="#FAQ-Section">FAQ</a>
          </div>

          <div class="footer_sosmed">
            <p>Connect with us</p>
            <a href=""><img src={FB} alt="" /></a>
            <a href=""><img src={IG} alt="" /></a>
            <a href=""><img src={TWITTER} alt="" /></a>
            <a href=""><img src={EMAIL} alt="" /></a>
            <a href=""><img src={TWITCH} alt="" /></a>
          </div>

          <div class="footer_copy">
            <p>Copyright Binar 2022</p>
            <a href=""><img src="images/logo.png" alt="" /></a>
          </div>
        </div>
      </div>
    );
}

export default Footer;