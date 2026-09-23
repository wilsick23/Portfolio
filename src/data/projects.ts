// Projects shown on the home page, each with its own case study at /work/<slug>/.
// Each project lives in its own file in ./projects/. Order here is the order on the site.

import { mise } from "./projects/mise";
import { navigator } from "./projects/navigator";
import { ravers } from "./projects/ravers";

export type { Tone, Block, Section, Project } from "./types";

export const projects = [mise, navigator, ravers];
