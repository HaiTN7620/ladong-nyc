import Image from "next/image";

export default function FeaturedMenu() {
  return (
    <section>
      <div className="comp-m2t6brbrbg" style={{ backgroundColor: "#000" }}>
        <div
          id="#comp-m2t6brbr "
          className="max-w-[1197px] mx-auto"
          style={{
            margin: "0px auto",
            paddingBottom: 20,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div
              className="col-span-1 flex flex-col items-start text-left py-10 px-7"
              style={{
                backgroundImage: `url("https://static.wixstatic.com/media/511aa7_5ca85a2ed86f4a20aa7c58c509a02096~mv2.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div>
                <p
                  style={{
                    lineHeight: 1.4,
                    marginBottom: 20,
                  }}
                >
                  <span
                    className="wixui-rich-text__text"
                    style={{ backgroundColor: "#8B0000" }}
                  >
                    Walk-ins are always welcome! Please note that we seat
                    complete parties only, so we kindly ask that all members of
                    your group arrive on time.
                  </span>
                </p>
                <p
                  style={{
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    className="wixui-rich-text__text"
                    style={{ backgroundColor: "#8B0000" }}
                  >
                    To ensure every guest has the opportunity to enjoy
                  </span>
                </p>
                <p
                  style={{
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    className="wixui-rich-text__text"
                    style={{ backgroundColor: "#8B0000" }}
                  >
                    LUBU, we kindly request the following dining times:
                  </span>
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    <span>Parties of 1–4: 1 hour 30 minutes</span>
                  </li>
                  <li>
                    <span>Parties of 5–7: 1 hour 45 minutes</span>
                  </li>
                  <li>
                    <span>Parties of 8 or more: 2 hours</span>
                  </li>
                </ul>
                <p
                  style={{
                    lineHeight: 1.4,
                    marginTop: 20,
                  }}
                >
                  <span
                    style={{ backgroundColor: "#8B0000" }}
                    className="wixui-rich-text__text"
                  >
                    For reservations of 8+ guests or special event inquiries,
                    please email us at{" "}
                    <a
                      data-auto-recognition="true"
                      href="#"
                      className="wixui-rich-text__text"
                    >
                      reservation@lubu.com
                    </a>{" "}
                    for assistance.
                  </span>
                </p>

                <p
                  className="font_8 wixui-rich-text__text-white mt-5"
                  style={{
                    fontSize: "16px",
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  <span
                    style={{ color: "#FFFFFF" }}
                    className="wixui-rich-text__text-white"
                  >
                    <a
                      href="#"
                      rel="noreferrer noopener"
                      className="wixui-rich-text__text-white"
                    >
                      <span
                        style={{
                          fontFamily:
                            "wfont_891e54_0056bd020e6f42b4bb4c809e7fb887b3, wf_0056bd020e6f42b4bb4c809e7, orig_merriweather_light",
                        }}
                        className="wixui-rich-text__text-white"
                      >
                        Mt.Juliet, TN
                      </span>
                    </a>
                  </span>
                </p>

                {/* <p
                  className="font_8 wixui-rich-text__text-white mt-5"
                  style={{
                    fontSize: "16px",
                    textAlign: "center",
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  <span
                    style={{ color: "#FFFFFF" }}
                    className="wixui-rich-text__text-white"
                  >
                    <a
                      href="tel:+1917-289-0019"
                      className="wixui-rich-text__text-white"
                    >
                      <span
                        style={{
                          fontFamily:
                            "wfont_891e54_0056bd020e6f42b4bb4c809e7fb887b3, wf_0056bd020e6f42b4bb4c809e7, orig_merriweather_light",
                        }}
                        className="wixui-rich-text__text-white"
                      >
                        +1 917-289-0019
                      </span>
                    </a>
                  </span>
                </p> */}

                <div id="comp-m2s02ryb5" className="comp-m2s02ryb5 WzbAF8">
                  <a
                    data-testid="linkElement"
                    href="https://www.instagram.com/lubu.kitchen/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="oRtuWN"
                    aria-label="Instagram"
                  >
                    <Image
                      src={
                        "https://static.wixstatic.com/media/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png"
                      }
                      alt={"Instagram"}
                      width={40}
                      height={40}
                      style={{ objectFit: "cover" }}
                      className="YaS0jR Tj01hh"
                    />
                  </a>
                  <a
                    data-testid="linkElement"
                    href="https://www.facebook.com/profile.php?id=61583086821764"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="oRtuWN"
                    aria-label="Facebook"
                  >
                    <Image
                      src={
                        "https://static.wixstatic.com/media/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png"
                      }
                      alt={"Facebook"}
                      width={40}
                      height={40}
                      style={{ objectFit: "cover" }}
                      className="YaS0jR Tj01hh"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 flex flex-col items-start text-left py-10 px-7 md:border-l md:border-l-[0.5px] md:border-l-[#f5f0e6]"
              style={{
                backgroundImage: `url("https://static.wixstatic.com/media/511aa7_d81bfa371b034e6ba18e71ad5ee64cba~mv2.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // borderLeft: "0.5px solid #f5f0e6",
              }}
            >
              {/* Form đăng ký nhận tin tức và ưu đãi đặc biệt */}
              <div className="w-full px-12">
                <form className="flex flex-col gap-5 contact-form">
                  {/* Name Field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="newsletter-name"
                      className="text-[#f5f0e6] text-[18px] font-bold form-label"
                    >
                      Name
                    </label>
                    <input
                      id="newsletter-name"
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#f5f0e6] text-base"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="flex flex-col gap-2 ">
                    <label
                      htmlFor="newsletter-phone"
                      className="text-[#f5f0e6] text-[18px] font-bold form-label"
                    >
                      Phone Number
                    </label>
                    <input
                      id="newsletter-phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#f5f0e6] text-base"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="newsletter-email"
                      className="text-[#f5f0e6] text-[18px] font-bold form-label"
                    >
                      Email <span className="text-black not-italic">*</span>
                    </label>
                    <input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#f5f0e6] text-base"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="newsletter-message"
                      className="text-[#f5f0e6] text-[18px] font-bold form-label"
                    >
                      Message
                    </label>
                    <textarea
                      id="newsletter-message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#f5f0e6] text-base resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "rgb(143, 15, 9)",
                      fontSize: "20px",
                      boxShadow: "0 1px 4px rgba(0, 0, 0, .6)",
                    }}
                    className="rounded w-full px-4 py-1 bg-[#7a1818] text-white font-bold text-lg tracking-wider uppercase shadow-md hover:bg-[#5a1212] transition-colors mt-2"
                  >
                    SUBMIT FORM
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          id="comp-m2tj2ier"
          className="MazNVa comp-m2tj2ier wixui-image"
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          <div
            data-testid="linkElement"
            className="j7pOnl"
            style={{
              width: 72,
              height: 63,
            }}
          >
            <Image
              loading="lazy"
              id="img_comp-m2tj2ier"
              src="/images/logo.jpg"
              alt="LUBU Logo"
              style={{ objectFit: "cover" }}
              className="BI8PVQ Tj01hh rounded-full"
              width={72}
              height={63}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
