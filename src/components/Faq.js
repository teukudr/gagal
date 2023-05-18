import React from "react";


const FAQ =()=>{
    return(
        <section class="container faq-section" id="FAQ-Section">
      <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 faq-section">
              <div class="faq-intro">
                  <h2><b>Frequently Asked Question</b></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 faq-section">
          <div class="list-questions">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" 
                aria-controls="panelsStayOpen-collapseOne">
                Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" 
              aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the 
                  collapse plugin adds the appropriate classes that we use to style each element. These classes
                   control the overall appearance, as well as the showing and hiding via CSS transitions. You can 
                   modify any of this with custom CSS or overriding our default variables. It's also worth noting 
                   that just about any HTML can go within the <code>.accordion-body</code>, though the transition does 
                   limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" 
                aria-controls="panelsStayOpen-collapseTwo">
                Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" 
              aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse 
                  plugin adds the appropriate classes that we use to style each element. These classes control the 
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this 
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML 
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" 
                aria-controls="panelsStayOpen-collapseThree">
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" 
              aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse 
                  plugin adds the appropriate classes that we use to style each element. These classes control the 
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this 
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML 
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" 
                aria-controls="panelsStayOpen-collapseFour">
                Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" 
              aria-labelledby="panelsStayOpen-headingFour">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse 
                  plugin adds the appropriate classes that we use to style each element. These classes control the 
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this 
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML 
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" 
                aria-controls="panelsStayOpen-collapseFive">
                Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" 
              aria-labelledby="panelsStayOpen-headingFive">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse 
                  plugin adds the appropriate classes that we use to style each element. These classes control the 
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this 
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                   can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>
    );
}

export default FAQ