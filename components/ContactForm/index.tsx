'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import Image from 'next/image';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="width=80%">
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
               
               
                
              </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-xl bg-cream py-3 px-8 text-base font-semibold text-royalpurple outline-none'>
          Get In Touch
        </button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;