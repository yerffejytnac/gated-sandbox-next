import { motion } from "framer-motion";
import { OnboardingAnimationSelectedNonprofit } from "../OnboardingAnimation";

import {
  Container,
  containerVariantsContent,
  containerVariantsHeading,
  Root,
  rootVariants,
} from "./OnboardingPage.styled";

export const OnboardingPageNonprofit = () => {
  return (
    <Root variants={rootVariants} initial="out" animate="in" exit="out">
      <motion.h3 variants={containerVariantsHeading}>
        Setting up your nonprofit&hellip;
      </motion.h3>

      <Container variants={containerVariantsContent}>
        <OnboardingAnimationSelectedNonprofit />
      </Container>
    </Root>
  );
};
