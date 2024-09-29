import ThemeButton from "../Button/ThemeButton";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className=" w-[100%] dark:bg-black  flex gap-[1rem] sticky top-0 items-center px-[7rem] justify-between  h-[4rem]   ">
      <div className=" flex items-center justify-center gap-[1rem]  ">
        <p>Abhay</p>
        <p>Vikalp</p>
        <p>Vimal</p>
        <p>Ayush</p>
        <p>Devang</p>
      </div>

      <div>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
