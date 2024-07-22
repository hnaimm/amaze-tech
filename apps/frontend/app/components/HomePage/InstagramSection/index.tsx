import { InstagramEmbed } from "react-social-media-embed";
import RoundedRectangleButton from "../../../ui/RoundedRectangleButton";

const InstagramSection = () => {
  return (
    <>
      <div className="mt-20 mb-12 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-4xl text-[#1f1f1f]">
          Check Our Latest Posts on Instagram
        </h1>
        <RoundedRectangleButton className="gradient-button">
          Follow Us on Instagram
        </RoundedRectangleButton>
      </div>

      <div className="flex flex-row gap-2 justify-around">
        <InstagramEmbed
          url="https://www.instagram.com/reel/C9hQn77IRFT/"
          width={350}
        />
        <InstagramEmbed
          url="https://www.instagram.com/reel/C8HdVt1q4e_/"
          width={350}
          className="hidden sm:hidden md:block"
        />
        <InstagramEmbed
          url="https://www.instagram.com/reel/C30Rm9MsJlC/"
          width={350}
          className="hidden sm:block"
        />
      </div>
    </>
  );
};

export default InstagramSection;
