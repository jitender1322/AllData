import React from 'react'

export default function BootStarpTemp() {
    return (
        <div>

            <header>
                <div className="header-area ">
                    <div id="sticky-header" className="main-header-area">
                        <div className="container-fluid p-0">
                            <div className="row align-items-center no-gutters">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a className="active" href="index.html">home</a></li>
                                                <li><a href="rooms.html">rooms</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">blog</a></li>
                                                        <li><a href="single-blog.html">single-blog</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="elements.html">elements</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo-img">
                                        <a href="index.html">
                                            <img src="img/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                                    <div className="book_room">
                                        <div className="socail_links">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-facebook-square"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-instagram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="book_btn d-none d-lg-block">
                                            <a className="popup-with-form" href="#test-form">Book A Room</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="slider_area">
                <div className="slider_active owl-carousel">
                    <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider_text text-center">
                                        <h3>Montana Resort</h3>
                                        <p>Unlock to enjoy the view of Martine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_slider  d-flex align-items-center justify-content-center slider_bg_2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider_text text-center">
                                        <h3>Life is Beautiful</h3>
                                        <p>Unlock to enjoy the view of Martine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider_text text-center">
                                        <h3>Montana Resort</h3>
                                        <p>Unlock to enjoy the view of Martine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_slider  d-flex align-items-center justify-content-center slider_bg_2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider_text text-center">
                                        <h3>Life is Beautiful</h3>
                                        <p>Unlock to enjoy the view of Martine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="about_info">
                                <div className="section_title mb-20px">
                                    <span>About Us</span>
                                    <h3>A Luxuries Hotel <br />
                                        with Nature</h3>
                                </div>
                                <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare
                                    dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                                    sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
                                <a href="#" className="line-button">Learn More</a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="about_thumb d-flex">
                                <div className="img_1">
                                    <img src="img/about/about_1.png" alt="" />
                                </div>
                                <div className="img_2">
                                    <img src="img/about/about_2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offers_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section_title text-center mb-100">
                                <span>Our Offers</span>
                                <h3>Ongoing Offers</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <div className="single_offers">
                                <div className="about_thumb">
                                    <img src="img/offers/1.png" alt="" />
                                </div>
                                <h3>Up to 35% savings on Club <br />
                                    rooms and Suites</h3>
                                <ul>
                                    <li>Luxaries condition</li>
                                    <li>3 Adults & 2 Children size</li>
                                    <li>Sea view side</li>
                                </ul>
                                <a href="#" className="book_now">book now</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single_offers">
                                <div className="about_thumb">
                                    <img src="img/offers/2.png" alt="" />
                                </div>
                                <h3>Up to 35% savings on Club <br />
                                    rooms and Suites</h3>
                                <ul>
                                    <li>Luxaries condition</li>
                                    <li>3 Adults & 2 Children size</li>
                                    <li>Sea view side</li>
                                </ul>
                                <a href="#" className="book_now">book now</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single_offers">
                                <div className="about_thumb">
                                    <img src="img/offers/3.png" alt="" />
                                </div>
                                <h3>Up to 35% savings on Club <br />
                                    rooms and Suites</h3>
                                <ul>
                                    <li>Luxaries condition</li>
                                    <li>3 Adults & 2 Children size</li>
                                    <li>Sea view side</li>
                                </ul>
                                <a href="#" className="book_now">book now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video_area video_bg overlay">
                <div className="video_area_inner text-center">
                    <span>Montana Sea View</span>
                    <h3>Relax and Enjoy your <br />
                        Vacation </h3>
                    <a href="https://www.youtube.com/watch?v=vLnPwxZdW4Y" className="video_btn popup-video">
                        <i className="fa fa-play"></i>
                    </a>
                </div>
            </div>

            <div className="about_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <div className="about_thumb2 d-flex">
                                <div className="img_1">
                                    <img src="img/about/1.png" alt="" />
                                </div>
                                <div className="img_2">
                                    <img src="img/about/2.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="about_info">
                                <div className="section_title mb-20px">
                                    <span>Delicious Food</span>
                                    <h3>We Serve Fresh and <br />
                                        Delicious Food</h3>
                                </div>
                                <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare
                                    dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                                    sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
                                <a href="#" className="line-button">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features_room">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section_title text-center mb-100">
                                <span>Featured Rooms</span>
                                <h3>Choose a Better Room</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rooms_here">
                    <div className="single_rooms">
                        <div className="room_thumb">
                            <img src="img/rooms/1.png" alt="" />
                            <div className="room_heading d-flex justify-content-between align-items-center">
                                <div className="room_heading_inner">
                                    <span>From $250/night</span>
                                    <h3>Superior Room</h3>
                                </div>
                                <a href="#" className="line-button">book now</a>
                            </div>
                        </div>
                    </div>
                    <div className="single_rooms">
                        <div className="room_thumb">
                            <img src="img/rooms/2.png" alt="" />
                            <div className="room_heading d-flex justify-content-between align-items-center">
                                <div className="room_heading_inner">
                                    <span>From $250/night</span>
                                    <h3>Deluxe Room</h3>
                                </div>
                                <a href="#" className="line-button">book now</a>
                            </div>
                        </div>
                    </div>
                    <div className="single_rooms">
                        <div className="room_thumb">
                            <img src="img/rooms/3.png" alt="" />
                            <div className="room_heading d-flex justify-content-between align-items-center">
                                <div className="room_heading_inner">
                                    <span>From $250/night</span>
                                    <h3>Signature Room</h3>
                                </div>
                                <a href="#" className="line-button">book now</a>
                            </div>
                        </div>
                    </div>
                    <div className="single_rooms">
                        <div className="room_thumb">
                            <img src="img/rooms/4.png" alt="" />
                            <div className="room_heading d-flex justify-content-between align-items-center">
                                <div className="room_heading_inner">
                                    <span>From $250/night</span>
                                    <h3>Couple Room</h3>
                                </div>
                                <a href="#" className="line-button">book now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="forQuery">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1 col-md-12">
                            <div className="Query_border">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-xl-6 col-md-6">
                                        <div className="Query_text">
                                            <p>For Reservation 0r Query?</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="phone_num">
                                            <a href="#" className="mobile_no">+10 576 377 4789</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="instragram_area">
                <div className="single_instagram">
                    <img src="img/instragram/1.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="single_instagram">
                    <img src="img/instragram/2.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="single_instagram">
                    <img src="img/instragram/3.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="single_instagram">
                    <img src="img/instragram/4.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="single_instagram">
                    <img src="img/instragram/5.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        address
                                    </h3>
                                    <p className="footer_text"> 200, Green road, Mongla, <br />
                                        New Yor City USA</p>
                                    <a href="#" className="line-button">Get Direction</a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Reservation
                                    </h3>
                                    <p className="footer_text">+10 367 267 2678 <br />
                                        reservation@montana.com</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-lg-2">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Navigation
                                    </h3>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Rooms</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Newsletter
                                    </h3>
                                    <form action="#" className="newsletter_form">
                                        <input type="text" placeholder="Enter your mail" />
                                        <button type="submit">Sign Up</button>
                                    </form>
                                    <p className="newsletter_text">Subscribe newsletter to get updates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border"></div>
                        <div className="row">
                            <div className="col-xl-8 col-md-7 col-lg-9">
                                <p className="copy_right"></p>
                            </div>
                            <div className="col-xl-4 col-md-5 col-lg-3">
                                <div className="socail_links">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-facebook-square"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


            <form id="test-form" className="white-popup-block mfp-hide">
                <div className="popup_box ">
                    <div className="popup_inner">
                        <h3>Check Availability</h3>
                        <form action="#">
                            <div className="row">
                                <div className="col-xl-6">
                                    <input id="datepicker" placeholder="Check in date" />
                                </div>
                                <div className="col-xl-6">
                                    <input id="datepicker2" placeholder="Check out date" />
                                </div>
                                <div className="col-xl-6">
                                    <select className="form-select wide" id="default-select" >
                                        <option data-display="Adult">1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                    </select>
                                </div>
                                <div className="col-xl-6">
                                    <select className="form-select wide" id="default-select" >
                                        <option data-display="Children">1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                    </select>
                                </div>
                                <div className="col-xl-12">
                                    <select className="form-select wide" id="default-select" >
                                        <option data-display="Room type">Room type</option>
                                        <option value="1">Laxaries Rooms</option>
                                        <option value="2">Deluxe Room</option>
                                        <option value="3">Signature Room</option>
                                        <option value="4">Couple Room</option>
                                    </select>
                                </div>
                                <div className="col-xl-12">
                                    <button type="submit" className="boxed-btn3">Check Availability</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </form>
        </div>
    )
}
