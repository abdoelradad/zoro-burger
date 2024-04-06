const Banner = () => {
  return (
    <section className="w-full h-[85vh] pt-10 bg-no-repeat bg-bottom bg-cover bg-bgHero">
      <div className="container mx-auto">
        {/* info */}
        <div className="p-3 pt-20 text-center">
          <h1 className="text-6xl font-bold text-white md:text-7xl font-bangers">
            Taste the <br /> best <span className="text-secondary">burger</span>{" "}
            in town now!
          </h1>
          <p className="text-white font-bold text-lg w-full md:w-[350px] py-5 mx-auto font-md">
            And from this had sacred loved florid his are shun loved florid his
            are this had sacred loved florid his shun..
          </p>
          <button className="px-6 py-3 text-2xl font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-secondary/90 bg-secondary font-robotoCondensed">
            know more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
