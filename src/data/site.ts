// Site-wide details: name, contact info, links. Edit these first.

export const site = {
  name: "Wilson Nguyen",
  initial: "W",
  role: "UI & Product Designer",
  shortRole: "UI & Product Designer",
  location: "Orange County, CA",
  // IANA timezone for the live clock in the footer.
  timezone: "America/Los_Angeles",
  timezoneLabel: "UTC-8 (PST)",
  email: "whnguyen23@gmail.com",
  resumeUrl: "/Wilson-Nguyen-Resume.pdf",
  // Leave empty to have the contact form open the visitor's email app.
  // Set to a Formspree (or similar) endpoint to receive submissions directly.
  formEndpoint: "",
  socials: [
    { label: "GitHub", href: "https://github.com/wilsick23" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/wilsonhbnguyen/" },
  ],
  interests: "Analogue 35mm • Custom Mechanical Switches • Single-Origin Espresso",
  portrait: "/Portrait.jpg",
};

export const nav = [
  { label: "Work", href: "/#work", key: "work" },
  { label: "About", href: "/about/", key: "about" },
  { label: "Contact", href: "/contact/", key: "contact" },
];
