import styles from "@/styles/Home.module.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function InfoText() {
  const text = "뭐 먹지? 고민하지 말고 고르자. 메뉴 추천 받자!";

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      rotationY: 360,
      duration: 4,
      ease: "bounce.out",
    });
  });

  return (
    <div className={styles.infodiv} ref={boxRef}>
      <div className={styles.infotext}>{text}</div>
    </div>
  );
}
