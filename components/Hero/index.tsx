import Link from "next/link";
import MainLogoShape from "../../public/images/logo/ssLogo2.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px] bg-ss bg-cover dark:bg-dark grid grid-cols-2"
      >
    <div className="col-start-1 col-end-2 flex flex-col w-full text-left text-gray-800 dark:text-gray-200 p-4 col-span-2">
       
    </div>
    
        <div className="container col-start-2 col-end-3">
          <div className="mx-4 flex flex-wrap w-half">
            <div className="px-4 float-right">
              <div
                className="wow fadeInUp mx-auto text-center items-center"
                data-wow-delay=".2s"
              >
                {/* <h1 className="mb-5 text-6xl font-semibold text-transparent md:text-6xl gradient leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:leading-tight">
                The Spiral Staircase
                </h1> */}
                 {/* <h1 className="mb-14 text-6xl font-semibold text-transparent md:text-6xl gradient leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight dark:md:text-6xl md:leading-tight">
                The Spiral Staircase
                </h1> */}
                 <Image
                  src="/images/new/logo/logo-words.png"
                  alt="about-image"
                  height={600}
                  width={600}
                  className="mx-auto max-w-full lg:mr-6"
                />
                <h1 className="mb-20 text-3xl font-light leading-tight text-white dark:text-white sm:text-2xl sm:leading-tight md:text-5xl md:leading-tight font-swily">
                Ascend & Unwind                
                </h1>
                {/* <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                The Spiral Staircase offers modern mothers an unparalleled experience of relaxation, luxury, and child-friendly amenities, creating a unique haven where they can rejuvenate while their children are well-cared for in an elegant and enchanting environment.

                </p> */}
                
              </div>
               <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-18">
                  
                  <Link
                    href="/contact-form"
                    className="rounded-3xl bg-cream py-4 px-8 text-base font-swily text-center font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-cream dark:text-black/80 dark:hover:bg-white/30"
                  >
                Become A Member
                                  </Link>
                </div>

            </div>
            
          </div>
        </div>
       
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          
    
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
         
              
               
                
        </div>
      </section>
    </>
  );
};

export default Hero;
