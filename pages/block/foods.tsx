import Image from "next/image";
import styles from "@/styles/Home.module.css";

type ImgFoodType = {
  src: string;
  alt: string;
};
export default function FoodList() {
  function TestFood(props: ImgFoodType) {
    return (
      <Image
        src={props.src}
        alt={props.alt}
        width={270}
        height={200}
        className={styles.myimg}
      />
    );
  }

  function TestFoodList() {
    const imgNum = Array.from({ length: 5 }, (v, i) => i + 1);
    const rtnList = imgNum.map((one, idx) => {
      return (
        <TestFood
          src={"/images/food-" + one + ".jpg"}
          alt={"food-" + one}
          key={idx}
        />
      );
    });

    return <div className={styles.fooddiv}>{rtnList}</div>;
  }

  return (
    <>
      <TestFoodList />
    </>
  );
}
