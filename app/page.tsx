import { Frame, getFrameFlattened } from "frames.js";
import type { Metadata } from "next";

// Declare the frame
const imageUrl = `${process.env.NEXT_PUBLIC_HOST}/pill.jpg`;
const initialFrame: Frame = {
  image: imageUrl,
  version: "vNext",
  buttons: [
    {
      label: "Cast for prescription",
      action: "link",
      target: `https://warpcast.com/~/compose?text=I%27m%20taking%20%24onchain%20pill%20&embeds[]=${process.env.NEXT_PUBLIC_HOST}`,
    
    },

  ],
  postUrl: `${process.env.NEXT_PUBLIC_HOST}/showdown`,
  imageAspectRatio: "1:1"
};

// console.log(process.env.NEXT_PUBLIC_HOST)

// Export Next.js metadata
export const metadata: Metadata = {
  title: "Onchain pill",
  description: "Cast for prescription",
  openGraph: {
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  other: getFrameFlattened(initialFrame),
};
export default async function Home() {
  // let html = getFrameHtml(initialFrame);
  // console.log(html);
  return <div>Onchain frame</div>;
}
