import Link from "next/link";

const NavigationDots = ({ active }) => (
  <ul className="absolute right-0 hidden xs:flex items-end justify-center flex-col p-1 xxs:p-4 ">
    {["home", "about", "work", "blog", "testimonials", "contact"].map(
      (item, index) => (
        <Link href={`#${item}`} key={index} className="my-0 mx-4 flex group">
          <div className="hidden mb-1 mr-2 uppercase group-hover:flex text-white transition-all ease-in-out">
            {item}{" "}
          </div>
          <li
            className="w-3 h-3 rounded-full bg-white m-2 hover:bg-secondary"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        </Link>
      )
    )}
  </ul>
);

export default NavigationDots;
