import { BsFacebook, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="mx-auto h-screen flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col gap-5"><p className="text-lg font-medium bg-cyan-100 to-cyan-700 uppercase px-3 flex justify-center rounded-3xl py-2 w-48">Coming Soon</p>
        <p className="text-6xl font-bold">Get Notified <br />When we launch</p>
        <p className="text-base">Don&apos;t worry we will not spam you</p>
        <div className="flex gap-5">
          <input placeholder="Enter your email here" type="email" className="border border-gray-200 rounded-xl focus:outline-none focus:shadow-xl shadow-sm" />
          <button className="px-6 py3 bg-gradient-to-r from-[#aacee0] to-[] rounded-2xl hover:scale-95 duration-300 transition text-cyan-800 shadow-xl font-medium">Notify Me</button>
        </div>
        <div className="flex gap-5">
          <BsFacebook className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" />
          <RiInstagramFill className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" />
          <BsYoutube className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" />
        </div>
      </div>
      <img src="#" alt="#" />
    </div>
  );
}
