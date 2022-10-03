import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../../Components/Button";
export default function CreatePage() {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();
  const handleContinue = () => {
    if (eventImage) {
      const url = URL.createObjectURL(eventImage);
      setImageUrl(url);
      console.log(url);
    }
    router.push({
      pathname: "/event",
      query: {
        eventName: eventName,
        hostName: hostName,
        eventDate: eventDate,
        eventEnd: eventEnd,
        eventLocation: eventLocation,
        eventImage: imageUrl,
      },
    });
  };
  return (
    <div className='create-page-header'>
      <h1>Create new event</h1>
      <form>
        <p className='create-page-label'>Event Name</p>
        <input
          className='create-page-input'
          type='text'
          placeholder='Enter Event name'
          autoComplete='off'
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <br />
        <p className='create-page-label'>Host Name</p>
        <input
          className='create-page-input'
          type='text'
          placeholder='Enter Host name'
          autoComplete='off'
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
        />
        <br />
        <p className='create-page-label'>Start Date/ Time</p>
        <input
          className='create-page-input'
          type='datetime-local'
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <br />
        <p className='create-page-label'>End Date/ Time</p>
        <input
          className='create-page-input'
          type='datetime-local'
          value={eventEnd}
          onChange={(e) => setEventEnd(e.target.value)}
        />
        <br />
        <p className='create-page-label'>Location</p>
        <input
          className='create-page-input'
          onChange={(e) => {
            setEventLocation(e.target.value);
          }}
          value={eventLocation}
          type='text'
          placeholder='Enter Location'
          autoComplete='off'
        />
        <br />
        <div className='create-page-cover-wrap'>
          <p className='create-page-label create-page-cover'>
            Event Cover Image
          </p>
          <label className='create-page-file'>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => {
                setEventImage(e.target.files[0]);
              }}
            />
            Select Image
          </label>
        </div>
        <div className='continue-btn' onClick={handleContinue}>
          Continue
        </div>
      </form>
    </div>
  );
}
