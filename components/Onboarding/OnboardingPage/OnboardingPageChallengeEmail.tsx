import { motion } from "framer-motion";

import {
  Container,
  containerVariantsContent,
  containerVariantsHeading,
  Root,
  rootVariants,
} from "./OnboardingPage.styled";

import { OnboardingAnimationChallengeEmail } from "../OnboardingAnimation";

export const OnboardingPageChallengeEmail = () => {
  return (
    <Root variants={rootVariants} initial="out" animate="in" exit="out">
      <motion.h3 variants={containerVariantsHeading}>
        Building your automated reply to Gated messages&hellip;
      </motion.h3>

      <Container variants={containerVariantsContent}>
        <OnboardingAnimationChallengeEmail />
      </Container>
    </Root>
  );
};
