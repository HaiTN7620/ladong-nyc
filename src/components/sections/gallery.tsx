"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages1 = [
  {
    src: "https://static.wixstatic.com/media/511aa7_94fab98e9461472db522c05f9ec324cf~mv2.jpg/v1/fill/w_275,h_344,q_90,enc_avif,quality_auto/511aa7_94fab98e9461472db522c05f9ec324cf~mv2.jpg",
    alt: "Restaurant Interior",
    content:
      "The image showcases a cluster of traditional umbrellas with warm golden lighting.",
    className: "col-span-1 row-span-1 h-[344px]",
  },
  {
    src: "https://static.wixstatic.com/media/511aa7_7d2adea29b61417a915ccd0da057cc99~mv2.jpg/v1/fill/w_275,h_344,q_90,enc_avif,quality_auto/511aa7_7d2adea29b61417a915ccd0da057cc99~mv2.jpg",
    alt: "Restaurant Interior",
    content: "A dimly lit bar with a long counter and stool lined up along it.",
    className: "col-span-1 row-span-1 h-[344px]",
  },
  {
    src: "https://static.wixstatic.com/media/511aa7_9c398c3c165945e188e6b92ca3ac6f24~mv2.jpg/v1/fill/w_860,h_688,q_90,enc_avif,quality_auto/511aa7_9c398c3c165945e188e6b92ca3ac6f24~mv2.jpg",
    alt: "Restaurant Interior",
    content:
      "The beautiful mural envelops you in a warm and inviting embrace, evoking a deep sense of comfort and belonging.",
    className: "col-span-2 row-span-1 h-[344px]",
  },
];

const galleryImages2 = [
  {
    src: "https://static.wixstatic.com/media/511aa7_f5cce1fcf1944dd089bff35d013e4073~mv2.jpg/v1/fill/w_386,h_686,q_90,enc_avif,quality_auto/511aa7_f5cce1fcf1944dd089bff35d013e4073~mv2.jpg",
    alt: "Bia Hoi on tap",
    content:
      "the invigorating freshness of Bia Hoi can truly uplift your spirits and bring a sense of refreshing comfort.",
    className: "col-span-1 row-span-1 h-[343px]",
  },
  {
    src: "https://static.wixstatic.com/media/511aa7_c3c7f1fdbf354861bf1599a8a7a36592~mv2.jpg/v1/fill/w_1118,h_686,q_90,enc_avif,quality_auto/511aa7_c3c7f1fdbf354861bf1599a8a7a36592~mv2.jpg",
    alt: "Bar Restaurant interior",
    content:
      "The bar offers a warm and inviting atmosphere, serving delightful Vietnamese drinks that not only quench your thirst but also foster a deep sense of belonging and connection. ",
    className: "col-span-3 row-span-1 h-[343px]",
  },
  {
    src: "https://static.wixstatic.com/media/511aa7_84031aef10094914a4dc78b5330c2695~mv2.jpg/v1/fill/w_456,h_686,q_90,enc_avif,quality_auto/511aa7_84031aef10094914a4dc78b5330c2695~mv2.jpg",
    alt: "Restaurant interior: Menu setting",
    content:
      "As soon as you arrive, you'll find the menu prepared, inviting you to explore the delightful flavors of Vietnamese cuisine. It's a warm welcome to an experience that promises to nourish both your body and spirit.  ",
    className: "col-span-1 row-span-1 h-[343px]",
  },
];

const galleryImages3 = [
  {
    src: "https://static.wixstatic.com/media/511aa7_54e7e51e251c47288daadac4b8220621~mv2.jpg/v1/fill/w_992,h_660,q_90,enc_avif,quality_auto/511aa7_54e7e51e251c47288daadac4b8220621~mv2.jpg",
    alt: "Verity of modern Vietnamese foods. ",
    content:
      "Wonderful modern Vietnamese dishes that remain hidden gems, not often found in many places. ",
    className: "col-span-1 row-span-1 h-[330px]",
  },
  {
    src: "https://static.wixstatic.com/media/511aa7_d488adb2107b489c972d2fa014675def~mv2.jpg/v1/fill/w_528,h_660,q_90,enc_avif,quality_auto/511aa7_d488adb2107b489c972d2fa014675def~mv2.jpg",
    alt: "Signature Wagyu Pho",
    content:
      "Experience the warmth of homemade meals inspired by our chef's hometown, lovingly prepared and delivered right in front of you. Each dish carries a piece of our heart, bringing comfort and care to your table when you need it most. ",
    className: "col-span-1 row-span-1 h-[330px]",
  },
  {
    src: "https://static.wixstatic.com/media/511aa7_35044326ef7647e2a5d43758dd1d49dc~mv2.jpg/v1/fill/w_440,h_660,q_90,enc_avif,quality_auto/511aa7_35044326ef7647e2a5d43758dd1d49dc~mv2.jpg",
    alt: "Restaurant interior: Table Layout",
    content: "Beautiful tale layout that reminds you of Vietnam.",
    className: "col-span-2 row-span-1 h-[330px]",
  },
];

