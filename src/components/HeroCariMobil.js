import React from "react";
import carImg from '../image/img_car.png'

const HeroCariMobil = () => {
  return (
    <>
    <div class="desc_sewa" id="Hero-Section">
          <div class="container-fluid desc_utama">

              <div class="desc_kiri">
                  <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                  <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                  <a href="" class="btn btn-success my-2 my-sm-0">Mulai Sewa Mobil</a>
              </div>

              <div class="desc_kanan">
                  <img src={carImg} alt="" class="img-mobil" />
                  <div class="bg-mobil"></div>
              </div>

          </div>
      </div>
     </> 
  );
}

export default HeroCariMobil;