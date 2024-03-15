"use client";

import BannerImage from "@/../public/banner-image.webp";
import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/separator";
import { SubHeading } from "@/components/sub-heading";
import {
  blogs,
  faq,
  feelBetterItems,
  logos,
  priceTabs,
  reviews,
} from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
export default function Home() {
  const [activePriceTab, setActivePriceTab] = useState(0);
  return (
    <main className="h-full min-h-screen pb-20">
      <div className="relative w-full h-[200px] lg:h-[400px] border-b-2 border-red-500">
        <Image
          src={BannerImage}
          alt="Banner image"
          fill
          className="object-cover shadow-[inset_20px_20px_20px(rgba(0,0,0,1))]"
        />
        <span className="absolute inset-x-0 -bottom-4 bg-white blur-md h-10" />
      </div>
      <Container className="flex flex-col items-center">
        <Heading className="mt-12">Calm your mind. Change your life</Heading>
        <p className="text-center mt-6 font-light text-lg">
          Mental health is hard. Getting support doesn&apos;t need to be. Our
          app puts the tools to feel better in your back pocket, with
          personalized content to manage stress and anxiety, get better sleep,
          and feel more present in your life. Relax your mind, and wake up as
          the person you want to be.
        </p>
        <Button variant="gradient" className="w-full mt-6 max-w-[300px]">
          Try Calm for free
        </Button>
        <SubHeading className="mt-28">
          We&apos;re here to help you feel better
        </SubHeading>
        <div className="grid w-full gap-x-5 gap-y-10 lg:grid-cols-3 mt-12">
          {feelBetterItems.map((item) => (
            <FeelBetterBox key={item.label} {...item} />
          ))}
        </div>
      </Container>
      <Image
        src="/posters.webp"
        alt="content title collage"
        height={500}
        width={1200}
        className="w-full mt-28 h-[300px] lg:h-[450px] object-cover"
      />
      <Container className="flex flex-col items-center mt-10">
        <SubHeading className="mt-12">
          Trusted by the best in the business.
        </SubHeading>
        <div className="flex justify-center gap-8 flex-wrap mt-10">
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt="logo" width={120} height={50} />
          ))}
        </div>
        <SubHeading className="mt-20">
          Over 2 million 5-star reviews.
        </SubHeading>
      </Container>
      <Carousel>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Carousel>
      <Container className="max-w-[600px] mx-auto">
        <SubHeading className="mt-20">
          Start your free trial of Calm Premium.
        </SubHeading>
        <div className="mt-14 grid lg:grid-cols-2 gap-5 mx-auto">
          {priceTabs.map((item, index) => (
            <PriceTab
              key={item.duration}
              {...item}
              active={index === activePriceTab}
              onChange={() => setActivePriceTab(index)}
            />
          ))}
        </div>
        <p className="text-center mt-6 text-sm font-light">
          After your free trial, the yearly subscription is $69.99 and
          automatically renews each year until cancelled.{" "}
          <Link href="#terms" className="underline">
            Terms
          </Link>{" "}
          |{" "}
          <Link href="#cancel-anytime" className="underline whitespace-nowrap">
            Cancel anytime
          </Link>
        </p>{" "}
        <Button className="mt-6">Continue</Button>
      </Container>
      <div className="relative h-[400px]">
        <Image
          src="/wave.webp"
          alt="Wave image"
          width={500}
          height={1200}
          className="w-full h-[500px] object-cover absolute -top-44 -z-10"
        />
      </div>
      <Container>
        <SubHeading className="mt-14">
          Check out our blog for more meditation, sleep, stress, and mental
          health resources.
        </SubHeading>
      </Container>
      <Carousel>
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </Carousel>
      <Container className="flex justify-center mt-8">
        <Link href="#see_more_blogs" className="underline font-medium text-lg">
          See All Blogs
        </Link>
      </Container>
      <Container>
        <SubHeading className="mt-14">Frequently Asked Questions</SubHeading>
        <div className="mt-20 space-y-10">
          {faq.map((item) => (
            <Faqs key={item.type} {...item} />
          ))}
        </div>
      </Container>
    </main>
  );
}

const FeelBetterBox = ({
  image,
  label,
  description,
}: {
  image: string;
  label: string;
  description: string;
}) => {
  return (
    <Link
      href="/"
      role="button"
      className="lg:max-w-[280px] group p-2 rounded-lg outline-blue-950"
    >
      <Image src={image} alt={label} width={50} height={50} />
      <h3 className="text-2xl transition group-hover:text-blue-900 lg:text-3xl font-medium mt-5">
        {label}
      </h3>
      <p className="mt-3">{description}</p>
      <p className="mt-3 text-lg underline transition group-hover:text-blue-900 font-medium">
        Learn More
      </p>
    </Link>
  );
};

