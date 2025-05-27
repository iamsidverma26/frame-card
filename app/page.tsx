import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen  overflow-auto">
      <div className="relative w-[595px] h-[845px] scale-[0.95] md:scale-100">
        <Image
          src="/top-corner.svg"
          alt="Outer Border"
          fill
          className="absolute object-cover z-0"
        />

        <div className="absolute box top-[48px] left-[48px] w-[505px] h-[698px] z-10">
          <div
            className="absolute top-0 left-0 w-full h-full z-10"
            style={{
              background:
                "radial-gradient(circle at center, #a0542c 0%, #4b1a0d 100%)",
            }}
          ></div>
        </div>
        <div className="absolute top-[44px] left-[48px] z-20">
          <Image
            src="/border-frame.svg"
            alt="Frame Overlay"
            width={505}
            height={705}
            className=""
          />
        </div>
      </div>
    </main>
  );
}
