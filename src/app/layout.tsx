import "./globals.css";

export const metadata = {
  title: "LUBU | Vietnamese Food in Union square | New York",
  description: `LUBU, We are serving Modern Vietnamese Food in an Asian Colonial house setting near Union square.
Not only you will get to experience our recipe from North to South but also see how far the food has traveled along the Mekong River.
Ms. Đồng welcomes you to her house in the middle of New York City where &quot;Hospitality is our Currency.&quot;`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">
        <main
          id="PAGES_CONTAINER"
          className="PAGES_CONTAINER"
          tabIndex={-1}
          data-main-content="true"
        >
          <div id="SITE_PAGES_TRANSITION_GROUP" className="AnQkDU">
            <div id="ffm1k" className="dBAkHi theme-vars ffm1k">
              <div className="PFkO7r wixui-page" data-testid="page-bg"></div>
              <div className="Containerffm1kinlineContent-gridContainer">
                {children}
              </div>
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
