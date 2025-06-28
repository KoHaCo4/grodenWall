import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/6281324842510"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default Whatsapp;
