import React from "react";

const FormCariMobil =()=>{
    return(
        <section class="search-box">
            <div class="search-content">
                <div class="input-group d-flex flex-column">
                <p>Tipe Driver</p>
                <select class="form-select" id="driver" required>
                <option class="item" value="" selected>Pilih Tipe Driver</option>
                <option class="item" value="true">Dengan Sopir</option>
                <option class="item" value="false">
                    Tanpa Sopir (Lepas Kunci)
                </option>
                </select>
                </div>
            <div class="input-group d-flex flex-column">
                <p>Tanggal</p>
                <input type="date" class="form-control" id="date" required />
            </div>
            <div class="input-group d-flex flex-column pe-2">
            <p>Waktu Jemput/Ambil</p>
            <input type="time" id="time" class="form-control" required />
            </div>
            <div class="input-group d-flex flex-column">
                <p>Jumlah Penumpang (Opsional)</p>
                <div class="d-flex flex-row">
                <input type="text" class="form-control item" id="passanger" style={{backgroundColor : "#fffff"}}/>
                <i class="bi bi-people-fill input-group-append people-icon"></i>
                </div>
            </div>

            <button type="submit" class="btn button-search" id="load-btn">
                Cari Mobil
            </button>
            </div>
        </section>
    )
}

export default FormCariMobil;