import Image from "next/image";
import Link from "next/link";
import componentsImg from "../../public/images/components.svg";
import babyImg from  "../../public/images/image17-380.jpeg";
import { DownArrow, RightArrow } from "@/icons";
import "./article.css";

export default function Article() {
  return (
    <main className="">
    <div className="flex flex-col items-center justify-center">
          <p className="inline-block mt-8 mb-4 px-3 py-px text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            The Experience
          </p>
         </div>
      <article className="grid lg:grid-cols-2">
         
        <div className="px-8 py-20 md:px-20 lg:py-24">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient mb-6">
            The Journey starts here.
          </h1>
          <p className="mt-2 text-lg">
            A simple and powerful Next.js template featuring authentication and
            user management powered by Clerk.
          </p>
          <div className="flex gap-2 mt-8">
            <Link
              href="/dashboard"
              className="flex content-center gap-2 px-4 py-2 font-bold text-base text-seapink transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              Explore Membership
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
            <a
              className="flex gap-2 px-4 py-2 font-bold text-base text-royalpurple transition duration-100 rounded-lg hover:text-gray-800"
              href="#features"
            >
              Learn more
              <div className="m-auto">
                <DownArrow />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={babyImg} alt="EventCollage" />
        </div>
      </article>
      <article
        className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24"
        id="features"
      >
        <h2 className="text-3xl font-semibold text-transparent md:text-6xl gradient text-black dark:text-white sm:text-4xl md:text-[45px]">What We Have in Store</h2>
        <p className="mt-2">
          Connect with one of your experience coordinators to explore options at 
          The Spiral Staircase. To learn more, take our brief {" "}
          <a
            href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
            className="font-xl font-bold text-dark-800 hover:underline"
          >
            Survey
          </a>
          .
        </p>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl dark:text-black/90">
            <h3 className="mb-2 text-lg !leading-tight font-semibold text-transparent md:text-lg gradient text-black sm:text-lg md:text-[45px]">Elevated Childcare</h3>
            <p className="text-gray-700 dark:text-gray-700">
              Our experienced and qualified staff will provide your child with a safe, nurturing environment.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/component-reference/overview?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-royalpurple text-bold cta hover:underline"
              target="_blank"
            >
              See Packages <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl dark:text-black/90">
            
              <h3 className="mb-2 text-lg !leading-tight font-semibold text-transparent md:text-lg gradient text-black sm:text-lg md:text-[45px]">Events & Experiences</h3>
            <p className="text-gray-700">
              We also offer a variety of amenities, such as a fitness center, a spa, and a library. Relax, and recharge!
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/reference/clerk-react/useuser?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-royalpurple text-bold cta hover:underline"
              target="_blank"
            >
             View Calendar<span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl dark:text-black/90">
          <h3 className="mb-2 text-lg !leading-tight font-semibold text-transparent md:text-lg gradient text-black sm:text-lg md:text-[45px]">Fine Wine & Dining</h3>            
            <p className="text-gray-700">
              Our dinners are held in our elegant dining room, which is the perfect setting for a special occasion.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/organizations/overview?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-royalpurple text-bold cta hover:underline"
              target="_blank"
            >
              View Vendors<span className="arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}