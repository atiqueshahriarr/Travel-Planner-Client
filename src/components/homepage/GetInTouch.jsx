import { MdPhoneInTalk } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const GetInTouch = () => {
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto mt-10 space-y-8 mb-12">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h3 className="text-3xl font-bold">Get In Touch</h3>
        <p className="font-medium text-[#4e4e4e] max-w-screen-lg">
          Lets talk! Contact us for inquiries, assistance, or just to say hello.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5 flex flex-col gap-4">
          <div className="  p-6 rounded-lg shadow-md bg-gradient-to-r hover:bg-gradient-to-l from-[#bbe8f298]">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Phone Contact
            </h2>
            <div className="flex justify-center">
              <MdPhoneInTalk className="text-7xl bg-[#189b9c] text-white rounded-[100%] p-3  mb-4"></MdPhoneInTalk>
            </div>
            <p className="text-gray-700 mb-2 text-center">
              For any urgent inquiries, you can reach us by phone:
            </p>
            <p className="text-[#189b9c] font-bold flex justify-center">
              123-456-7890
            </p>
          </div>

          <div className=" p-6 rounded-lg shadow-md bg-gradient-to-r hover:bg-gradient-to-l from-[#bbe8f298]">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Live Chat
            </h2>
            <div className="flex justify-center">
              <RiCustomerService2Fill className="text-7xl bg-[#189b9c] text-white rounded-[100%] p-3  mb-4"></RiCustomerService2Fill>
            </div>
            <p className="text-gray-700 mb-2">
              Our live chat support is available 24/7. Click below to start a
              chat:
            </p>
            <div className="flex justify-center">
              <button className="bg-[#189b9c] text-white font-bold px-4 py-2 rounded-md">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-3/5 p-6 rounded-lg shadow-md mb-10 bg-gradient-to-l hover:bg-gradient-to-r from-[#bbe8f298]">
          <form>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="xyz@gmail.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
              />
            </div>

            <div className="mb-4 mt-4">
              <label className="block text-gray-700 font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Write a meaningful subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Notes
              </label>
              <textarea
                name="message"
                required
                rows="7"
                placeholder="Write in Details . . . . . . "
                className="w-full px-4 py-2 border border-gray-300 resize-none rounded-md comment focus:outline-none "
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#189b9c] text-white font-medium px-4 py-2 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
