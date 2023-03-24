import Image from "next/image";

type ImgFoodType = {
  src: string;
  alt: string;
  key: string;
};
export default function FoodList() {
  function TestFood(props: ImgFoodType) {
    return (
      <Image
        src={props.src}
        alt={props.alt}
        key={props.key}
        width={250}
        height={200}
      />
    );
  }

  function TestFoodList() {
    const imgNum = Array.from({ length: 25 }, (v, i) => i + 1);
    const rtnList = imgNum.map((one) => {
      return (
        <TestFood
          src={"/images/food-" + one + ".jpg"}
          alt={"food-" + one}
          key={"food-" + one}
        />
      );
    });

    return <div>{rtnList}</div>;
  }

  return (
    <>
      <TestFoodList />
    </>
  );
}
