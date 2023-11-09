import Link from "next/link";

const NavigationDots = ({ active }) => (
  <div className="app__navigation flex justify-center items-center flex-col p-4 ">
    {["home", "about", "work", "blog", "contact"].map((item, index) => (
      <Link
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot w-3 h-3 rounded-full bg-[#cbcbcb] m-2 hover:bg-secondary "
        style={active === item ? { backgroundColor: "#313BAC" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
