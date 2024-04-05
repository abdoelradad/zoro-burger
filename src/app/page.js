import Banner from "./components/Banner";
import Burger from "./components/Burger";

// pizza data
const burgers = [
  {
    id: 1,
    name: "capricciosa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/assets/burgers/1.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: "/assets/extras/cherry.webp",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/fresh-tomatoes.webp",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/jalapeno.webp",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/assets/extras/parmesan.webp",
        name: "parmesan",
        price: 2,
      },
    ],
  },

  {
    id: 2,
    name: "cheesy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/assets/burgers/2.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/assets/extras/cherry.webp",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/fresh-tomatoes.webp",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/jalapeno.webp",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/assets/extras/parmesan.webp",
        name: "parmesan",
        price: 2,
      },
    ],
  },

  {
    id: 3,
    name: "hawaii",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/assets/burgers/3.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/assets/extras/cherry.webp",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/fresh-tomatoes.webp",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/jalapeno.webp",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/assets/extras/parmesan.webp",
        name: "parmesan",
        price: 2,
      },
    ],
  },

  {
    id: 4,
    name: "italian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/assets/burgers/4.webp",
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: "/assets/extras/cherry.webp",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/fresh-tomatoes.webp",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/jalapeno.webp",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/assets/extras/parmesan.webp",
        name: "parmesan",
        price: 2,
      },
    ],
  },

  {
    id: 5,
    name: "margherita",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/assets/burgers/5.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: "/assets/extras/cherry.webp",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/fresh-tomatoes.webp",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/jalapeno.webp",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/assets/extras/parmesan.webp",
        name: "parmesan",
        price: 2,
      },
    ],
  },

  {
    id: 6,
    name: "pepperoni",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/assets/burgers/6.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/assets/extras/cherry.webp",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/fresh-tomatoes.webp",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/jalapeno.webp",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/assets/extras/parmesan.webp",
        name: "parmesan",
        price: 2,
      },
    ],
  },

  {
    id: 7,
    name: "quattro stagioni",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/assets/burgers/8.webp",
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: "/assets/extras/cherry.webp",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/fresh-tomatoes.webp",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/jalapeno.webp",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/assets/extras/parmesan.webp",
        name: "parmesan",
        price: 2,
      },
    ],
  },

  {
    id: 8,
    name: "tonno",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/assets/burgers/9.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/assets/extras/cherry.webp",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/fresh-tomatoes.webp",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/jalapeno.webp",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/assets/extras/parmesan.webp",
        name: "parmesan",
        price: 2,
      },
    ],
  },

  {
    id: 9,
    name: "vegetarian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/assets/burgers/10.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: "/assets/extras/cherry.webp",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/fresh-tomatoes.webp",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/assets/extras/jalapeno.webp",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/assets/extras/parmesan.webp",
        name: "parmesan",
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return (
    <section>
      <Banner />
      <div className="container mx-auto">
        {/* burger grid */}
        <div className="grid grid-cols-1 gap-[36px] md:grid-cols-3 md:gap-[16px] xl:grid-cols-4 xl:gap-[30px] py-32">
          {burgers.map((burger) => {
            return <Burger burger={burger} />;
          })}
        </div>
      </div>
    </section>
  );
}
