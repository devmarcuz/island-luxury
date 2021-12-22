import React, { useEffect, useState } from "react";
import Select from "react-select";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaAngleDown } from "react-icons/fa";
import "../css/PropertySearchHero.css";
import ProductLister from "./ProductLister";

const PropertySearchHero = () => {
  const [priceObj, setPriceObj] = useState([]);
  const [shops, setShops] = useState([]);
  const [formData, setFormData] = useState({
    bedroom: "any",
    shop: "any",
  });
  const [bottom, setBottom] = useState("15");

  const bedrooms = [
    { value: "any", label: "Any" },
    {
      value: "Furnished",
      label: "Furnished",
    },
    { value: "Unfurnished", label: "Unfurnished" },
  ];

  useEffect(() => {
    const price = [
      "100,000",
      "200,000",
      "250,000",
      "300,000",
      "400,000",
      "500,000",
      "600,000",
      "700,000",
      "750,000",
      "800,000",
      "900,000",
      "1 Million",
      "2 Million",
      "3 Million",
      "5 Million",
      "10 Million",
      "20 Million",
      "40 Million",
      "60 Million",
      "80 Million",
      "100 Million",
      "150 Million",
      "200 Million",
      "250 Million",
      "300 Million",
      "400 Million",
      "500 Million",
      "600 Million",
      "700 Million",
      "800 Million",
      "900 Million",
      "1 Billion",
      "5 Billion",
      "10 Billion",
      "20 Billion",
      "30 Billion",
      "40 Billion",
      "50 Billion",
    ];
    let arr = [{ value: "No Min", label: "No Min" }];
    // setPriceObj(["a"]);

    price.forEach((prs) => {
      let obj = { value: prs, label: prs };
      arr.push(obj);
      // console.log(priceObj);
    });
    setPriceObj([...arr]);
  }, []);

  useEffect(() => {
    const shops = [
      "Shop",
      "Office Spaces",
      "Flats and Apartments",
      "Lands",
      "Semi Detached Bungalow",
      "Semi Detached Duplex",
      "Co-working Space",
      "Detached Bungalow",
      "Warehouse",
      "Shop in A Mall",
      "Self Contain",
      "Mini Flats",
      "Detached Duplex",
      "Houses",
      "Terraced Bungalow",
      "Commercial Properties",
      "Terraced Duplex",
      "residential-land",
      "commercial-land",
      "industrial-land",
      "Mixed-Use Land",
      "other-land",
    ];
    let arr = [{ value: "any", label: "Any" }];

    shops.forEach((prs) => {
      let obj = { value: prs, label: prs };
      arr.push(obj);
    });
    setShops([...arr]);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (body.clientWidth <= 500) {
      setBottom("13");
    } else {
      setBottom("15");
    }
  }, []);

  const productBool = false;

  return (
    <div className="property-search-hero">
      <h1>PROPERTY SEARCH</h1>

      <div className="head">
        <h3>
          PROPERTY
          <br />
          SEARCH
        </h3>
      </div>
      <div className="form">
        <div className="rw-1">
          <p>Buy</p>
          <p>Rent</p>
          <p>Sell</p>
        </div>
        <form action="">
          <div className="label">
            <label htmlFor="address">ADDRESS</label>
            <input type="text" name="address" placeholder="Address" />
          </div>
          <div className="flex">
            <div className="label">
              <label htmlFor="bedrooms">BEDROOMS</label>
              <Select
                options={bedrooms}
                className="select"
                placeholder={"Select bedroom..."}
                // value={bedrooms}
                onChange={(e) => {
                  setFormData({ ...formData, bedroom: e.value });
                }}
              />
              <div className="caret">
                <FaAngleDown className="caret-icon" />
              </div>
            </div>
            <div className="label">
              <label htmlFor="min_price">MIN. PRICE</label>
              <Select
                options={priceObj}
                className="select"
                placeholder={"Select price..."}
                // value={sex}
              />
              <div className="caret">
                <FaAngleDown className="caret-icon" />
              </div>
            </div>
            <div className="label">
              <label htmlFor="type">TYPE</label>
              <Select
                options={shops}
                className="select"
                placeholder={"Select type"}
                // value={sex}
              />
              <div className="caret">
                <FaAngleDown className="caret-icon" />
              </div>
            </div>
            <div className="label">
              <label htmlFor="max_price">MAX. PRICE</label>
              <Select
                options={priceObj}
                className="select"
                placeholder={"Select price..."}
                // value={sex}
              />
              <div className="caret">
                <FaAngleDown className="caret-icon" />
              </div>
            </div>
          </div>
          <div className="img">
            <div className="emp"></div>
            <img src="/images/search_btn.svg" alt="" />
          </div>
        </form>
      </div>
      <h2 className="social">Reach us on our social media platforms</h2>
      <p className="rvw">
        We always want to hear from you our dear friends about our services and give feedbacks.
        <br /> Reach us on our social media platforms for feedbacks and suggestion on our services.
      </p>
      <div className="icons">
        <a href="/" target="blank">
          <FaFacebookF />
        </a>
        <a href="/" target="blank">
          <FaInstagram />
        </a>
        <a href="/" target="blank">
          <FaTwitter />
        </a>
        <a href="/" target="blank">
          <FaWhatsapp />
        </a>
        <a href="/" target="blank">
          <img src="/images/gmail.svg" alt="" />
        </a>
      </div>
      <ProductLister bottom={bottom} productBool={productBool} />
    </div>
  );
};

export default PropertySearchHero;
