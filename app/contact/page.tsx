import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have questions or comment? Get in Touch with Us!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
