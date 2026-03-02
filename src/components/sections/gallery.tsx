"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages1 = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Restaurant Interior",
    content:
      "The image showcases a cluster of traditional umbrellas with warm golden lighting.",
    className: "col-span-1 row-span-1 h-[190px] md:h-[344px]",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Restaurant Interior",
    content: "A dimly lit bar with a long counter and stool lined up along it.",
    className: "col-span-1 row-span-1 h-[190px] md:h-[344px]",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Restaurant Interior",
    content:
      "The beautiful mural envelops you in a warm and inviting embrace, evoking a deep sense of comfort and belonging.",
    className: "col-span-2 row-span-1 h-[190px] md:h-[344px]",
  },
];

const galleryImages2 = [
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Bia Hoi on tap",
    content:
      "the invigorating freshness of Bia Hoi can truly uplift your spirits and bring a sense of refreshing comfort.",
    className: "col-span-1 row-span-1 h-[190px] md:h-[343px]",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Bar Restaurant interior",
    content:
      "The bar offers a warm and inviting atmosphere, serving delightful Vietnamese drinks that not only quench your thirst but also foster a deep sense of belonging and connection. ",
    className: "col-span-3 row-span-1 h-[190px] md:h-[343px]",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "Restaurant interior: Menu setting",
    content:
      "As soon as you arrive, you'll find the menu prepared, inviting you to explore the delightful flavors of Vietnamese cuisine. It's a warm welcome to an experience that promises to nourish both your body and spirit.  ",
    className: "col-span-1 row-span-1 h-[190px] md:h-[343px]",
  },
];

const galleryImages3 = [
  {
    src: "/images/gallery/gallery-7.jpg",
    alt: "Verity of modern Vietnamese foods. ",
    content:
      "Wonderful modern Vietnamese dishes that remain hidden gems, not often found in many places. ",
    className: "col-span-1 row-span-1 h-[190px] md:h-[330px]",
  },
  {
    src: "/images/gallery/gallery-8.jpg",
    alt: "Signature Wagyu Pho",
    content:
      "Experience the warmth of homemade meals inspired by our chef's hometown, lovingly prepared and delivered right in front of you. Each dish carries a piece of our heart, bringing comfort and care to your table when you need it most. ",
    className: "col-span-1 row-span-1 h-[190px] md:h-[330px]",
  },
  {
    src: "/images/gallery/gallery-9.jpg",
    alt: "Restaurant interior: Table Layout",
    content: "Beautiful tale layout that reminds you of Vietnam.",
    className: "col-span-2 row-span-1 h-[190px] md:h-[330px]",
  },
];

const galleryImages4 = [
  {
    src: "/images/gallery/gallery-10.jpg",
    alt: "Restaurant interior: A warmly lit space with lantern.",
    content:
      "Imagine stepping into a softly lit space adorned with lanterns, where the essence of modern Vietnamese culture wraps around you like a warm embrace. It's a place that evokes a deep sense of belonging, filling the air with the comforting scent of home.",
    className: "col-span-1 row-span-1 h-[190px] md:h-[361px]",
  },
  {
    src: "/images/gallery/gallery-11.jpg",
    alt: "Restaurant interior: dinning room with floating bamboo lotus on the ceiling.",
    content:
      "The dining room beautifully embodies the essence of Vietnamese culture, brining together people from all walks of life to savor delicious food. It truly feels like warm, welcoming melting pot where everyone comes together to share not only a meal but also moments connection and joy.",
    className: "col-span-3 row-span-1 h-[190px] md:h-[361px]",
  },
  {
    src: "/images/gallery/gallery-12.jpg",
    alt: "Detail of Restaurant interior",
    content:
      "The interior of the restaurant, much like the heartfelt scenes from the movie, envelops you in a warm, acoustic embrace that truly resonates with soul.",
    className: "col-span-1 row-span-1 h-[190px] md:h-[361px]",
  },
];

export default function Gallery() {
  const renderText = (src: string, alt: string, content: string, className: string, index: number) => {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`relative overflow-hidden cursor-pointer rounded-lg group ${className}`}
        style={{ minHeight: "250px" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-10"
          style={{
            padding: 15,
          }}
        >
          <h3
            className="text-white mb-1"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {alt}
          </h3>
          <p
            className="text-white/80 line-clamp-3"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {content}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="comp-m2t6brbr"
      tabIndex={-1}
      className="Oqnisf comp-m2t6brbr wixui-section"
      data-block-level-container="ClassicSection"
    >
      <div
        className="comp-m2t6brbrbg"
        style={{ backgroundColor: "#000", paddingBottom: 20 }}
      >
        <div
          id="#comp-m2t6brbr "
          className="max-w-[930px] mx-auto px-5 md:px-0"
          style={{
            margin: "0px auto",
          }}
        >
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {galleryImages1.map((image, index) =>
              renderText(
                image.src,
                image.alt,
                image.content,
                image.className,
                index,
              ),
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5">
            {galleryImages2.map((image, index) =>
              renderText(
                image.src,
                image.alt,
                image.content,
                image.className,
                index,
              ),
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {galleryImages3.map((image, index) =>
              renderText(
                image.src,
                image.alt,
                image.content,
                image.className,
                index,
              ),
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5">
            {galleryImages4.map((image, index) =>
              renderText(
                image.src,
                image.alt,
                image.content,
                image.className,
                index,
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
