import Image from "next/image";
import { women2 } from "../../public/images";
import { allWomen } from "../../public/images";
import { women3 } from "../../public/images";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const TampaWomen = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
        {/* <div className="flex flex-col items-center justify-center">
          <p className="inline-block px-3 py-px mb-16 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
Investing in Women: Empowering Tampa's Female Entrepreneurs
          </p> */}
           <div className="flex flex-col items-center justify-center">
          <p className="inline-block px-3 py-px mb-8 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
    Investing in Women: Empowering Tampa's Female Entrepreneurs
          </p>
         </div>
        <div className="container">
          <SectionTitle
            title="Supporting Women-Led Owned Businesses"
            paragraph="Women-led businesses are on the rise. In the United States, women own 42% of all businesses, and this number is expected to grow to 50% by 2024"
            center
          />

         </div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-3 aspect-[32/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
           
              <Image
                src={allWomen}
                alt="about image"
                height={275}
                width={400}
                
              />
              
            </div>
            <div
              className="wow fadeInUp relative mx-auto mb-3 aspect-[32/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >

              <Image
                src={women2}
                alt="women2"
                height={275}
                width={400}
                
              />
           
            </div>
              <div
              className="wow fadeInUp relative mx-auto mb-1 aspect-[32/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
           
              <Image
                src={women3}
                alt="women3"
                height={275}
                width={400}
                
              />
            </div>
             <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-2">
                  
                  <Link
                    href="https://localhost:3001"
                    className="rounded-md bg-seapink/70 shadow-lg py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-royalpurple/80 dark:text-white dark:hover:bg-primary"
                  >
                    Support Campaigns
                  </Link>
                </div>
                 <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-6">
                  
                  <Link
                    href="https://localhost:3001/about"
                    className="rounded-md bg-royalpurple shadow-lg py-4 px-6 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-white/90 dark:text-royalpurple dark:hover:bg-white/30"
                  >
                    Learn More
                  </Link>
                </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
               <div className="mb-4">
               <h1 className="mb-2 text-xl !leading-tight font-semibold text-transparent md:text-lg gradient text-black sm:text-lg md:text-[45px] lg:text-4xl">Key Highlights</h1>
               </div>
                 <div className="grow"></div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Monthly Spotlight                
                  </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Every month, we'll feature a woman-owned business, giving them the platform to shine and share their unique story and products with our community..
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Fundraising Campaign
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Users can contribute to a monthly fundraising campaign dedicated to the featured business. The funds raised will cover all operational costs, allowing the business to focus on growth and service.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                 Community Engagement:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The featured woman-owned business can amplify the fundraising efforts by rallying their network of friends and family to contribute, creating a ripple effect of support.

                </p>
              </div>
               <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                 Sustainable Growth
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The funds raised not only support the current month's featured business but also ensure The Spiral Staircase can sublease the space for the upcoming month, creating a sustainable model of support.

                </p>
              </div>
               <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Local Economic Boost               
                 </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  By supporting woman-owned businesses, we're directly investing in the Tampa economy, fostering innovation, and creating job opportunities

                </p>
              </div>
               <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Building Stronger Networks
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  This initiative fosters collaboration and networking among local businesses, leading to partnerships, collaborations, and a stronger community fabric..

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TampaWomen;
