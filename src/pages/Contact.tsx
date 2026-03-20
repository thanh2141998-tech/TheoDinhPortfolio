import Navigation from "@/components/Navigation";
import ContactComponent from "@/components/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactComponent />
      </div>
    </div>
  );
};

export default Contact;
