import { motion } from "framer-motion";
import { useSetAtom } from "jotai";

import {
  Container,
  containerVariantsContent,
  containerVariantsHeading,
  Placeholder,
  Root,
  rootVariants,
} from "./OnboardingPage.styled";
import { progressAtom } from "../Onboarding";

export const OnboardingPageChallengeEmail = () => {
  const setProgress = useSetAtom(progressAtom);

  return (
    <Root variants={rootVariants} initial="out" animate="in" exit="out">
      <motion.h3 variants={containerVariantsHeading}>
        Building your challenge email&hellip;
      </motion.h3>

      <Container variants={containerVariantsContent}>
        <Placeholder
          color="orange"
          children="2s"
          animate={{ scale: [1, 0.25, 1], rotateZ: [0, 360, 0] }}
          transition={{ duration: 2 }}
          onAnimationStart={() => setProgress(37.5)}
          onAnimationComplete={() => setProgress(50)}
        />
      </Container>
    </Root>
  );
};
