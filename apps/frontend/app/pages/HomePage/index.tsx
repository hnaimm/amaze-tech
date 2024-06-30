import Image from "next/image";
import Navbar from "../../components/Navbar";
import { IconButton } from "@radix-ui/themes";
import "./HomePage.css";
import "../../globals.css";
import "../../page.module.css";
import ProductCard from "../../components/ProductCard";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import CategoryCard from "../../components/CategoryCard";

const HomePage = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] mx-auto pt-4">
      <Navbar />

      <section id="home" className="flex flex-col justify-center items-center">
        <div className="pt-28">
          <h1 className="text-7xl text-[#1f1f1f] mb-12">
            Redefining Your
            <br />
            Tech Experience
          </h1>
          <div className="relative">
            <Image
              src="/banner-1.jpg"
              width={1300}
              height={300}
              alt="Banner Image"
              className="rounded-3xl"
            />
            <div className="info-box rounded-3xl bg-white px-8  py-6 w-[350px] absolute bottom-0 right-0 text-lg">
              <p className="mb-6">
                At ShiftSmart, we're redefining your tech experience by offering
                the latest & most innovative products.
              </p>
              <button className="bg-[#1f1f1f] rounded-full text-white px-6 py-3">
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogue">
        <h1 className="text-6xl text-[#1f1f1f] mt-20 mb-12">
          Featured Products
        </h1>

        <div className="flex flex-row gap-3 justify-around">
          <ProductCard
            id="1"
            name="Wireless Keyboard"
            price="$300.00"
            image={"/13.jpg"}
            featured
          />
          <ProductCard
            id="2"
            name="Wireless Keyboard"
            price="$300.00"
            image={"/7.jpg"}
            featured
          />
          <ProductCard
            id="3"
            name="Wireless Keyboard"
            price="$300.00"
            image={"/2.jpg"}
            featured
          />
        </div>
      </section>

      <section
        id="collections"
        //   className="bg-[#edf2f4]"
      >
        <div className="mt-20 mb-12 flex flex-row justify-between items-center">
          <h1 className="text-6xl text-[#1f1f1f] ">Shop By Category</h1>
          <div className="flex flex-row gap-4">
            <IconButton className="bg-white" color="ruby">
              <ArrowLeftIcon width="18" height="18" />
            </IconButton>
            <IconButton className="bg-white" color="ruby">
              <ArrowRightIcon width="18" height="18" />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-around">
          <CategoryCard id="1" name="Watches" image={"/13.jpg"} />
          <CategoryCard id="2" name="Screens" image={"/7.jpg"} />
          <CategoryCard id="3" name="Keyboards" image={"/2.jpg"} />
        </div>
      </section>

      {/* <section id="popular">popular</section> */}
    </div>
  );
};

export default HomePage;
