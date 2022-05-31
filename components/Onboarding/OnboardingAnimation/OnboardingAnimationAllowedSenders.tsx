import styled from "@emotion/styled";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useSetAtom } from "jotai";

import { AllowedSender, itemVariants } from "./AllowedSender";

import { progressAtom } from "../Onboarding";

const Root = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 260px;
  background-color: #f7f7f7;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
`;

const List = styled(motion.div)`
  border: 1px solid blue;
  padding: 1rem 2rem;
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
      y: { duration: 8, type: "keyframes", ease: "linear" },
      // delayChildren: 0.5,
      // staggerChildren: 0.5,
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
              <AllowedSender
                {...i}
                key={`sender-${idx}`}
                custom={idx}
                variants={itemVariants}
                animate="visible"
              />
            ))}
          </AnimatePresence>
        </List>
      </Container>
    </Root>
  );
};
