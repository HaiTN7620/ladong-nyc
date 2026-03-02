"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Intro() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      id="comp-m2t6brbq1"
      tabIndex={-1}
      className="relative wixui-section bg-gradient-to-t from-black to-[#8d0b05]"
      data-block-level-container="ClassicSection"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div
          data-mesh-id="comp-m2t6brbq1inlineContent"
          data-testid="inline-content"
          className="max-w-[930px] h-[495px] mx-auto px-4 py-20 md:py-32 relative"
        >
          <div
            data-mesh-id="comp-m2t6brbq1inlineContent-gridContainer"
            data-testid="mesh-container-content"
          >
            <div
              id="comp-m2rwe2hr"
              className="M7AL1H comp-m2rwe2hr wixui-video-box"
              data-audio="off"
              data-playing=""
              data-can-play=""
            >
              <div
                className="K0b3At relative"
                tabIndex={0}
                role="button"
                aria-label="copy_852C80D5-5266-4883-8AB0-00A4D65C5AAE.MOV Play video"
                aria-pressed="true"
              >
                <video
                  style={{
                    clipPath: "ellipse(75% 100% at 50% 100%)",
                  }}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  src="/videos/lubu-into.mp4"
                />
                <div className="absolute bottom-3 right-3 z-20 ">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                    aria-label="Toggle sound"
                  >
                    <span className="text-white text-xl">
                      {isMuted ? "🔇" : "🔊"}
                    </span>
                  </button>
                </div>

                {/* Text Overlay Uper Video` */}
                <div className="absolute inset-0 bottom-0 flex flex-col items-center justify-end text-center pb-5">
                  {/* <div className="mb-5 flex items-center justify-center">
                    <Image
                      src="/images/michelin-2025.png"
                      alt="MICHELIN 2025 Selected"
                      width={72}
                      height={72}
                      priority
                    />
                  </div> */}
                  <div
                    id="comp-m26pfxo1"
                    className="mb-4 ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-m26pfxo1 wixui-rich-text"
                    data-testid="richTextElement"
                    data-motion-enter="done"
                  >
                    <h2
                      className="font_2 wixui-rich-text__text"
                      style={{ fontSize: "15px", textAlign: "center" }}
                    >
                      <span
                        style={{ fontSize: "15px" }}
                        className="wixui-rich-text__text"
                      >
                        <span
                          style={{ color: "#FFFFFF" }}
                          className="wixui-rich-text__text"
                        >
                          <span className="wixui-rich-text__text font-bold">
                            About
                          </span>
                        </span>
                      </span>
                    </h2>
                  </div>
                  <div
                    id="comp-m26pfxoj"
                    className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-m26pfxoj wixui-rich-text"
                    data-testid="richTextElement"
                    data-motion-enter="done"
                  >
                    <h1
                      className="font_9 wixui-rich-text__text"
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.4em",
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={{ fontSize: "15px" }}
                        className="wixui-rich-text__text"
                      >
                        <span
                          style={{ color: "#FFFFFF" }}
                          className="wixui-rich-text__text"
                        >
                          <span className="wixui-rich-text__text">
                            We are serving Modern Vietnamese Food in an Asian
                            Colonial house setting.
                            <br className="wixui-rich-text__text" />
                            Not only will you get to experience our recipe from
                            North to South
                            <br className="wixui-rich-text__text" />
                            but also see how far the food has traveled along the
                            Mekong River.
                            <br className="wixui-rich-text__text" />
                            Ms. Đồng welcomes you to her house in the middle of
                            New York City where
                          </span>
                          <br className="wixui-rich-text__text" />
                          <span className="wixui-rich-text__text">
                            &quot;Hospitality is our Currency.&quot;
                          </span>
                        </span>
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
