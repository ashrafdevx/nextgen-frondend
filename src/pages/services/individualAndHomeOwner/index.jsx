import Heading from "./1-heading";
import PhotosandConstruction from "./3-PhotosandConstruction";
import Banner from "./2-banner";
import EfficiantProjectManagement from "./4-EfficiantProjectManagement";
import VisionAndNeeds from "./5-VisionAndNeeds";
import YourDreamSpace from "./6-YourDreamSpace";
import PrecisionCraftsmanship from "./7-PrecisionCraftsmanship";
import UnmatchedSupport from "./8-UnmatchedSupport";

const IndividualAndHomeOwner = () => {
  return (
    <div className=" flex flex-col items-center  sm:pt-7">
      <Heading />
      <Banner />
      <PhotosandConstruction />
      <EfficiantProjectManagement />
      <VisionAndNeeds />
      <YourDreamSpace />
      <PrecisionCraftsmanship />
      <UnmatchedSupport />
    </div>
  );
};

export default IndividualAndHomeOwner;
