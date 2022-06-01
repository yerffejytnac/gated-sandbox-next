import { motion } from "framer-motion";
import { useAtomValue } from "jotai";

import {
  Container,
  containerVariantsContent,
  containerVariantsHeading,
  Root,
  rootVariants,
} from "./OnboardingPage.styled";
import { progressAtom } from "../Onboarding";
import {
  OnboardingAnimationAllowedSenders,
  OnboardingAnimationEnvelope,
  OnboardingAnimationGatedSidebar,
} from "../OnboardingAnimation";

export const OnboardingPageSetup = () => {
  const progress = useAtomValue(progressAtom);
  const showA = Boolean(progress <= 7);
  const showB = Boolean(progress >= 8 && progress <= 15);
  const showC = Boolean(progress >= 16 && progress <= 25);

  return (
    <>
      {showA && (
        <Root variants={rootVariants} initial="out" animate="in" exit="out">
          <motion.h3 variants={containerVariantsHeading} exit="exit">
            We've connected to your email account&hellip;
          </motion.h3>

          <Container variants={containerVariantsHeading} exit="exit">
            <OnboardingAnimationEnvelope />
          </Container>
        </Root>
      )}
      {showB && (
        <Root variants={rootVariants} initial="out" animate="in" exit="out">
          <motion.h3 variants={containerVariantsHeading} exit="exit">
            Taking a look to see whose messages should never be Gated&hellip;
          </motion.h3>

          <Container variants={containerVariantsHeading} exit="exit">
            <OnboardingAnimationAllowedSenders />
          </Container>
        </Root>
      )}
      {showC && (
        <Root variants={rootVariants} initial="out" animate="in" exit="out">
          <motion.h3 variants={containerVariantsHeading} exit="exit">
            Creating a folder where Gated messages go&hellip;
          </motion.h3>

          <Container
            variants={containerVariantsContent}
            transition={{ type: "spring", bounce: 0.25, duration: 0.75 }}
          >
            <OnboardingAnimationGatedSidebar />
          </Container>
        </Root>
      )}
    </>
  );
};
