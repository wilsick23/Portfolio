// Case study: Mise, a restaurant kitchen management dashboard.
import type { Project } from "../types";

const K = "/images/kitchen";

export const mise: Project = {
    slug: "mise",
    title: "Mise: Restaurant Dashboard",
    fullTitle: "Mise — Restaurant Kitchen Management Dashboard",
    tone: "primary",
    cardEyebrow: "Product Designer • Design Systems • 2026",
    cardSummary:
      "A kitchen display, front-of-house ordering flow, and tablet POS built on one token-driven design system, so every screen in the restaurant speaks the same language.",
    image: `${K}/05-kds-21.5.png`,
    imageAlt: "Kitchen display system showing a grid of color-coded order cards",
    category: "Restaurant Operations // 2026",
    summary:
      "An internal dashboard that helps restaurant staff track orders in real time, coordinate between front of house and kitchen, and move faster during rush periods.",
    meta: [
      { label: "Role", value: "Product Designer", detail: "Research, UX, Design System" },
      { label: "Timeline", value: "Aug – Sept 2026", detail: "Huntington Beach, CA" },
      { label: "Surfaces", value: "KDS, FOH & POS", detail: "21.5\" display & tablet" },
      { label: "Tools", value: "Figma & Claude", detail: "Claude Code, Codex" },
    ],
    heroCaption: "KDS-21.5\": the expo-station kitchen display, built entirely from the design system.",
    challenge: {
      heading: "Disconnected systems make shifts chaotic",
      paragraphs: [
        "Restaurant teams often juggle multiple disconnected systems for orders, kitchen communication, and inventory. This leads to missed tickets, delayed prep, poor visibility into stock, and slower service during rush periods.",
        "I started with three questions: What makes a shift chaotic? What slows people down? What causes mistakes?",
      ],
    },
    solution: {
      heading: "One system, connected across every role",
      paragraphs: [
        "I designed an internal dashboard to help staff track orders in real time, monitor the kitchen, and improve coordination between front of house and the line.",
        "Three surfaces are built end-to-end: the kitchen display system, real-time order tracking from front of house to kitchen, and the tablet POS including checkout. All three draw from one token-driven design system.",
      ],
    },
    sections: [
      {
        eyebrow: "Research",
        heading: "What slows restaurant teams down",
        blocks: [
          {
            type: "p",
            text: "I reviewed user feedback on tools restaurant and operations teams already use (Toast, Square, Trello, Jira, and Google Analytics) through Reddit threads and App Store reviews, then grouped the complaints into five themes.",
          },
          {
            type: "quotes",
            items: [
              {
                text: "Applying these modifiers to notate every allergy is tedious. This becomes especially true if guests are sharing appetizers.",
                source: "Toast user, Reddit",
              },
              {
                text: "Requires a lot of mousing and clicking around, which is error-prone and inefficient.",
                source: "Square user, Reddit",
              },
              {
                text: "I can never find the tickets I’m looking for.",
                source: "Jira user, App Store",
              },
            ],
          },
          {
            type: "cards",
            items: [
              {
                title: "Inefficient, tedious workflows",
                body: "Too many clicks, tedious allergy modifiers, and painful bulk edits slow people down under pressure.",
                detail: "Goal: minimize steps and enable fast, low-friction actions.",
              },
              {
                title: "Poor visibility & hierarchy",
                body: "Users can’t find tickets, can’t tell where an order goes, and can’t pull insights out of messy UIs.",
                detail: "Goal: prioritize critical information and improve scannability.",
              },
              {
                title: "Error-prone interactions",
                body: "Vague errors, lost progress, and unreliable saves erode trust and cause mistakes.",
                detail: "Goal: clear feedback, error prevention, and trust.",
              },
              {
                title: "No real-time awareness",
                body: "Unclear order routing and missing status or urgency signals lead to delays and confusion.",
                detail: "Goal: surface real-time status and alerts clearly.",
              },
              {
                title: "Hidden functionality",
                body: "Buttons buried by redesigns and hard setup make key actions hard to discover.",
                detail: "Goal: keep key actions visible and easy to reach.",
              },
            ],
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
              {
                icon: "bolt",
                tone: "primary",
                title: "Speed & minimal friction",
                body: "In a kitchen, every second counts. Visible actions, minimal taps, and smart defaults, not hidden menus or multi-step flows.",
              },
              {
                icon: "visibility",
                tone: "tertiary",
                title: "Clarity & scannability",
                body: "Real-time status, clear hierarchy, and at-a-glance awareness. The line cook and the manager need different views, but both need instant comprehension.",
              },
              {
                icon: "verified",
                tone: "secondary",
                title: "Reliability & trust",
                body: "No lost data, clear error states, and confirmation feedback. If someone marks an order as fired, the system can’t lose that.",
              },
            ],
          },
          { type: "p", text: "These three map directly to heuristics I tested every screen against." },
        ],
      },
      {
        eyebrow: "Structure",
        heading: "Information architecture by role",
        blocks: [
          {
            type: "p",
            text: "A line cook and a manager have very different mental models, so the app is organized around who is using it.",
          },
          {
            type: "cards",
            items: [
              {
                icon: "skillet",
                tone: "primary",
                title: "Kitchen staff",
                body: "The KDS (active orders) is home. Tap into order details. This is their 90% use case.",
              },
              {
                icon: "table_restaurant",
                tone: "tertiary",
                title: "Front of house",
                body: "Order entry → table and seat view → send to kitchen. Allergy flags live at the seat level: flag the seat, not every item.",
              },
              {
                icon: "monitoring",
                tone: "secondary",
                title: "Manager",
                body: "A hub of focused views for analytics, inventory, and scheduling, not one mega-screen.",
              },
            ],
          },
          { type: "image", src: `${K}/00-navigation.png`, alt: "Navigation structure for kitchen staff, front of house, and manager roles" },
        ],
      },
      {
        eyebrow: "Process",
        heading: "Hi-Fi first: designing with Claude",
        blocks: [
          { type: "image", src: `${K}/01-hifi-kds.png`, alt: "Original high-fidelity kitchen display mockup for The Ember Table" },
          {
            type: "p",
            text: "The project didn’t start with a system. It started with a single high-fidelity screen built with Claude: a dark-themed kitchen display for a restaurant called “The Ember Table,” with live counts (Active / Urgent / Ready), a two-row filter bar, and a grid of order cards color-striped by recency, each grouped into ENTRÉES / SIDES / SAUCE with a BUMP action.",
          },
          {
            type: "p",
            text: "Almost everything that shipped later is already here in embryo: recency-as-color, redundant status encoding (badge + timer, not color alone), and a card structure that became the `Order Cards` component set. This screen was the target to reverse-engineer, not just a mood board.",
          },
        ],
      },
      {
        eyebrow: "Process",
        heading: "From Hi-Fi to wireframe",
        blocks: [
          { type: "image", src: `${K}/02-wireframe.png`, alt: "Grayscale wireframe with six order card variants" },
          {
            type: "p",
            text: "From the Hi-Fi screen, I stripped the layout back to a grayscale wireframe: six card variants at different content densities, sharing the same header, filter row, and grouped-item structure. Sketching the wireframe *after* the Hi-Fi meant the skeleton I extracted was already proven to hold real order data at real density, not a guess at what might fit.",
          },
        ],
      },
      {
        eyebrow: "System",
        heading: "Building the design system",
        blocks: [
          { type: "image", src: `${K}/03-design-system-order-cards.png`, alt: "Design system order card components and variants" },
          {
            type: "p",
            text: "The wireframe’s skeleton became the basis for a design system organized as five token collections with a strict resolution order: **Brand → Alias → Mapped → Responsive → Visibility**.",
          },
          {
            type: "list",
            items: [
              { lead: "Brand", text: "holds raw primitives: color ramps, font families, the numeric scale." },
              { lead: "Alias", text: "maps primitives to semantic ramps (Primary, Neutral, food types, spacing, radius), with two brand themes." },
              { lead: "Mapped", text: "resolves alias colors into the role/variant/state colors components bind to, fully populated for Light and Dark Mode (173 of 190 variables differ)." },
              { lead: "Responsive", text: "carries dimensions and type scale across two device modes: Tablet (1194×834) and 21.5\" (1920×1080)." },
              { lead: "Visibility", text: "drives boolean layer visibility, like which ticket slots are showing, directly from screen state." },
            ],
          },
          {
            type: "p",
            text: "Colors follow a `{Role}/{Variant}/{State}` convention: a button is `Surface/primary/default`, a late-order header is `Surface/error/*`, so a token is picked by what it *means*, never by what it looks like. Typography is a single family (Manrope) across 44 text styles, and spacing follows a strict 4px scale. Every component ships with a `Focus` variant and its full set of documented states from day one.",
          },
          { type: "image", src: `${K}/04-design-system-typography.png`, alt: "Design system typography scale" },
          {
            type: "p",
            text: "Treating the system as the API paid off as soon as real screens needed building: a KDS card, a POS ticket line, and a table card all reuse the same `Order Cards`, `Badge`, and `Button` primitives instead of each inventing their own.",
          },
        ],
      },
      {
        eyebrow: "Kitchen",
        heading: "Designing KDS-21.5\" from the system",
        blocks: [
          { type: "image", src: `${K}/05-kds-21.5.png`, alt: "KDS-21.5 kitchen display screen" },
          {
            type: "p",
            text: "The kitchen display’s primary screen family is named for the 21.5-inch expo-station display it targets. It was promoted to primary partway through the project, ahead of the original iPad build, once it became clear the expo station, not a handheld, was the real kitchen home screen.",
          },
          {
            type: "p",
            text: "Working from the system changed what was possible to build quickly: an Active/Completed toggle with a sliding thumb, a double-tap arm-then-confirm recall flow (so one stray touch can’t un-bump a ticket), and an All Day panel that re-flows the grid to 6 columns without dropping a card. Because it’s all token-bound, a change to `Surface/primary/default` or the recency ramp propagates everywhere at once.",
          },
        ],
      },
      {
        eyebrow: "Front of House",
        heading: "Real-time order tracking",
        blocks: [
          { type: "image", src: `${K}/06-foh-tables.png`, alt: "Front-of-house table grid" },
          {
            type: "p",
            text: "The front-of-house flow (table → order entry → send to kitchen) was built as a five-frame prototype on the same system. The seat-level allergy design answers a pain point from the research: Toast users calling per-item allergy modifiers “tedious.” Here, flagging a seat cascades to everything ordered at it. The allergy lives with the *person*, not with each dish.",
          },
          { type: "image", src: `${K}/07-foh-order-sent.png`, alt: "Order sent confirmation screen" },
          {
            type: "p",
            text: "Sending an order is deliberately a single tap. Arm-then-confirm is reserved for destructive actions like removing a line, since servers send orders many times per shift and gating the most frequent action would work against the speed principle.",
          },
        ],
      },
      {
        eyebrow: "POS",
        heading: "Building the POS with the design system + AI",
        blocks: [
          { type: "image", src: `${K}/08-pos-tables.png`, alt: "Tablet POS floor plan" },
          {
            type: "p",
            text: "The three core POS screens (floor plan, order entry, checkout) started as a Claude-generated HTML artifact, already loosely aligned to the system’s tokens. Color came through almost exactly. What didn’t carry through cleanly were the *numbers*, and reconciling them against the token system, deliberately and visibly, is the real story here.",
          },
          { type: "image", src: `${K}/09-pos-order-entry.png`, alt: "Tablet POS order entry screen" },
          {
            type: "list",
            items: [
              { lead: "Type snapped to the real scale.", text: "The artifact’s 9/11/13/15/18px ramp doesn’t exist on Tablet, so every size moved to the nearest real token." },
              { lead: "Spacing snapped to the 4px grid,", text: "and stray hex values were remapped to the nearest semantic token." },
              { lead: "Touch targets widened.", text: "A ticket-line remove control went from 24×24px to a 44×44px floor, and the payment panel widened from 380 to 440px once real content wrapped buttons unevenly." },
              { lead: "Floor plan re-keyed to KDS data,", text: "so tables, statuses, timers, and servers match the tickets the kitchen display shows." },
            ],
          },
          {
            type: "p",
            text: "None of these were silent fixes. Each is logged as a dated deviation from the AI starting point, with the reasoning next to it. The system is the arbiter of what’s correct; the AI artifact is a fast, mostly-right first draft to reconcile against it.",
          },
          { type: "image", src: `${K}/10-pos-item-modal.png`, alt: "POS item configuration popup with quantity, modifiers, and allergies" },
          {
            type: "p",
            text: "The same discipline applies to a menu-item configuration popup (quantity, modifiers, allergies). Its allergy control was built *item-level*, contradicting the documented seat-level rule. Rather than shipping that silently, the conflict was surfaced and recorded as a named, scoped exception, so a later pass reconciling the two has a clear paper trail.",
          },
        ],
      },
      {
        eyebrow: "Accessibility",
        heading: "WCAG 2.1 AA as a floor, not a target",
        blocks: [
          {
            type: "p",
            text: "Accessibility is baked into the token system itself rather than checked against finished screens after the fact.",
          },
          {
            type: "list",
            items: [
              { lead: "Visible focus is mandatory.", text: "Every interactive component ships a `Focus` variant with a 2px ring that can’t be removed." },
              { lead: "Color never carries meaning alone.", text: "Recency pairs color with timer text, stations pair color with icons, allergies pair red with a ⚠ and an ALL-CAPS label." },
              { lead: "44px touch-target floor", text: "for primary, destructive, and bump actions, verified against rendered instances, not just token values." },
              { lead: "Contrast measured against real surfaces,", text: "not white, catching pairings that only looked compliant against white." },
              { lead: "Dark Mode is a supported theme,", text: "with 173 of 190 color tokens remapped and every contrast pair re-verified." },
            ],
          },
          {
            type: "p",
            text: "Treating accessibility as infrastructure also makes known gaps easy to name honestly: a few text styles are missing their letter-spacing, and Dark Mode contrast on the newer POS/FOH screens hasn’t been re-verified yet. Both are logged as open issues.",
          },
        ],
      },
      {
        eyebrow: "Workflow",
        heading: "Leveraging AI to build",
        blocks: [
          {
            type: "p",
            text: "AI shows up at every layer, in a specific, disciplined way: **the design system is the source of truth, and AI-generated work is reconciled against it, not trusted at face value.**",
          },
          {
            type: "list",
            items: [
              { lead: "AI-built starting points.", text: "The first Hi-Fi mockup and the POS screen bundle were first drafts produced with Claude." },
              { lead: "Every AI-authored value was checked.", text: "Type sizes, spacing, touch targets, and radii were measured against tokens and corrected, with each correction logged." },
              { lead: "Deviations are flagged, not silently made.", text: "Conflicts with documented rules are surfaced before building and recorded by name." },
              { lead: "Docs drift is fixed at the source,", text: "in the same pass that finds it, instead of being left to compound." },
              { lead: "Two agentic tools, one source of truth.", text: "Claude Code and Codex share the same rules files and a `HANDOFF.md`, so context survives a tool switch." },
            ],
          },
        ],
      },
      {
        eyebrow: "Results",
        heading: "Outcome",
        blocks: [
          {
            type: "stats",
            items: [
              { value: "3", tone: "primary", label: "Surfaces built end-to-end", body: "Kitchen display, front-of-house order tracking, and tablet POS with checkout." },
              { value: "173", tone: "tertiary", label: "Tokens remapped for Dark Mode", body: "Out of 190 color variables, with contrast re-verified rather than assumed." },
              { value: "44px", tone: "secondary", label: "Touch-target floor", body: "For every primary, destructive, and bump action across the system." },
            ],
          },
          {
            type: "p",
            text: "The original brief targeted a 40% reduction in average ticket time. That number was never measured against a real kitchen. This is a design exercise, not an instrumented product, so it’s the **hypothesis the work was designed against**, not a result. The checkable claims are the ones above: redundant status encoding, a seat-level allergy cascade, a single-tap send, and a token system where one fix propagates to every screen.",
          },
        ],
      },
      {
        eyebrow: "Next",
        heading: "What’s next",
        blocks: [
          {
            type: "list",
            items: [
              { lead: "Inventory management", text: "with low-stock alerts." },
              { lead: "Staff scheduling", text: "with shift swaps." },
              { lead: "Manager analytics", text: "covering sales, waste, and labor cost." },
            ],
          },
          {
            type: "p",
            text: "All three are scoped in the brief and IA, but were deliberately left for a later phase so the work could go deep on three surfaces instead of shallow on five.",
          },
        ],
      },
    ],
  };
