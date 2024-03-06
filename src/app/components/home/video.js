import Image from "next/image";

export default function Video() {
  return (
    <div id="first-section" className="mb-5 lg:mb-16 hidden lg:block">
      <video
        className=" lg:h-screen w-full object-cover"
        autoPlay
        loop
        muted
        src="https://storage.googleapis.com/fellow-web/video.mp4"
      />
    </div>
  );
}
