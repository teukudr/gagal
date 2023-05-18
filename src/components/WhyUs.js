import React from "react";
import iconComplete from "../image/icon_complete.png";
import iconPrice from "../image/icon_price.png";
import iconJam from "../image/icon_24hrs.png";
import iconProfessional from "../image/icon_professional.png";

const WhyUs=() => {
    return(
        <section className="container why-us-section" id="Why-Us-Section">
        <h2 className="text"><b>Why Us?</b></h2>
        <p className="text">Mengapa harus pilih Binar Car Rental?</p>
        <div className="row">
        <div className="col-lg-3 col-md col-sm-12 mb-3">
            <div className="card" style={{height:"196px"}}>
                <img src={iconComplete} className="icon-why-us" alt="icon complete"></img>
                <h4><b>Mobil Lengkap</b></h4>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
            <div className="card">
                <img src={iconPrice} className="icon-why-us" alt="icon Price"></img>
                <h4><b>Harga Murah</b></h4>
                <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan <br />rental mobil lain</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src={iconJam} className="icon-why-us" alt="icon 24hours"></img>
                <h4><b>Layanan 24 Jam</b></h4>
                <p>Siap melayani kebutuhan Anda <br />selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{height:"196px"}}>
                <img src={iconProfessional} className="icon-why-us" alt="icon professional"></img>
                <h4><b>Sopir Profesional</b></h4>
                <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
        </div>
    </div>
    </section>

    );
}

export default WhyUs;