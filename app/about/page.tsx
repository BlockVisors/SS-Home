import ScrollUp from "@/components/Common/ScrollUp";
import Article from "@/components/Article";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Video from "@/components/Video";



const AboutPage = () => {
  return (
    <>
    <ScrollUp />
      {/* <Breadcrumb
        pageName="About"
        description="Our vision is to be the premier destination for moms and moms-to-be, offering a holistic and enriching experience that supports their well-being and growth"
      /> */}
      <AboutSectionOne />
       <Video />
      <Article />
    </>
  );
};

export default AboutPage;