const galleryImages4 = [
  {
    src: "https://static.wixstatic.com/media/511aa7_512d758c7236466ea9ec2afdd1056aba~mv2.jpg/v1/fill/w_578,h_722,q_90,enc_avif,quality_auto/511aa7_512d758c7236466ea9ec2afdd1056aba~mv2.jpg",
    alt: "Restaurant interior: A warmly lit space with lantern.",
    content:
      "Imagine stepping into a softly lit space adorned with lanterns, where the essence of modern Vietnamese culture wraps around you like a warm embrace. It's a place that evokes a deep sense of belonging, filling the air with the comforting scent of home.",
    className: "col-span-1 row-span-1 h-[361px]",
  },
  {
    src: "https://static.wixstatic.com/media/511aa7_58c1ddbf0fa74c98b479872e6f68083f~mv2.jpg/v1/fill/w_902,h_722,q_90,enc_avif,quality_auto/511aa7_58c1ddbf0fa74c98b479872e6f68083f~mv2.jpg",
    alt: "Restaurant interior: dinning room with floating bamboo lotus on the ceiling.",
    content:
      "The dining room beautifully embodies the essence of Vietnamese culture, brining together people from all walks of life to savor delicious food. It truly feels like warm, welcoming melting pot where everyone comes together to share not only a meal but also moments connection and joy.",
    className: "col-span-3 row-span-1 h-[361px]",
  },
  {
    src: "https://static.wixstatic.com/media/511aa7_09dd14cb0dd241b59653418966a9246b~mv2.jpg/v1/fill/w_480,h_722,q_90,enc_avif,quality_auto/511aa7_09dd14cb0dd241b59653418966a9246b~mv2.jpg",
    alt: "Detail of Restaurant interior",
    content:
      "The interior of the restaurant, much like the heartfelt scenes from the movie, envelops you in a warm, acoustic embrace that truly resonates with soul.",
    className: "col-span-1 row-span-1 h-[361px]",
  },
];

const galleryImages5 = [
  {
    src: "https://static.wixstatic.com/media/511aa7_160675893b424b9ba765c12de4bfe03b~mv2.jpg/v1/fill/w_516,h_754,q_90,enc_avif,quality_auto/511aa7_160675893b424b9ba765c12de4bfe03b~mv2.jpg",
    alt: "Vietnamese foods: Bun Cha, Dry Pho beef, and Morning glory.",
    content: "Indulge in a variety of delicious foods designed just for you!",
    className: "col-span-1 row-span-1 h-[377px]",
  },
  {
    src: "https://static.wixstatic.com/media/511aa7_45d757ca7778415b82c68f0497d263b4~mv2.jpg/v1/fill/w_942,h_754,q_90,enc_avif,quality_auto/511aa7_45d757ca7778415b82c68f0497d263b4~mv2.jpg",
    alt: "Banh Mi",
    content: "Classic Banh Mi",
    className: "col-span-3 row-span-1 h-[377px]",
  },
  {
    src: "https://static.wixstatic.com/media/511aa7_8f3b96187bb741588644a90f08064eec~mv2.jpg/v1/fill/w_502,h_754,q_90,enc_avif,quality_auto/511aa7_8f3b96187bb741588644a90f08064eec~mv2.jpg",
    alt: "Restaurant interior",
    content: "Detail of floating bamboo lotus on the ceiling",
    className: "col-span-1 row-span-1 h-[377px]",
  },
];

export default function Gallery() {
  const renderText = (alt: string, content: string) => {
    return (
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-10" style={{
        padding: 15
      }}>
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
    );
  };

  return (
    <section
      id="comp-m2t6brbr"
      tabIndex={-1}
      className="Oqnisf comp-m2t6brbr wixui-section"
      data-block-level-container="ClassicSection"
    >
      <div className="comp-m2t6brbrbg" style={{ backgroundColor: "#000", paddingBottom: 20 }}>
        <div
          id="#comp-m2t6brbr "
          className="max-w-[930px] mx-auto px-4"
          style={{
            minWidth: "980px",
            margin: "0px auto",
          }}
        >
          {/* Gallery Grid */}
          <div className="grid grid-cols-4">
            {galleryImages1.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg group ${image.className}`}
                style={{ minHeight: "250px" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                {renderText(image.alt, image.content)}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-5">
            {galleryImages2.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg group ${image.className}`}
                style={{ minHeight: "250px" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                {renderText(image.alt, image.content)}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-4">
            {galleryImages3.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg group ${image.className}`}
                style={{ minHeight: "250px" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                {renderText(image.alt, image.content)}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-5">
            {galleryImages4.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg group ${image.className}`}
                style={{ minHeight: "250px" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                {renderText(image.alt, image.content)}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-5">
            {galleryImages5.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg group ${image.className}`}
                style={{ minHeight: "250px" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                {renderText(image.alt, image.content)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
