import fieldWorkersImage from '../../imgs/fieldWorkers.webp';
import ContactForm from '../../components/Form/Form';

export default function Contact() {
  return (
    <>
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${fieldWorkersImage})`, // Update with the correct image path
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          We’d love to hear from you.
        </h1>
        <p className="text-2xl md:text-4xl text-white mt-4">How can we help?</p>
      </div>
    </div>
    <ContactForm/>
    </>
  );
}
