import React from "react";
import serviceImage from "../image/img_service.png"
import iconService from "../image/icon_ceklis.png"

const OurService=()=>{
    return(
    <section className="container our-service-section" id="Our-Services-Section">
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="img-service">
                  <img src={serviceImage} alt="our service"/>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 v-center">
              <div className="desc-section">
                  <h2><b>Best Car Rental for any kind of trip in Bandar Lampung!</b></h2>
                  <p>Sewa mobil di Bandar Lampung bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                      lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                      wedding, meeting, dll.</p>
                      <p className="img"><img src={iconService} alt="Icon Ceklis" style={{width:"24px", height:"24px"} }></img>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                      <p className="img"><img src={iconService} alt="Icon Ceklis" style={{width:"24px", height:"24px"} }></img>Sewa Mobil Lepas Kunci di Bali 24 jam</p>
                      <p className="img"><img src={iconService} alt="Icon Ceklis" style={{width:"24px", height:"24px"} }></img>Sewa Mobil Jangka Panjang Bulanan</p>
                      <p className="img"><img src={iconService} alt="Icon Ceklis" style={{width:"24px", height:"24px"} }></img>Gratis Antar - Jemput Mobil di Bandara</p>
                      <p className="img"><img src={iconService} alt="Icon Ceklis" style={{width:"24px", height:"24px"} }></img>Layanan Airport Transfer / Drop In Out</p>
              </div>
          </div>
      </div>
  </section>
  
    );
}

export default OurService;