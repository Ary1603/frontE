import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// BOOTSRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// COMPONENTS
import EcommerceNavbar from "./components/EcommerceNavbar";
import EcommerceCarrousel from "./components/EcommerceCarrousel";
import PingsCards from "./components/PingsCards";

//IMPORT ICONS
import { SiOrigin } from "react-icons/si";
import { MdOutlineSentimentVerySatisfied, MdFiberNew } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";

// BD provicional brands
export const brands = [
  {
    name: "Chanel",
    img: "https://1000marcas.net/wp-content/uploads/2019/12/logo-Chanel.png",
  },
  {
    name: "Calvin Klein",
    img: "https://i.pinimg.com/originals/cf/43/b1/cf43b15c7ba9e3517f41ef27b6c26e03.jpg",
  },
  {
    name: "Nautica",
    img: "https://1000marcas.net/wp-content/uploads/2021/05/Nautica-Watches-Logo.png",
  },
  {
    name: "Gucci",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/997px-Gucci_logo.svg.png",
  },
  {
    name: "Dolce & Gabbana",
    img: "https://1000marcas.net/wp-content/uploads/2020/01/logo-Dolce-and-Gabbana.png",
  },
  {
    name: "Adidas",
    img: "https://graffica.info/wp-content/uploads/2022/12/Adidas-Logo-1971.jpeg",
  },
  {
    name: "Levis",
    img: "https://1000marcas.net/wp-content/uploads/2020/01/Levis-emblema.jpg",
  },
  {
    name: "Rolex",
    img: "https://thumbs.dreamstime.com/b/logo-rolex-129555490.jpg",
  },
];

// PINGS DB

export const pings = [
  {
    icon: <SiOrigin />,
    ping_title: "Original Products",
    ping_description:
      "We provide money back guarantee if the product are not original",
  },
  {
    icon: <MdOutlineSentimentVerySatisfied />,
    ping_title: "Satisfaction Guarantee",
    ping_description:
      "Exchange the product you've purchased if it doesn't fit on you",
  },
  {
    icon: <MdFiberNew />,
    ping_title: "New Arrival Everyday",
    ping_description: "We update our collections almost everyday",
  },
  {
    icon: <FaShippingFast />,
    ping_title: "Fast & Free Shipping",
    ping_description: "We offer fast and free shipping for our loyal costumers",
  },
];
function App() {
  const [categories, setCategories] = useState();
  //Fetch
  const fetchCategories = (url) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.menuItems);
        setCategories(data);
        console.log(data);
      })
      .catch((error) => console.error("Error en la peticion: " + error));
  };

  useEffect(() => {
    fetchCategories("https://api.escuelajs.co/api/v1/categories");
  }, []);

  return (
    <>
      <div className="strip-offers">
        <p>
          Sign up GET 20% OFF for your first order.{" "}
          <a href="#" id="sign-up-now-strip-offer">
            Sign up now
          </a>
        </p>
      </div>

      <div className="landing-page-body-container">
        {/* NAVBAR */}
        <EcommerceNavbar />
        {/* CARROUSEL */}
        <EcommerceCarrousel />
        <h2 className="brands-title">Brands</h2>
        <div className="container-img-brands">
          {brands.map((brand, key) => (
            <img key={key} src={brand.img} alt="" className="brand-images" />
          ))}
        </div>
        {/* SLOGANS CONTAINER */}
        <div className="slogans-container">
          <p>
            We provide best <br />
            customers experiences.
          </p>
          <div className="our-insurance-slogan">
            <p>We ensure our costumers have the best shopping experience</p>
          </div>
        </div>

        {/* PINGS CONTAINER */}
        <div className="pings-container">
          {/* Component for the cards of the pings */}
          <PingsCards pings={pings} />
        </div>
        {/* CATEGORIES CONTAINER */}
        <h2 className="categories-title">Categories</h2>
        <Container fluid="lg">
          <Row>
            {categories ? (
              categories.map((category, index) => (
                <Col key={index}>
                  <div
                    className="categoy-card"
                    style={{ backgroundImage: `url(${category.image})` }}
                  >
                    <button className="cssbuttons-io-button">
                      {" "}
                      {category.name}
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </Col>
              ))
            ) : (
              <></>
            )}
          </Row>
        </Container>

        {/* AD CONTAINER */}

        <div className="ad-container">
          <img
            src="https://media.gq.com.mx/photos/62cf470ee59053d5b54afd40/16:9/w_2991,h_1682,c_limit/que-es-aesthetic-como-llevarlo.jpg"
            alt=""
            id="ad-img"
          />
          <div className="ad-text-info">
            <p id="limited-offer-text">LIMITED OFFER</p>
            <p className="ad-text-offer" id="offer-text">
              35% off only this Friday <br />
              and get special gift
            </p>
            <button className="btn-grab-it-now">
              Grab it now <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* NEWSLETTER CONTAINER */}
      <div className="subscribe-newsletter-container">
        <h2>
          Subscribe to our newsletter to get updates <br />
          to our latest collections
        </h2>
        <p id="newsletter-offer">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>
        <input
          type="text"
          className="email-input-newsletter"
          placeholder="Enter your email"
        />
        <button className="btn-subscribe-newsletter">Susbcribe</button>
        <p id="fake-blood-policy">
          Read our policy <u>here</u>
        </p>
      </div>

      {/* FOOTER */}
      <footer>
        <Container fluid="lg">
          <Row>
            <Col>
              <div className="footer-section" id="store-description-container">
                <h3 id="description-store-name">Fake Blood</h3>
                <p id="description">
                  Specializes in providing high-quality, stylish <br />
                  products for your wardrobe
                </p>
              </div>
            </Col>

            <Col>
              <div className="footer-section" id="footer-shop-section">
                <h4 className="footer-title-sections">SHOP</h4>
                <ul className="ul-footer">
                  <li>All Collections</li>
                  <li>Winter Edition</li>
                  <li>Discount</li>
                </ul>
              </div>
            </Col>

            <Col>
              <div className="footer-section" id="footer-company-section">
                <h4 className="footer-title-sections">COMPANY</h4>
                <ul className="ul-footer">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Alfiliates</li>
                </ul>
              </div>
            </Col>

            <Col>
              <div className="footer-section" id="footer-support-section">
                <h4 className="footer-title-sections">SUPPORT</h4>
                <ul className="ul-footer">
                  <li>FAQs</li>
                  <li>Cookie Policy</li>
                  <li>Terms of Use</li>
                </ul>
              </div>
            </Col>

            <Col>
              <div
                className="footer-section"
                id="footer-payment-methods-section"
              >
                <h4 className="footer-title-sections">PAYMENT METHODS</h4>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <hr />

        <p id="copyright-term">
          Copyright ©2023 Fake Blood. All right reserved
        </p>
      </footer>
    </>
  );
}

export default App;
