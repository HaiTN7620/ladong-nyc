"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="comp-m2t6brbq"
      tabIndex={-1}
      className="Oqnisf comp-m2t6brbq wixui-section"
      data-block-level-container="ClassicSection"
    >
      <div
        className="hero-overlay"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid h-auto min-h-0 grid-rows-3 grid-cols-1 p-0 md:p-10 pb-25 pt-5 max-w-[930px] mx-auto">
            <div className="grid grid-cols-3 items-start">
              <div></div>
              <div></div>
              <div className="flex justify-end">
                {/* <Image
                  fetchPriority="high"
                  sizes="72px"
                  id="img_comp-mb06lmxx"
                  src="/images/michelin-2025.png"
                  alt="MICHELIN 2025_Selected_E-label.png"
                  style={{ objectFit: "cover" }}
                  className="BI8PVQ Tj01hh"
                  width={72}
                  height={72}
                /> */}
              </div>
            </div>

            <div className="flex justify-center items-start w-[150px] md:w-[399px] h-[168px] mx-auto">
              <Image
                fetchPriority="high"
                id="img_comp-m26q60qa"
                src="/images/logo1.png"
                alt="LUBU Logo"
                style={{ objectFit: "cover" }}
                className="BI8PVQ Tj01hh rounded-lg"
                width={170}
                height={168}
                // fill
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mx-auto mt-10">
              <div
                id="comp-m2s0auzb"
                className="hero-button"
                data-semantic-classname="button"
              >
                <a
                  data-testid="linkElement"
                  href="#"
                  className="hero-button-item wixui-button"
                  aria-label="MENU"
                >
                  <span className="hero-button-item__container">
                    <span
                      className="hero-button-item__label wixui-button__label"
                      data-testid="stylablebutton-label"
                    >
                      MENU
                    </span>
                  </span>
                </a>
              </div>

              <div
                id="comp-m7y8l6uk"
                className="hero-button"
                data-semantic-classname="button"
              >
                <a
                  data-testid="linkElement"
                  href="#"
                  rel="noreferrer noopener"
                  className="hero-button-item wixui-button"
                  aria-label="ORDER ONLINE"
                >
                  <span className="hero-button-item__container">
                    <span
                      className="hero-button-item__label wixui-button__label"
                      data-testid="stylablebutton-label"
                    >
                      ORDER ONLINE
                    </span>
                  </span>
                </a>
              </div>

              <div
                id="comp-m44vhhtg"
                className="hero-button"
                data-semantic-classname="button"
              >
                <a
                  data-testid="linkElement"
                  href="#"
                  rel="noreferrer noopener"
                  className="hero-button-item wixui-button"
                  aria-label="eGIFT CARD"
                >
                  <span className="hero-button-item__container">
                    <span
                      className="hero-button-item__label wixui-button__label"
                      data-testid="stylablebutton-label"
                    >
                      eGIFT CARD
                    </span>
                  </span>
                </a>
              </div>

              <div
                id="comp-m9z061ml"
                className="hero-button"
                data-semantic-classname="button"
              >
                <a
                  data-testid="linkElement"
                  href="#"
                  rel="noreferrer noopener"
                  className="hero-button-item wixui-button"
                  aria-label="RESERVATION"
                >
                  <span className="hero-button-item__container">
                    <span
                      className="hero-button-item__label wixui-button__label"
                      data-testid="stylablebutton-label"
                    >
                      RESERVATION
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* <div data-mesh-id="comp-m26pfxj3inlineContent-wedge-4"></div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
