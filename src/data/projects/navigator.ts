// Case study: Navigator, a cart-mounted grocery kiosk.
import type { Project } from "../types";

const N = "/images/navigator";

export const navigator: Project = {
  slug: "navigator",
  title: "Navigator: Grocery Cart Kiosk",
  fullTitle: "Navigator — Grocery Cart Kiosk",
  tone: "secondary",
  cardEyebrow: "UX Researcher • Kiosk Design • 2023",
  cardSummary:
    "A touchscreen kiosk mounted on the grocery cart that shows where an item is, whether it’s in stock, and which nearby stores carry it, before shoppers give up.",
  image: "/images/covers/Navigator.png",
  imageAlt: "Navigator item page showing aisle location, stock status, and nearby stores",
  category: "Retail Kiosk // 2023",
  summary:
    "A cart-mounted kiosk that helps grocery shoppers find what they came for before they give up.",
  meta: [
    { label: "Role", value: "UX Researcher", detail: "Research, wireframes, hi-fi visuals" },
    { label: "Timeline", value: "July – Aug 2023", detail: "UCSD · DSGN 100" },
    { label: "Team", value: "6 Designers", detail: "Prototyping course" },
    { label: "Tools", value: "Figma", detail: "Makerspace prototype" },
  ],
  challenge: {
    heading: "Shoppers give up quietly",
    paragraphs: [
      "Grocery stores are big, layouts vary from chain to chain, and there are few employees on the floor. When a shopper can’t find an item, the usual fix is to wander, ask someone, or give up and order it online.",
      "Grocery shoppers waste time and give up on items because they can’t tell where a product is or whether it’s in stock. There’s often no one around to ask, and many shoppers wouldn’t ask even if there were.",
    ],
  },
  solution: {
    heading: "A map, a stock check, and a way out",
    paragraphs: [
      "**Navigator** is a touchscreen kiosk mounted on the grocery cart. Shoppers search or browse for an item and see its aisle on a live store map that marks where their cart is.",
      "If the item is out of stock, Navigator shows nearby stores that carry it and how far away each one is, so there’s always a next step.",
    ],
  },
  sections: [
    {
      eyebrow: "The Brief",
      heading: "Why a kiosk, and not an app?",
      blocks: [
        {
          type: "p",
          text: "Our brief was to design an interactive kiosk for a retail or food setting that uses physical interaction to feel intuitive, consistent, and reliable, and only if a kiosk really was the *right* answer. We had to defend the format:",
        },
        {
          type: "cards",
          items: [
            { icon: "front_hand", tone: "secondary", title: "Already in your hands", body: "Shoppers push the cart the whole trip, so a screen on the handle is always in reach. No phone needed." },
            { icon: "my_location", tone: "secondary", title: "The cart knows where it is", body: "A cart-mounted device can show a real “You are here” marker indoors, which a general phone app can’t easily do." },
            { icon: "download_done", tone: "secondary", title: "Nothing to download", body: "It works for every shopper, including people who don’t want another store app or account." },
            { icon: "shopping_cart", tone: "secondary", title: "It moves with you", body: "The kiosk travels through the store with the cart, so the map can update as shoppers walk." },
          ],
        },
      ],
    },
    {
      eyebrow: "Research",
      heading: "Shadowing a real shopping trip",
      blocks: [
        {
          type: "p",
          text: "Each of the six team members ran contextual field research at a grocery or big-box store using a shared interview guide. I shadowed a shopper at **Target** during a real trip, watching how she moved through the store and interviewing her along the way.",
        },
        {
          type: "callout",
          icon: "lightbulb",
          text: "**The insight that shaped the project:** she couldn’t find her item on about **4 out of 10** trips. She gave up after about five minutes, didn’t ask staff, and went home to buy it online.",
        },
        {
          type: "list",
          items: [
            { lead: "Gets lost easily.", text: "Store layouts aren’t intuitive to her, the main reason she avoids shopping in person." },
            { lead: "Has a five-minute limit.", text: "If she hasn’t found an item in about five minutes, she stops looking." },
            { lead: "Won’t ask for help.", text: "She’d rather “maybe find it online later” than find an employee." },
            { lead: "Will switch stores for the item.", text: "She’d drive to another store within about **20 minutes** if she knew it had what she needed." },
            { lead: "Has used store map kiosks before", text: "and found them easy, a sign shoppers would accept a kiosk." },
          ],
        },
        {
          type: "cards",
          items: [
            { title: "People give up quickly and quietly", body: "Shoppers don’t complain when they can’t find something. They just leave, and the store loses the sale." },
            { title: "Asking staff is a last resort", body: "Busy employees and social friction mean shoppers would rather help themselves." },
            { title: "Stock uncertainty wastes time", body: "Shoppers can’t tell “I can’t find it” from “it isn’t here,” so they keep searching for items that aren’t on the shelf." },
            { title: "A backup plan keeps people moving", body: "Shoppers will go to another store, but only if they know it’s worth the trip." },
          ],
        },
      ],
    },
    {
      eyebrow: "Persona & Goals",
      heading: "Designing for Maya, the online-first shopper",
      blocks: [
        {
          type: "quotes",
          items: [{ text: "I’ll just look for it online later.", source: "Maya, based on my Target interview" }],
        },
        {
          type: "p",
          text: "Maya wants to get in, find what’s on her list, and get out. She gets lost in unfamiliar layouts, can’t tell whether an item is out of stock or just hard to find, and doesn’t want to track down a busy employee. She needs a fast, self-serve way to know *where* an item is and *whether* it’s there.",
        },
        {
          type: "callout",
          icon: "help",
          text: "**How might we** help shoppers find any item in under five minutes, without asking an employee, and give them a clear next step when an item isn’t available?",
        },
        {
          type: "list",
          items: [
            { lead: "Find it fast:", text: "search and browse by category, then go straight to the item’s aisle." },
            { lead: "Show, don’t tell:", text: "a store map with a “You are here” marker instead of a list of aisle numbers." },
            { lead: "Be honest about stock:", text: "show stock status on the item page, before the shopper walks over." },
            { lead: "Always offer a way out:", text: "if the item isn’t there, suggest nearby stores that have it, with distances." },
            { lead: "Easy on the move:", text: "large tap targets and few steps, since shoppers use it while pushing a cart." },
          ],
        },
      ],
    },
    {
      eyebrow: "Process",
      heading: "Wireframes: structure before style",
      blocks: [
        {
          type: "p",
          text: "Our first wireframes focused on the three questions every screen had to answer: **What aisle? Is it in stock? Where else can I get it?** That meant a simple “Tap to start” screen, item screens pairing a product photo with its aisle and stock, a full store map with a “You are here” marker, and a multi-item view for checking several items at once.",
        },
        { type: "image", src: `${N}/wireframe-overview.png`, alt: "Full wireframe flow: map screens on top, item and multi-item screens below" },
        {
          type: "gallery",
          items: [
            { src: `${N}/wireframe-map.png`, alt: "Wireframe store map with numbered aisles, cashier, entrance, and exit" },
            { src: `${N}/wireframe-item.png`, alt: "Wireframe item screen with aisle, stock indicator, and other stores" },
          ],
        },
      ],
    },
    {
      eyebrow: "Visual Direction",
      heading: "Warm and fresh, not techy",
      blocks: [
        {
          type: "p",
          text: "I helped build a moodboard of grocery and food-ordering interfaces. We landed on a warm, fresh look that fits a grocery store more than a tech product, with every color assigned one job:",
        },
        {
          type: "list",
          items: [
            { lead: "Cream background:", text: "soft and easy to read under bright store lighting." },
            { lead: "Forest green:", text: "the main brand color, suggesting fresh produce, used for map aisles and the “Found It” confirmation." },
            { lead: "Orange:", text: "secondary actions and the target aisle on the map, so the destination stands out." },
            { lead: "Red:", text: "used only for “out of stock,” so it always means one thing." },
          ],
        },
        {
          type: "gallery",
          items: [
            { src: `${N}/moodboard.png`, alt: "Moodboard of grocery and food-ordering interfaces" },
            { src: `${N}/palette.png`, alt: "Navigator palette: cream, forest green, sage, orange, red" },
          ],
        },
      ],
    },
    {
      eyebrow: "Solution",
      heading: "From tap to found it",
      blocks: [
        { type: "p", text: "**1 · Tap to begin.** An idle screen with the Navigator logo and one clear call to action. Nothing to sign into." },
        { type: "image", src: `${N}/tap-to-begin.png`, alt: "Tap to Begin screen" },
        {
          type: "p",
          text: "**2 · Search or browse.** A persistent search bar sits at the top of every screen. Shoppers who aren’t sure what something is called can browse visual categories, then a product grid.",
        },
        {
          type: "gallery",
          items: [
            { src: `${N}/categories.png`, alt: "Categories: Vegetables, Snacks, Teas" },
            { src: `${N}/product-grid.png`, alt: "Product grid for Teas" },
          ],
        },
        {
          type: "p",
          text: "**3 · Where it is, whether it’s there, and where else to get it.** Each item page shows the price, “Located in Aisle 6,” and stock status, plus an **Also Available at** list of nearby stores with distances. This came straight from research: shoppers will drive about 20 minutes, but only if they know it’s worth it.",
        },
        { type: "image", src: `${N}/item-page.png`, alt: "Item page with aisle, stock status, and nearby stores with distances" },
        {
          type: "p",
          text: "**4 · Follow the highlight.** The map highlights the target aisle in orange with a ★ You are here marker. Shoppers tap **Found It ✓** when they succeed, or “Not there or out of stock?” to get back to their options.",
        },
        { type: "image", src: `${N}/map-view.png`, alt: "Map view with highlighted aisle, You are here marker, and Found It button" },
        {
          type: "p",
          text: "**5 · Finish.** A friendly thank-you screen closes the session, so the next shopper who takes the cart starts fresh.",
        },
        { type: "image", src: `${N}/thank-you.png`, alt: "Thank-you screen" },
      ],
    },
    {
      eyebrow: "Testing",
      heading: "Usability testing & iteration",
      blocks: [
        {
          type: "p",
          text: "Participants completed three tasks on the hi-fi prototype: find a specific peach tea using categories, find Oreos using search, and find red bell peppers using categories. The design changed from wireframe to hi-fi in five ways:",
        },
        {
          type: "list",
          items: [
            { lead: "Map tied to the item.", text: "The map opens from the item page and keeps the product card on screen, so shoppers always know what they’re looking for." },
            { lead: "A clear finish.", text: "A **Found It ✓** button confirms success and brings the shopper back to search." },
            { lead: "An escape link.", text: "“Not there or out of stock?” sits under the map, so an empty shelf never leaves the shopper stuck." },
            { lead: "Distances, not just store names.", text: "A plain list of stores became logos with distances, so shoppers can decide if the trip is worth it." },
            { lead: "Categories alongside search.", text: "Search alone assumed shoppers knew the exact product name." },
          ],
        },
      ],
    },
    {
      eyebrow: "Feedback",
      heading: "What the final critique taught me",
      blocks: [
        {
          type: "p",
          text: "Our instructors said the team “did a really great job,” and also gave specific critical feedback. That feedback taught me the most:",
        },
        {
          type: "table",
          headers: ["Feedback", "What I took from it", "What I’d change"],
          rows: [
            [
              "No physical interaction beyond the touchscreen.",
              "We explained why the kiosk belonged on the cart, but didn’t design for what being on the cart makes possible.",
              "Add a **barcode scanner** on the handle, use cart sensors to move “You are here” automatically, and brand the cart housing.",
            ],
            [
              "The search bar cluttered later screens.",
              "A feature that’s always there isn’t always helpful. On the map, the shopper has already found the item.",
              "Keep full search on home and category screens, then shrink it to an icon on item and map screens.",
            ],
            [
              "The style guide wasn’t used consistently.",
              "With six designers working in parallel, a style guide only works if it’s built into the file.",
              "Set up shared Figma text styles and components *before* hi-fi.",
            ],
            [
              "Research and testing weren’t clearly documented.",
              "If the research isn’t shown, reviewers can’t trust the insights, even when the research was done.",
              "Cite the source interview for every insight and include the interview guide and test script.",
            ],
            [
              "Sketches didn’t show much exploration.",
              "We settled on the first concept that worked.",
              "Run a divergent sketch round (like Crazy 8s) first and keep rejected ideas.",
            ],
          ],
        },
      ],
    },
    {
      eyebrow: "Reflection",
      heading: "What I learned",
      blocks: [
        {
          type: "list",
          items: [
            { lead: "Research should lead to the solution.", text: "The “4 in 10” and five-minute findings shaped the whole product: speed, stock visibility, and the out-of-stock fallback." },
            { lead: "Decide whether it should be a kiosk at all.", text: "Tying the device to the cart’s physical location is what made a kiosk better than an app." },
            { lead: "Design for a noisy setting.", text: "A shopper pushing a cart can only glance at the screen, which pushed me toward bigger type, fewer steps, and color that means one thing." },
            { lead: "Work across a team of six.", text: "Combining six sets of field research into shared personas taught me to find patterns without losing each person’s details." },
          ],
        },
        {
          type: "p",
          text: "**Next,** I’d prototype the physical scanner and cart mount, test in a real store with the screen on a cart, check contrast against WCAG and add audio guidance, support shopping lists with a route through the store, and explore how live inventory and in-store positioning would actually be supplied.",
        },
      ],
    },
  ],
};
