import React from "react";
import person1 from "../image/img_person1.png";
import person2 from "../image/img_person2.png";
import star from "../image/Star.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Testimonial =()=> {
    return(
    <div className="container-fluid">
        {/* <!-- ---------- TESTIMONY SECTION BEGIN ---------- --> */}
        <section className="testimony-section" id="Testimonial-Section">
            <div className="opening-text-testimony text-center">
                <h2>Testimonial</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <OwlCarousel 
          className="owl-theme"  
          loop  
          nav  
          margin={32}
          stagePadding={16}
          dots={false}
          center
          autoplay
          autoplayHoverPause >
            {/* <!-- Owl Carousel --> */}
            {/* <div className="owl-carousel"> */}
                <div className="item">
                    <div className="testi-box">
                        <div className="row">
                            <div className="col-lg-3 vh-center py-4">
                                <img src={person1} className="images" alt="person image"></img>
                            </div>
                            <div className="col-lg-9">
                                <div className="text-review">
                                    <div className="star">
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                    </div>

                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <h5>John Dee 32, Bromo</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="testi-box">
                        <div className="row">
                            <div className="col-lg-3 vh-center py-4">
                                <img src={person2} alt="person image"></img>
                            </div>
                            <div className="col-lg-9">
                                <div className="text-review">
                                    <div className="star">
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                    </div>

                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <h5>John Dee 32, Bromo</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="testi-box">
                        <div className="row">
                            <div className="col-lg-3 vh-center py-4">
                                <img src={person1} alt="person image"></img>
                            </div>
                            <div className="col-lg-9">
                                <div className="text-review">
                                    <div className="star">
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                    </div>

                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <h5>John Dee 32, Bromo</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="testi-box">
                        <div className="row">
                            <div className="col-lg-3 vh-center py-4">
                                <img src={person2} alt="person image"></img>
                            </div>
                            <div className="col-lg-9">
                                <div className="text-review">
                                    <div className="star">
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                        <img src={star} alt="star"></img>
                                    </div>

                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <h5>John Dee 32, Bromo</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="testi-box">
                        <div className="row">
                            <div className="col-lg-3 vh-center py-4">
                                <img src={person1} alt="person image"></img>
                            </div>
                            <div className="col-lg-9">
                                <div className="text-review">
                                    <div className="star">
                                        <img src={star}alt="star"></img>
                                        <img src={star}alt="star"></img>
                                        <img src={star}alt="star"></img>
                                        <img src={star}alt="star"></img>
                                        <img src={star}alt="star"></img>
                                    </div>

                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <h5>John Dee 32, Bromo</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="testi-box">
                        <div className="row">
                            <div className="col-lg-3 vh-center py-4">
                                <img src={person2} alt="person image"></img>
                            </div>
                            <div className="col-lg-9">
                                <div className="text-review">
                                    <div className="star">
                                        <img src={star}alt="star"></img>
                                        <img src={star}alt="star"></img>
                                        <img src={star}alt="star"></img>
                                        <img src={star}alt="star"></img>
                                        <img src={star}alt="star"></img>
                                    </div>

                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <h5>John Dee 32, Bromo</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            </OwlCarousel>
        </section>
        
        {/* <!-- ---------- TESTIMONY SECTION END ---------- --> */}
    </div>
    );
}

export default Testimonial;