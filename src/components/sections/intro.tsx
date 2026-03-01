"use client";

import { clipPath } from "framer-motion/client";
import Container from "../ui/container";
import Image from "next/image";
import { useState } from "react";

export default function Intro() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      id="comp-m2t6brbq1"
      tabIndex={-1}
      className="Oqnisf comp-m2t6brbq1 wixui-section"
      data-block-level-container="ClassicSection"
    >
      <div
        id="bgLayers_comp-m2t6brbq1"
        data-hook="bgLayers"
        data-motion-part="BG_LAYER comp-m2t6brbq1"
        className="MW5IWV"
      >
        <div data-testid="colorUnderlay" className="LWbAav Kv1aVt"></div>
        <div
          id="bgMedia_comp-m2t6brbq1"
          data-motion-part="BG_MEDIA comp-m2t6brbq1"
          className="VgO9Yg"
        ></div>
      </div>

      <div
        data-mesh-id="comp-m2t6brbq1inlineContent"
        data-testid="inline-content"
        className=""
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
              className="K0b3At"
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
                src="https://video.wixstatic.com/video/511aa7_d150dbaa3e164d16966d6ab6013a641e/1080p/mp4/file.mp4"
              />
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "370px",
            }}
          >
            <div className="mb-10 flex items-center justify-center">
              <Image
                src="https://static.wixstatic.com/media/511aa7_5088c12aff9a4adcbe5c30f680f611b8~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MICHELIN%202025_Selected_E-label.png"
                alt="MICHELIN 2025 Selected"
                width={72}
                height={72}
                priority
              />
            </div>
            <div
              id="comp-m26pfxo1"
              className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-m26pfxo1 wixui-rich-text"
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
                    <span className="wixui-rich-text__text">About</span>
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
                      We are serving Modern Vietnamese Food in an Asian Colonial
                      house setting.
                      <br className="wixui-rich-text__text" />
                      Not only will you get to experience our recipe from North
                      to South
                      <br className="wixui-rich-text__text" />
                      but also see how far the food has traveled along the
                      Mekong River.
                      <br className="wixui-rich-text__text" />
                      Ms. Đồng welcomes you to her house in the middle of New
                      York City where
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

          <div
            className="absolute bottom-2 right-[240px] z-20 "
          >
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
        </div>
      </div>
    </section>
  );
}
