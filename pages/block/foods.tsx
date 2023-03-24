import Image from "next/image";

type ImgFoodType = {
  src: string;
  alt: string;
};
export default function FoodList() {
  function TestFood(props: ImgFoodType) {
    return <Image src={props.src} alt={props.alt} width={250} height={200} />;
  }

  function TestFoodList() {
    const imgNum = Array.from({ length: 25 }, (v, i) => i + 1);
    const rtnList = imgNum.map((one, idx) => {
      return (
        <TestFood
          src={"/images/food-" + one + ".jpg"}
          alt={"food-" + one}
          key={idx}
        />
      );
    });

    return <div className="grid gap-4 grid-cols-6 grid-rows-5">{rtnList}</div>;
  }

  return (
    <>
      <TestFoodList />
    </>
  );
}
