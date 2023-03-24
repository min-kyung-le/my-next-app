import styles from "@/styles/Home.module.css";
import { gsap } from "gsap";
import { useRef, useEffect, useLayoutEffect } from "react";
import FoodList from "./foods";

let tl = gsap.timeline();
export default function InfoText() {
  const text = "뭐 먹지? 고민하지 말고 고르자. 메뉴 추천 받자!";

  const cardRef = useRef<HTMLDivElement>(null);
  const foodRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //카드 돌리기
    tl.fromTo(
      cardRef.current,
      {
        rotationY: 0,
        duration: 3,
        x: 300,
        ease: "power3.out",
        transformOrigin: "0%",
      },
      {
        rotationY: 360,
        duration: 3,
        x: 0,
        ease: "power3.out",
        transformOrigin: "0%",
      }
    );
    //next.config.js에 reactStrictMode때문에 두 번 렌더링함
    //카드 없애기
    tl.to(cardRef.current, {
      x: -100,
      scale: 2,
      duration: 1,
      ease: "power3.out",
    }).to(cardRef.current, {
      scale: 0,
      duration: 1,
      ease: "power3.out",
    });
    //음식 나타나기
    tl.to(foodRef.current, {
      x: 0,
      display: "block",
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <div ref={cardRef}>
        <div className={styles.infodiv}>
          <div className={styles.infotext}>{text}</div>
        </div>
      </div>
      <div ref={foodRef} className={styles.foodcontainer}>
        <FoodList />
      </div>
    </>
  );
}
