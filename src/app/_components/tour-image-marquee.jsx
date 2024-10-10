/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

export default function TourImageMarquee() {
  const arr = [
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1673697239633-5f5b91092bd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1697217512519-88ab7504aa1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
  ];
  return (
    <Marquee className="flex justify-between w-full mb-2 mt-10">
      {arr.map((ele, i) => (
        <div key={i} className="h-52 py-1 w-full px-2">
          <img
            className="object-cover h-full w-full"
            src={ele}
            alt=""
          />
        </div>
      ))}
    </Marquee>
  );
}
