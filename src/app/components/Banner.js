const Banner = () => {
  return (
    <section className="w-full h-[85vh] bg-no-repeat bg-bottom bg-cover bg-bgHero">
      <div className="container mx-auto">
        {/* info */}
        <div className="p-3 pt-20 text-center">
          <h1 className="text-6xl font-bold text-white/95 md:text-7xl font-bangers">
            Taste the <br /> best <span className="text-secondary">burger</span>{" "}
            in town now!
          </h1>
          <p className="text-white/80 font-semibold text-lg w-full md:w-[350px] py-5 mx-auto font-md">
            And from this had sacred loved florid his are shun loved florid his
            are this had sacred loved florid his shun..
          </p>
          <button className="px-5 py-3 btn btn-secondary">GO TO MENU</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
