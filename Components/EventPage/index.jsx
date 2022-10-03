import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EventDetailCard = ({ img, title, text }) => {
  return (
    <div className='event-detail'>
      <div className='event-card-icon-wrap'>
        <img src={img} />
      </div>
      <div className='event-details-wrap'>
        <div className='event-detail-text-wrap'>
          <p className='event-detail-title'>{title}</p>
          <p className='event-detail-text'>{text}</p>
        </div>
        <img src='/svgs/ArrowRight.svg' className='event-detail-nav' />
      </div>
    </div>
  );
};
export default function EventPage() {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();
  useEffect(() => {
    console.log(router?.query);
    if (router?.query?.eventName) {
      setEventName(router?.query?.eventName);
      setHostName(router?.query?.hostName);
      setEventDate(router?.query?.eventDate);
      setEventEnd(router?.query?.eventEnd);
      setEventLocation(router?.query?.eventLocation);
      setImageUrl(router?.query?.eventImage);
    }
  }, [router]);
  return (
    <div className='event-page'>
      <img
        src={imageUrl || "/Birthday-cake.png"}
        className='event-page-image'
      />
      <div className='event-page-wrap'>
        <p className='event-page-header'>{eventName}</p>
        <p className='event-page-host'>
          Hosted by <b>{hostName}</b>
        </p>
        <EventDetailCard
          img='/svgs/Calendar.svg'
          title={eventDate.split("T")[0] + " " + eventDate.split("T")[1]}
          text={`to ${eventEnd.split("T")[0] + " " + eventEnd.split("T")[1]}`}
        />
        <EventDetailCard
          img='/svgs/LocationIcon.svg'
          title='Location'
          text={eventLocation}
        />
      </div>
    </div>
  );
}
