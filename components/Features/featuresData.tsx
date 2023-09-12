import { Feature } from "@/types/feature";
import Fam from '../../images/icons/fam-96.png';
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // <img src={require("@images/icons/fam-96.png")}/>
      <Image
                  src="/images/icons/fam-96.png"
                  alt="about-image"
                  width={48}
                  height={48}
                  object-fit="contain"
                  // className="mx-auto lg:mr-0"
                />
      // <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
      //   />
      //   <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
      // </svg>
    ),
    title: "Community Programs",
    paragraph:
      "Are you a mom looking for a supportive community of like-minded women? Look no further than our private moms club. We are a group of moms who are passionate about raising our children and building strong relationships..",
  },
  {
    id: 2,
    icon: (
       <Image
                  src="/images/icons/spa-96.png"
                  alt="about-image"
                  width={48}
                  height={48}
                  object-fit="contain"
                  // className="mx-auto lg:mr-0"
                />
    ),
    title: "Spa Packages",
    paragraph:
      "A variety of Spa Offerings. Our massages are designed to relieve stress and tension, while our facials will leave your skin feeling soft and refreshed. Our body wraps will help to detoxify your body and promote relaxation..",
  },
  {
    id: 3,
    icon: (
        <Image
                  src="/images/icons/day-care-96.png"
                  alt="about-image"
                  width={48}
                  height={48}
                  object-fit="contain"
                  // className="mx-auto lg:mr-0"
                />
    ),
    title: "Childcare",
    paragraph:
      "If you are looking for a luxury child care service that will give your child the best possible start in life.We believe that every child is unique and deserves individualized attention. We want to be your child's second home..",
  },
  {
    id: 4,
    icon: (
      <Image
                  src="/images/icons/coffee-64.png"
                  alt="about-image"
                  width={48}
                  height={48}
                  object-fit="contain"
                  // className="mx-auto lg:mr-0"
                />
    ),
    title: "Coffees & Teas",
    paragraph:
      "We also offer a variety of brewing methods, so you can enjoy your coffee the way you like it. Whether you prefer a drip coffee maker, a French press, or a pour-over, we have the coffee and the brewing gear to make your perfect cup..",
  },
  {
    id: 5,
    icon: (
      <Image
                  src="/images/icons/food-and-wine-96.png"
                  alt="about-image"
                  width={48}
                  height={48}
                  object-fit="contain"
                  // className="mx-auto lg:mr-0"
                />
    ),
    title: "Extensive Wine Selection",
    paragraph:
      "Indulge Your Senses with Our Extensive Wine Selection. Our high-end wine supplier offers a selection of wines that you will enjoy. We source our wines from the best vineyards, and we have a specially curated selection.",
  },
  {
    id: 6,
    icon: (
      <Image
                  src="/images/icons/pregnant-96.png"
                  alt="about-image"
                  width={48}
                  height={48}
                  object-fit="contain"
                  // className="mx-auto lg:mr-0"
                />
    ),
    title: "Services For Expecting Moms",
    paragraph:
      "We understand that pregnancy can be a time of great joy and excitement, but it can also be a time of anxiety and uncertainty. That's why we offer a variety of services (Pre-natal Care, Child-birth prep, pre-natal yoga, etc).",
  },
    {
    id: 7,
    icon: (
      <Image
                  src="/images/icons/activities-64.png"
                  alt="about-image"
                  width={48}
                  height={48}
                  object-fit="contain"
                  // className="mx-auto lg:mr-0"
                />
    ),
    title: "Activities & Events",
    paragraph:
      "Our private club is a place for women to connect, learn, and grow. We offer a variety of events and activities that are designed to empower women and help them reach their full potential. Including Networking, Education, Social and Volunteering.",
  },
  {
    id: 8,
    icon: (
      <Image
                  src="/images/icons/supper-96.png"
                  alt="about-image"
                  width={48}
                  height={48}
                  object-fit="contain"
                  // className="mx-auto lg:mr-0"
                />
    ),
    title: "Specially Curated Dinners",
    paragraph:
      "Our women's club offers a variety of specially curated dinners on rotation. We work with some of the best chefs around to create unique and unforgettable dining experiences. Our dinners are designed to stimulate both your tastebuds as well as Storytelling.",
  },
  {
    id: 9,
    icon: (
      <Image
                  src="/images/icons/meeting-96.png"
                  alt="about-image"
                  width={48}
                  height={48}
                  object-fit="contain"
                  // className="mx-auto lg:mr-0"
                />
    ),
    title: "Meeting Rooms",
    paragraph:
      "Our spaces are all beautifully decorated in the style of the Roaring 20s, and they offer a variety of amenities, such as Wi-Fi, projectors, and sound systems. We also have a team of experienced event planners who can help you execute your event or meeting flawlessly..",
  },
];
export default featuresData;
