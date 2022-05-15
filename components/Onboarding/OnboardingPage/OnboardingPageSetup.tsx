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
  OnboardingAnimationInboxTraining,
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
          <motion.h3 variants={containerVariantsHeading}>
            Setting up your account&hellip;
          </motion.h3>

          <Container variants={containerVariantsHeading}>
            <OnboardingAnimationEnvelope />
          </Container>
        </Root>
      )}
      {showB && (
        <Root variants={rootVariants} initial="out" animate="in" exit="out">
          <motion.h3 variants={containerVariantsHeading}>
            Creating your list of allowed senders&hellip;
          </motion.h3>

          <Container variants={containerVariantsHeading}>
            <OnboardingAnimationAllowedSenders />
          </Container>
        </Root>
      )}
      {showC && (
        <Root variants={rootVariants} initial="out" animate="in" exit="out">
          <motion.h3 variants={containerVariantsHeading}>
            Showing how you can use Gated easily in your inbox&hellip;
          </motion.h3>

          <Container
            variants={containerVariantsContent}
            transition={{ type: "spring", bounce: 0.25, duration: 0.75 }}
          >
            <OnboardingAnimationInboxTraining />
          </Container>
        </Root>
      )}
    </>
  );
};