const PriceTab = ({
  duration,
  regularPrice,
  offerPrice,
  perMonth,
  freeTrial,
  active,
  onChange,
}: {
  regularPrice?: string;
  offerPrice?: string;
  duration: string;
  perMonth: string;
  freeTrial?: string;
  active: boolean;
  onChange: () => void;
}) => {
  return (
    <button
      onClick={onChange}
      role="button"
      className={cn(
        "relative flex items-center justify-between py-2.5 px-3 w-full bg-white rounded-lg focus-visible:outline shadow-sm",
        active && "outline-blue-950 outline"
      )}
    >
      <span className="flex flex-col items-start">
        <span className="text-lg font-semibold">{duration}</span>
        {(offerPrice || regularPrice) && (
          <span className="flex gap-2 text-sm font-medium">
            {regularPrice && <p className="line-through">{regularPrice}</p>}
            {offerPrice && <p>{offerPrice}</p>}
          </span>
        )}
      </span>
      <span className="text-sm font-medium">{perMonth}</span>
      {freeTrial && (
        <span className="absolute right-5 top-0 -translate-y-1/2 rounded-lg px-3 py-1 bg-gradient-to-r from-indigo-700 to-purple-600 tracking-tight text-white text-sm font-medium">
          {freeTrial}
        </span>
      )}
    </button>
  );
};

const Faqs = ({
  type,
  qAndA,
}: {
  type: string;
  qAndA: { question: string; answer: string }[];
}) => {
  return (
    <section className="flex flex-col items-start">
      <h3 className="text-xl uppercase text-blue-950 font-semibold">{type}</h3>
      <Separator className="mt-2" />
      {qAndA.map((item) => (
        <Faq key={item.question} {...item} />
      ))}
    </section>
  );
};

const Faq = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  const animate = open ? "visible" : "hidden";

  return (
    <Fragment key={question}>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between gap-4 w-full mt-4 text-lg font-semibold text-neutral-800 hover:text-blue-900 transition-colors"
      >
        <h4 className="text-start">{question}</h4>
        <GoChevronDown
          className={cn(
            "h-6 w-6 text-blue-500 mr-1 transition duration-[0.25]",
            open && "rotate-180"
          )}
        />
      </button>
      <motion.p
        variants={{
          hidden: { opacity: 0, height: 0, pointerEvents: "none" },
          visible: { opacity: 1, height: "auto", pointerEvents: "auto" },
        }}
        initial="hidden"
        animate={animate}
        className="mt-1.5 overflow-hidden"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enim
        quam asperiores, veniam voluptatem sequi ipsam reprehenderit sit dolor
        fugiat libero perferendis unde autem alias voluptatum quasi deleniti
        officia labore nihil, voluptas dolore? Quaerat, quae, ullam labore
        beatae ex voluptatibus sequi facilis, qui voluptates quo possimus
        recusandae nisi. Provident, nam cupiditate! Molestiae quod provident
        odit architecto aliquam! Earum, aliquid cupiditate!
      </motion.p>
    </Fragment>
  );
};

const ReviewCard = ({
  author,
  comment,
  star,
}: {
  author: string;
  comment: string;
  star: number;
}) => {
  return (
    <div className="embla__slide w-full max-w-[400px] px-6 py-8 bg-gradient mr-3 rounded-xl first:md:ml-[150px] first:lg:ml-[200px]">
      <Image src="/comma.svg" alt="comment" width={70} height={70} />
      <p className="text-lg font-medium text-white mt-6">{comment}</p>
      <h4 className="text-lg text-gray-200 mt-5">{author}</h4>
      <div className="flex gap-1 mt-3">
        {Array.from({ length: star }).map((_, index) => (
          <FaStar className="size-5 text-yellow-500" key={index} />
        ))}
      </div>
    </div>
  );
};

type BlogCardProps = {
  title: string;
  subTitle: string;
  image: string;
  href: string;
};

const BlogCard = ({ title, subTitle, image, href }: BlogCardProps) => {
  return (
    <Link
      href={href}
      className="embla__slide w-full max-w-[600px] pb-4 h-[350px] rounded-xl mr-3 bg-white border border-gray-400 overflow-hidden first:md:ml-[150px] first:lg:ml-[200px]"
    >
      <div className="w-full h-[250px] relative">
        <Image src={image} alt="image" fill className="object-cover" />
      </div>
      <p className="px-4 mt-5 text-sm text-gray-600">Lorem, ipsum dolor. </p>
      <p className="px-4 line-clamp-2 mt-1 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
        consequatur!
      </p>
    </Link>
  );
};
