import Image from "next/image";

const SizeSelection = ({ burger, size, setSize }) => {
  return (
    <div className="flex items-center justify-center max-w-sm mx-auto lg:max-w-none lg:justify-start">
      {/* sizes */}
      <div className="flex items-baseline mb-10 font-medium gap-x-12">
        {/* small */}
        <label className="flex flex-col items-center cursor-pointer gap-x-2">
          <Image
            className={`${
              size === "small"
                ? "border-2 border-primary p-[2px]"
                : "border-transparent filter saturate-[.1]"
            } mb-1  rounded-md `}
            src={burger.image}
            width={50}
            height={50}
            alt=""
          />
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Small
        </label>
        {/* medium */}
        <label className="flex flex-col items-center cursor-pointer gap-x-2">
          <Image
            className={`${
              size === "medium"
                ? "border-2 border-primary p-[2px]"
                : "border-transparent filter saturate-[.1]"
            } mb-1 rounded-md`}
            src={burger.image}
            width={65}
            height={65}
            alt=""
          />
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === "medium"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none "
          />
          Medium
        </label>
        {/* large */}
        <label className="flex flex-col items-center cursor-pointer gap-x-2">
          <Image
            className={`${
              size === "large"
                ? "border-2 border-primary p-[2px]"
                : "border-transparent filter saturate-[.1]"
            } mb-1 rounded-md`}
            src={burger.image}
            width={80}
            height={80}
            alt=""
          />
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === "large"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none "
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
