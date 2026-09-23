// Case study: Ravers Reaching Out, a festival meetup app.
import type { Project } from "../types";

const R = "/images/ravers";

export const ravers: Project = {
  slug: "ravers-reaching-out",
  title: "Ravers Reaching Out",
  fullTitle: "Ravers Reaching Out — Festival Squad App",
  tone: "tertiary",
  cardEyebrow: "UX Researcher & Designer • Social App • 2024",
  cardSummary:
    "A mobile app that turns strangers at the same music festival into a squad, using an on-site scavenger hunt with a free ticket on the line.",
  image: "/images/covers/Ravers.png",
  imageAlt: "Ravers Reaching Out logo: a winking smiley face in yellow",
  imageFit: "contain",
  imageBg: "#111111",
  category: "Social Computing // 2024",
  summary:
    "A mobile app that turns strangers at the same music festival into a squad, using an on-site scavenger hunt with a free ticket on the line.",
  meta: [
    { label: "Role", value: "UX Researcher & Designer", detail: "Survey, wireframes, lo-fi, testing" },
    { label: "Timeline", value: "10 Weeks", detail: "Winter 2024 · UCSD COGS 123" },
    { label: "Team", value: "5 Designers", detail: "Hi-fi by teammates" },
    { label: "Tools", value: "Figma", detail: "Google Forms, Sheets, paper" },
  ],
  challenge: {
    heading: "Surrounded by fans, only talking to your friends",
    paragraphs: [
      "Festivals are packed with thousands of people who love the same music, yet most people only talk to the friends they came with. And a lot of people never go at all because nobody they know is going.",
      "Our class asked us to invent a social computing experience that multiple people play in a specific setting, one that mixes people who’d never meet and where technology supports an in-person activity.",
    ],
  },
  solution: {
    heading: "Match into a group, then hunt together",
    paragraphs: [
      "**Ravers Reaching Out** matches people attending the same festival into small groups. Each group completes an on-site scavenger hunt, like taking a group photo at a favorite artist’s set.",
      "Every finished task is a raffle entry for a free festival ticket, which gives strangers a reason to actually meet up: a group, a shared goal, and a prize.",
    ],
  },
  sections: [
    {
      eyebrow: "Research",
      heading: "Surveying 37 students about festivals",
      blocks: [
        {
          type: "p",
          text: "We focused on **college students going to large EDM festivals**. Rave culture is already friendly toward strangers, but that friendliness rarely turns into a real connection. I designed and ran a Google Forms survey shared through our social circles: **37 responses** (36 college students, ages 19–24), **29 of them ravers**.",
        },
        {
          type: "stats",
          items: [
            { value: "84%", tone: "primary", label: "Say festivals are too expensive", body: "31 of 37 respondents: the top barrier to going." },
            { value: "38%", tone: "secondary", label: "Have no one to go with", body: "14 of 37 respondents said this keeps them home." },
            { value: "93%", tone: "tertiary", label: "Want a way to meet ravers", body: "27 of 29 ravers said it would help them." },
          ],
        },
        {
          type: "bars",
          title: "What keeps people from going (n=37)",
          items: [
            { label: "Too expensive", value: "31", pct: 84 },
            { label: "Lack of transportation", value: "15", pct: 41 },
            { label: "No one to go with", value: "14", pct: 38 },
          ],
        },
        {
          type: "bars",
          title: "Why ravers go (n=29)",
          items: [
            { label: "Enjoy the music", value: "27", pct: 93 },
            { label: "Have fun", value: "27", pct: 93 },
            { label: "Spend time with friends", value: "26", pct: 90 },
            { label: "Meet new people", value: "12", pct: 41 },
          ],
        },
        {
          type: "cards",
          items: [
            { title: "Having a crew decides whether people go", body: "Every raver surveyed goes with friends, and 4 of the 8 non-ravers said “no one to go with” is part of what stops them." },
            { title: "People want connection but don’t act on it", body: "93% want a way to meet ravers, yet only 41% go to meet new people. What’s missing is an easy first step." },
            { title: "Strangers feel safer with common ground", body: "69% were comfortable joining a group from their own school. Matching needs a shared starting point, and friends should be able to come along." },
            { title: "Cost matters most", body: "84% said festivals are too expensive, so a free ticket is a strong reason to try something new." },
          ],
        },
        {
          type: "p",
          text: "*Sample limits:* 36 of 37 respondents are college students from our own network, so the numbers show direction, not the whole festival population.",
        },
      ],
    },
    {
      eyebrow: "Foundations",
      heading: "Design principles",
      blocks: [
        {
          type: "cards",
          items: [
            { icon: "waving_hand", tone: "primary", title: "Make the first meeting easy", body: "Match people by festival and let the app set up the group. Nobody has to make a cold approach." },
            { icon: "flag", tone: "tertiary", title: "Give strangers a shared goal", body: "A task to do together takes away the awkward “so… what now?” moment." },
            { icon: "confirmation_number", tone: "secondary", title: "Reward showing up", body: "Use what people care about most, cost, as the reward for participating." },
          ],
        },
      ],
    },
    {
      eyebrow: "Process",
      heading: "User flow, wireframes & lo-fi",
      blocks: [
        {
          type: "p",
          text: "I mapped the main path first so the team agreed on scope before anyone drew screens: welcome → profile → pick a festival hunt → choose a group → group chat and meeting spot → tasks → photo upload → raffle entry, with more tasks earning more entries.",
        },
        { type: "image", src: `${R}/userflow.png`, alt: "User flow from welcome to raffle entry" },
        {
          type: "p",
          text: "I sketched the core screens by hand, then turned them into grayscale lo-fi screens to test the flow and hierarchy before adding any visual style. By lo-fi, the home page’s activity carousel had already become a swipeable card stack.",
        },
        {
          type: "gallery",
          items: [
            { src: `${R}/wireframes.png`, alt: "Hand-drawn wireframes" },
            { src: `${R}/lofi.png`, alt: "Lo-fi prototype with a swipeable card stack" },
          ],
        },
        {
          type: "p",
          text: "Our team built a mood board from dark-mode music apps and chose a **near-black background with a purple → magenta → coral gradient**, like festival stage lights, readable in a dark crowd, with bold yellow display type for headers.",
        },
        { type: "image", src: `${R}/styleguide.png`, alt: "Style guide with mood board and color palette" },
      ],
    },
    {
      eyebrow: "Testing",
      heading: "A live paper play-test",
      blocks: [
        {
          type: "p",
          text: "Since the whole point was a *multiplayer* experience, a single-user click-through wouldn’t tell us much. I ran a live paper prototype with classmates: each got a slip assigning them to a group, each group got a task (find “the artist” somewhere in the room), and we watched how groups formed and moved.",
        },
        {
          type: "callout",
          icon: "warning",
          text: "**What broke:** group members couldn’t find each other. Being assigned to a group didn’t help if you couldn’t tell where your group was, so players wandered before the hunt even started.",
        },
        {
          type: "callout",
          icon: "check_circle",
          text: "**What we changed:** every group gets a set meeting location. Members drop a pin on the venue map inside the group chat, which matters even more at a real festival with huge crowds and weak cell service.",
        },
        {
          type: "table",
          headers: ["", "Before", "After", "Why"],
          rows: [
            ["**Finding your group**", "Assigned a group, no meet-up point", "Each group gets a set meeting location", "Play-testers couldn’t find each other"],
            ["**Discovering activities**", "Horizontal carousel", "Swipe cards: left to skip, right to join", "Faster, one-at-a-time decisions with a familiar gesture"],
            ["**Forming groups**", "Random only", "Randomize *or* add friends", "14% were uncomfortable joining strangers"],
          ],
        },
        { type: "image", src: `${R}/iteration_meetpin.png`, alt: "Before and after: group chat with a pinned meeting spot on the venue map" },
      ],
    },
    {
      eyebrow: "Solution",
      heading: "From stranger to squad",
      blocks: [
        {
          type: "p",
          text: "Hi-fi screens were designed by my teammates Colby Lee, Shauna Huang, Elisha Chong, and Sujana Nagasuri from our shared wireframes and style guide.",
        },
        {
          type: "p",
          text: "**1 · Onboard with a vibe, not a résumé.** The profile asks for a favorite artist, location, and a fun rave fact: quick conversation starters, and location makes it possible to match people from nearby schools.",
        },
        { type: "image", src: `${R}/flow1_onboard.png`, alt: "Splash, create account, and profile information screens" },
        {
          type: "p",
          text: "**2 · Discover what’s happening.** Enter your festival and date, then swipe through activity cards: right to join, left to skip.",
        },
        { type: "image", src: `${R}/flow2_discover.png`, alt: "Find Activities swipe cards and profile screen" },
        {
          type: "p",
          text: "**3 · Join a hunt, get a crew.** Pick your festival, then choose **Randomize** to be matched with strangers or **Add friends** to bring your people. Both lead to the same shared hunt.",
        },
        { type: "image", src: `${R}/flow3_join.png`, alt: "Upcoming hunts and choose a group screens" },
        {
          type: "p",
          text: "**4 · Meet your group.** See your group’s faces and handles and coordinate in a group chat, where members pin a meeting spot on the venue map: the play-test fix.",
        },
        { type: "image", src: `${R}/flow4_meet.png`, alt: "Your group, chats, and group chat with meeting pin" },
        {
          type: "p",
          text: "**5 · Complete tasks, win a ticket.** For example: *“Take a group photo in front of your favorite artist’s set!”* Upload the photo to enter the raffle. More tasks earn more entries, which keeps groups together through the day.",
        },
        { type: "image", src: `${R}/flow5_tasks.png`, alt: "Tasks, task detail, photo upload, and raffle confirmation" },
      ],
    },
    {
      eyebrow: "Theory",
      heading: "Connecting to social computing",
      blocks: [
        {
          type: "table",
          headers: ["Concept", "How it shows up"],
          rows: [
            ["**Strength of weak ties** (Granovetter)", "The app deliberately creates loose ties between strangers who share a festival, instead of only reinforcing existing friend groups."],
            ["**Third places** (Oldenburg)", "A festival is a temporary third place. The app adds the structure that turns sharing a space into actually interacting."],
            ["**Common ground & shared tasks**", "The scavenger hunt is the icebreaker, and profile details give people something to talk about."],
            ["**Designing for co-location**", "Tasks can only be completed by being physically together at the event."],
            ["**Extrinsic vs. intrinsic motivation**", "The raffle gets people to try it. The bet is that the group experience becomes the reason they come back."],
          ],
        },
      ],
    },
    {
      eyebrow: "Reflection",
      heading: "Impact & what I learned",
      blocks: [
        {
          type: "list",
          items: [
            { lead: "The concept tested well:", text: "27 of 29 ravers said a service like this would help." },
            { lead: "Multiplayer testing found what a solo walkthrough couldn’t:", text: "groups couldn’t find each other, which led directly to the meeting-location feature." },
            { lead: "The prize addresses the #1 barrier,", text: "turning cost into a reason to take part." },
          ],
        },
        {
          type: "p",
          text: "**Limitations:** a small, similar sample; only paper play-testing so far; and safety and trust around meeting strangers at a rave aren’t solved yet. **Next,** I’d verify users with .edu emails, add safety features (location sharing, report/block, staff check-in points as meeting spots), usability-test the hi-fi prototype, and measure success by how many groups meet up and finish a task, not downloads.",
        },
        {
          type: "cards",
          items: [
            { title: "Test social products socially", body: "The hardest part of a multiplayer experience is often logistics (*where are you?*), not the interface." },
            { title: "Let the data narrow the scope", body: "Cost and “no one to go with” pointed us straight to the prize and group mechanics." },
            { title: "Low fidelity is fast", body: "One round of paper slips in a classroom uncovered our biggest flaw before any polished screens." },
          ],
        },
      ],
    },
  ],
};
