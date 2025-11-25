import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <h2 className="text-center text-3xl font-bold mb-10 mt-0 md:col-span-2">
          Contact <span className="text-teal-400">Me</span>
        </h2>

        {/* LEFT SIDE */}
         {/* LEFT SIDE */}
        <div>
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="w-32 mb-6"
          />

          <p className="text-gray-300 leading-relaxed mb-6">
           I love connecting with new people! Whether you have a project in mind, need a website, or just want to say hello, feel free to reach out.  
I aim to respond to all messages within 24 hours.  

I enjoy collaborating with clients to bring their ideas to life and create meaningful digital experiences.  
No project is too big or small — from personal portfolios to business websites, I’m here to help.  
Your ideas matter, and I take pride in turning them into a polished, functional, and visually appealing reality.  
Let’s work together to build something amazing that makes an impact.

          </p>

          {/* CLICKABLE ICONS */}
          <div className="flex items-center space-x-6 text-xl text-gray-300">

            {/* Phone */}
            <a
              href="tel:+923403542395"
              className="hover:text-cyan-400 transition"
            >
              <FiPhoneCall />
            </a>

            {/* Email */}
            <a
              href="mailto:veerjisuthar430@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FiMail />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/veerji-suthar-0b943032a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedinIn />
            </a>

            {/* Map Location */}
            <a
              href="https://www.google.com/maps/place/Naval+Colony,+Karachi,+Pakistan/@24.9466332,66.9334176,16z/data=!3m1!4b1!4m6!3m5!1s0x3eb36b3d57aeb849:0xf6cdaeb8344f76b1!8m2!3d24.9453192!4d66.9377434!16s%2Fm%2F04jq3vh?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FiMapPin />
            </a>

            

          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#1f232b] p-3 rounded-md w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#1f232b] p-3 rounded-md w-full focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone"
              className="bg-[#1f232b] p-3 rounded-md w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-[#1f232b] p-3 rounded-md w-full focus:outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="bg-[#1f232b] p-3 rounded-md w-full focus:outline-none"
          />

          <textarea
            placeholder="Message"
            rows="5"
            className="bg-[#1f232b] p-3 rounded-md w-full focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#1f232b] py-3 rounded-md hover:bg-cyan-500 hover:text-black transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
