
export default function About() {
  return (
    <div className="w-full overflow-hidden">
      {/* First Section- Image and Breadcrumb */}
      <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="unsplash_4ycv3Ky1ZZU.png"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            About Us
          </h2>
          <div className="flex items-center space-x-2 text-white">
            <a href="/" className="text-white">Home</a>
            <span className="text-white"> &gt; </span>
            <a href="/about" className="text-orange-500">About</a>
          </div>
        </div>
      </div>
      {/* Second Section: Content and Buttons */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
            <img
             src="lemon.svg"
              className="object-cover object-center w-336px h-536px mt-530px ml-300px radius-6px"
              alt="hero"
             
            />
          </div>
          {/* Right Images */}
          <div className="flex flex-col space-y-2 space-x-2 mt-2">
            <img
              src="yogurt.svg"
              className=" object-center w-309px h-271px mt-584px ml-660px radius-6px"
              alt="image2"
            />
            {/* Bottom Image */}
            <img
              className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
              alt="image3"
              src="pasta.svg"
            />
          </div>
          {/* Text Content and Buttons */}
          <div className="mt-20 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-sm mb-6 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-5xl w-[524px] font-bold mb-6">
              Food is an important part of a balanced Diet
            </p>
            <p className="text-black mb-8 leading-relaxed mt-8 w-[526px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center mt-8">
              <button className="inline-flex text-white bg-[#FF9F0D] border-0 py-5 px-10 w-[195px] focus:outline-none rounded-lg text-lg ">
                Show More
              </button>
              <button className="ml-4 inline-flex text-white border-0 py-2 px-3 focus:outline-none rounded text-lg">
                {/* <IoPlayOutline className="mr-2 text-white" /> Icon on the left */}
                <img src="Component 1.png" className="mr-2 text-black"/>
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <h1 className="text-5xl text-black text-bold mt-3 mb-4"><b>Why Choose Us</b></h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
              pellentesque bibendum non dui volutpat fringilla bibendum.
          <img
            className="mb-10 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-10"
            alt="hero"
            src = "/s3-im2.svg"
          />
        </div>
      </section>
      {/* Fourth section */}
      <section className="text-black body-font">
  <div className="container px-3 py-20 mx-auto">
    <div className="flex flex-wrap mt-[-80px] ml-20">
      <div className="p-4 md:w-1/3 w-[1320px]">
        <div className="h-full border-2 rounded-lg overflow-hidden w-[375px]">
          <img
            className="lg:h-48 md:h-36 w-full  object-center justify-center"
            src="/Student.svg"
            width={80}
            height={60}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-5xl font-medium text-black mb-2 text-bold text-center">
            <b>BEST CHEF</b>
            </h1>
            <p className="leading-relaxed mb-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 rounded-lg overflow-hidden w-[380px]">
          <img
            className="lg:h-48 md:h-36 w-full  justify-center"
            width={80}
            height={60}
            src="Coffee.svg"
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-5xl font-medium text-black mb-2 text-bold text-center">
            <b>120 Item Food</b>
            </h1>
            <p className="leading-relaxed mb-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 rounded-lg overflow-hidden w-[375px]">
          <img
            className="lg:h-48 md:h-36 w-full object-center justify-center"
            width={80}
            height={60}
            src="Person.svg"
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-5xl font-medium text-black mb-2 text-bold text-center">
            <b>Clean Environment</b>
            </h1>
            <p className="leading-relaxed mb-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     {/* ---------------- Section - 7 ------------------ */}
     <div className="w-full lg:h-[920px] bg-white bg-opacity-97 p-4">
  {/* Header Section */}
  <div className="relative flex flex-col lg:ml-40 lg:w-[770px] text-center lg:text-left">
  <img src="/Group 1000002250.svg" className="lg:ml-[-320px]  h-10"/>
    <h1 className="logo mb-4 text-3xl lg:text-5xl mt-4 text-black font-bold">
      What our client are saying
    </h1>
  </div>

  {/* Review Div */}
  <div className="w-full mt-20 lg:w-[868px] md:w-[500px] lg:h-[461px] bg-white flex flex-col items-center justify-center mt-16 lg:mt-36 mx-auto shadow-lg shadow-gray-500/40 p-6 lg:p-10">
    {/* Client Image */}
    <img
      src="Ellipse 6.svg"
      className="w-28 h-28 lg:w-auto lg:h-auto rounded-full mt-[-80px] lg:mt-[-120px] mb-8"
    />
    <img src="Quotes.svg" className="w-8 lg:w-auto" />
    {/* Review Text */}
    <p className="text-sm lg:text-base text-center mt-8 mb-10 px-2 lg:px-10 leading-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias
      soluta sit quasi rem eveniet nisi autem ipsa voluptatum corporis! Aut,
      voluptatum quas ipsum molestiae at nobis! Quas, cum. Maiores. Adipisci
      sapiente accusamus, ipsum alias blanditiis in obcaecati, quam, ut totam
      enim sequi nostrum.
    </p>
    {/* Rating */}
    <img src="star.svg" className="w-32 lg:w-auto" />
    {/* Client Name */}
    <p className="mt-6 mb-2 font-arial text-xl lg:text-3xl font-bold text-center">
      Alamin Hassan
    </p>
    {/* Client Role */}
    <p className="text-sm lg:text-base text-center">Food Socialist</p>
  </div>
</div>
</div>
  );
}