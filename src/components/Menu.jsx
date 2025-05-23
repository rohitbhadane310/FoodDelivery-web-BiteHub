import React from "react";

const dishes = [
  {
    id: 1,
    name: "Chicken Burger",
    price: "$5.99",
    tag: "Hot",
    image: "src/assets/img/menu1.png",
  },
  {
    id: 2,
    name: "Peri Peri Pizza",
    price: "$8.49",
    tag: "New",
    image: "src/assets/img/menu2.png",
  },
  {
    id: 3,
    name: "Sushi Deluxe",
    price: "$6.25",
    tag: "",
    image: "src/assets/img/menu3.png",
  },
  {
    id: 4,
    name: "Paneer Poppers",
    price: "$7.80",
    tag: "Hot",
    image: "src/assets/img/menu4.png",
  },
  {
    id: 5,
    name: "Club Sandwich",
    price: "$3.20",
    tag: "",
    image: "src/assets/img/menu5.png",
  },
  {
    id: 6,
    name: "Mocktail Mojito",
    price: "$4.75",
    tag: "New",
    image: "src/assets/img/menu6.png",
  },
  {
    id: 7,
    name: "Nacho Fiesta",
    price: "$7.80",
    tag: "Hot",
    image: "src/assets/img/menu7.png",
  },
  {
    id: 8,
    name: "Biryani Bowl",
    price: "$3.20",
    tag: "",
    image: "src/assets/img/menu8.png",
  },
];

const Menu = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-5 lg:px-14 transition-colors duration-300">
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium uppercase tracking-wider mb-2">
          Our Menu
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Top Picks For You</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="group bg-gray-100 dark:bg-[#1F1D2B] p-6 rounded-2xl hover:bg-orange-500 dark:hover:bg-orange-500 transition-all duration-300"
          >
            <div className="relative mb-4">
              <img src={dish.image} alt={dish.name} className="mx-auto" />
              {dish.tag && (
                <span className="absolute -top-3.5 -left-4 bg-orange-500 text-white group-hover:bg-black text-xs px-2 py-1 rounded-md">
                  {dish.tag}
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
              {dish.name}
            </h3>
            <p className="text-lg font-bold text-orange-500 group-hover:text-white transition-colors duration-300">
              {dish.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
