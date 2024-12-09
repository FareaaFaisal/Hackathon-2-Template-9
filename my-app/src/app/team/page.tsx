import Link from "next/link";

export default function About() {
    return (
      <div className="w-full overflow-hidden">
        {/* navbar */}
        <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <img
            src="unsplash_4ycv3Ky1ZZU.png"
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
              Our Chef
            </h2>
            <div className="flex items-center space-x-2 text-white">
              <Link href="/" className="text-white">Home</Link>
              <span className="text-white"> &gt; </span>
              <Link href="/about" className="text-orange-500">Chef</Link>
            </div>
          </div>
        </div>


         {/* team div */}
         <div className="flex flex-col gap-6 justify-center items-center mt-20 mb-20">

          {/*  1st Row */} 
         <div className="flex flex-row">
            <div className="flex flex-col justify-center h-[446px] w-[312px] gap-2">
                <img src="c1.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">Tahmina Rumi</p>
                <p className="items-center">Chef</p>
            </div>

            <div className="flex flex-col justify-center text-center gap-2">
                <img src="c2.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">Jorina Begum</p>
                <p className="">Chef</p>
            </div>

            <div className="flex flex-col justify-center text-center gap-2">
                <img src="c3.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">M.Mohammad</p>
                <p className="">Chef</p>
            </div>

            <div className="flex flex-col justify-center text-center gap-2">
                <img src="c4.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">Munna Kathy</p>
                <p className="">Chef</p>
            </div>
         </div>

          {/* 2nd Row */}
         <div className="flex flex-row">
            <div className="flex flex-col justify-center h-[446px] w-[312px] gap-2">
                <img src="c5.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">Tahmina Rumi</p>
                <p className="items-center">Chef</p>
            </div>

            <div className="flex flex-col justify-center text-center gap-2">
                <img src="c6.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">Bisgu Devgan</p>
                <p className="">Chef</p>
            </div>

            <div className="flex flex-col justify-center text-center gap-2">
                <img src="c7.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">Motin Molladsf</p>
                <p className="">Chef</p>
            </div>

            <div className="flex flex-col justify-center text-center gap-2">
                <img src="c8.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">William Rumi</p>
                <p className="">Chef</p>
            </div>
         </div>

          {/* 3rd Row */}
          <div className="flex flex-row">
            <div className="flex flex-col justify-center h-[446px] w-[312px] gap-2">
                <img src="c9.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">Kets William Roy</p>
                <p className="items-center">Chef</p>
            </div>

            <div className="flex flex-col justify-center text-center gap-2">
                <img src="c10.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">Mahmud Khalol</p>
                <p className="">Chef</p>
            </div>

            <div className="flex flex-col justify-center text-center gap-2">
                <img src="c11.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">Ataur Rahman</p>
                <p className="">Chef</p>
            </div>

            <div className="flex flex-col justify-center text-center gap-2">
                <img src="c12.png" className="w-[312px] h-[379px]" />
                <p className="text-xl text-[#333333] font-bold">Monalisa holly</p>
                <p className="">Chef</p>
            </div>
         </div>
        </div>


        </div>
    )
  }
