import styled from "@emotion/styled";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useSetAtom } from "jotai";

import { AllowedSender } from "./AllowedSender";

import { progressAtom } from "../Onboarding";

const Root = styled(motion.div)`
  position: relative;
  width: auto;
  height: 220px;
  background-color: #f7f7f7;
  overflow: hidden;

  mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzk4IiBoZWlnaHQ9IjE4OSIgdmlld0JveD0iMCAwIDM5OCAxODkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yODYuNTQ4IDE4OC4zNDNDMTg3LjU0OCAxODguMzQzIDE5Ljk0ODQgMTg2Ljc1MiAxNi4yODg0IDE4NS45ODRDNS45NTg0MyAxODMuODA4IDQuNTI4NDMgMTc4LjY4MiA0LjQzODQzIDE3NC40NUM0LjM4ODQzIDE3MS44NTUgNC4xMzg0MyAxNjUuMjExIDMuNzk4NDMgMTU2LjAxQzIuMjc4NDMgMTE0LjU2MyAtMC44ODE1NzUgMjguMzAzOSAxLjY2ODQzIDEwLjEyMDJWOS43NzE5NUMyLjIwODQzIDUuOTE0NDEgMi44MDg0MyAzLjgxODA2IDQuNjY4NDMgMy42NDcxOUMxMS4zNDk3IDIuOTkxMzUgMTguMDc5MSAyLjU2Nzk5IDI0LjgyODQgMi4zNzg4N0M2OS41NTg0IDEuMjM1NDEgMTE4LjA1OCAwLjY1NzEwNCAxNzMuMDk4IDAuNjU3MTA0SDE5My41OThDMjIxLjcyOCAwLjcxNjI0OSAyNTAuMjY4IDAuOTQ2MjU2IDI3OC40MTggMS4zMTQyN0MyODQuMzQ4IDEuMzkzMTMgMjkyLjE3OCAxLjQ1MjI3IDMwMC40NjggMS41MTc5OUMzMTIuMTQ4IDEuNjA5OTkgMzI0LjIyOCAxLjcwMTk5IDMzMi41NTggMS44NjYyOEMzMzkuNDM4IDEuOTk3NzIgMzQ2LjMxMiAyLjE0NjY3IDM1My4xNzggMi4zMTMxNUMzNTQuOTY4IDIuMzUyNTggMzU2Ljc2OCAyLjM4NTQ0IDM1OC41NjggMi40MTE3M0MzNjMuMzg4IDIuNDk3MTYgMzY4LjM3OCAyLjU4MjU5IDM3My4yMDggMi44ODQ4OUMzNzkuMzU4IDMuMjc5MTggMzgzLjc4OCA0LjMxMDkzIDM4Ni43MzggNi4wMzkyN0MzODkuOTk4IDcuOTQ1MDQgMzkxLjA4OCAxMC4zMzcxIDM5Mi4wNDggMTIuNDUzMkMzOTQuMTY4IDE3LjEyNTYgMzk1LjgzOCA5OS45MDE4IDM5Ni45MDggMTYxLjc2N0MzOTYuOTk4IDE2Ny4yMjIgMzk3LjA2OCAxNzEuMDMzIDM5Ny4wOTggMTcyLjYwNEMzOTcuMTk4IDE3Ny4wMTMgMzk2LjE4OCAxODIuNDYxIDM4Ny40ODggMTg1LjQ5N0MzODIuNzI4IDE4Ny4xNiAzNzAuNTc4IDE4Ny40MzYgMzYzLjMwOCAxODcuNjA3QzM2Mi4xMDggMTg3LjYwNyAzNjEuMDg4IDE4Ny42NTMgMzYwLjMwOCAxODcuNjc5QzM0OC4zMDggMTg4LjA4NiAzMjMuNTI4IDE4OC4yOSAyODYuNDk4IDE4OC4yOUwyODYuNTQ4IDE4OC4zNDNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");
  mask-repeat: no-repeat;
  mask-size: contain;
`;

const Container = styled.div`
  width: 100%;
`;

const List = styled(motion.div)`
  padding: 0 2rem;
`;

const listVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { when: "afterChildren" },
  },
  visible: {
    opacity: 1,
    y: ["25%", "-100%"],
    transition: {
      opacity: { duration: 0.2 },
      y: { duration: 6, type: "keyframes", ease: "linear" },
      delayChildren: 0.25,
      staggerChildren: 0.25,
      staggerDirection: 1,
    },
  },
};

const MOCK: AllowedSender[] = [
  {
    displayName: "Beck Fields",
    emailAddress: "beck_fields@tetak.jetzt",
  },
  {
    displayName: "Vinson Chang",
    emailAddress: "vinson_chang@senmei.gp",
  },
  {
    displayName: "Lowe Dunlap",
    emailAddress: "lowe_dunlap@ewaves.london",
  },
  {
    displayName: "Britney Sampson",
    emailAddress: "britney_sampson@translink.courses",
  },
  {
    displayName: "Ella Love",
    emailAddress: "ella_love@flotonic.cleaning",
  },
  {
    displayName: "Daugherty Sweet",
    emailAddress: "daugherty_sweet@orbixtar.pa",
  },
  {
    displayName: "Vicki Holcomb",
    emailAddress: "vicki_holcomb@ovium.tickets",
  },
  {
    displayName: "Fuller Huffman",
    emailAddress: "fuller_huffman@grupoli.eus",
  },
  {
    displayName: "Roxie Martin",
    emailAddress: "roxie_martin@evidends.homes",
  },
  {
    displayName: "Vera Mcintosh",
    emailAddress: "vera_mcintosh@eternis.wiki",
  },
];

export const OnboardingAnimationAllowedSenders = () => {
  const setProgress = useSetAtom(progressAtom);

  // TODO: If allowed senders results is less than 10, skip this step and proceed to next...

  return (
    <Root>
      <Container>
        <List
          variants={listVariants}
          initial="hidden"
          animate="visible"
          // onAnimationStart={() => setProgress(9)}
          // onAnimationComplete={() => setProgress(16)}
        >
          <AnimatePresence>
            {MOCK.map((i, idx) => (
              <AllowedSender {...i} key={`sender-${idx}`} custom={idx} />
            ))}
          </AnimatePresence>
        </List>
      </Container>
    </Root>
  );
};
