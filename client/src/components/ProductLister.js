import React, { useEffect, useState } from "react";
import "../css/ProductLister.css";
import ProductList from "./ProductList";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  position: absolute;
  bottom: -${(props) => props.bottom}%;
  left: 20%;
  z-index: 10;
  ${mobile({ left: "7%" })}
`;

const ProductLister = ({ bottom, productBool }) => {
  const arr = [1, 2, 3, 4];

  const slide = Array.from(document.querySelectorAll(".product-list"));

  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  // const [prevTranslate, setPrevTranslate] = useState(0);
  const prevTranslate = 0;
  const [animationId, setAnimationId] = useState(0);
  // const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    slide.forEach((slide, index) => {
      const slideImage = slide.querySelector("img");
      slideImage.addEventListener("dragstart", (e) => e.preventDefault());
    });

    // Disable
    window.oncontextmenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
  }, [slide]);

  function touchStart(e) {
    const sliders = Array.from(document.querySelectorAll(".product-lister"));
    setStartPos(getPositionX(e));
    setIsDragging(true);

    setAnimationId(requestAnimationFrame(animation));
    sliders.forEach((slider) => {
      slider.classList.add("grabbing");
    });
  }

  function touchEnd() {
    const sliders = Array.from(document.querySelectorAll(".product-lister"));
    setIsDragging(false);

    cancelAnimationFrame(animationId);
    sliders.forEach((slider) => {
      slider.classList.remove("grabbing");
    });
  }

  function touchMove(e) {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      // console.log("move");
      setCurrentTranslate(prevTranslate + currentPosition - startPos);
    }
  }

  function getPositionX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    const sliders = Array.from(document.querySelectorAll(".product-lister"));

    sliders.forEach((slider) => {
      slider.style.transform = `translateX(${currentTranslate}px)`;
    });
  }

  return (
    <Container
      bottom={bottom}
      className="product-lister"
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onTouchMove={touchMove}
      onMouseDown={touchStart}
      onMouseUp={touchEnd}
      onMouseLeave={touchEnd}
      onMouseMove={touchMove}
    >
      {productBool && <h2 className="title">Latest Listings</h2>}
      <div className="container">
        {arr.map((product, index) => (
          <ProductList key={index} />
        ))}
      </div>
    </Container>
  );
};

export default ProductLister;
