import Link from "next/link";
import React from "react";
import Button from "../Button";
export default function MainPage() {
  return (
    <div className="home-wrap">
      <img src='/svgs/Landing-page-image.svg' alt='' className='main-image-large' />
      
      <div className='main-page'>
        <p className='heading-text'>
          Imagine if
          <span className='heading-gradient heading-text'>
            <br />
            Snapchat
            <br />
          </span>
          had events.
        </p>
        <p className='main-text'>
          Easily host and share events with your friends across any social
          media.
        </p>
        <img src='/svgs/Landing-page-image.svg' alt='' className='main-image' />
        <Link href='/create'>
          <a>
            <Button text='🎉 Create my event' />
          </a>
        </Link>
      </div>
    </div>
  );
}
