import { motion } from "framer-motion";

import {
  Container,
  containerVariantsContent,
  containerVariantsHeading,
  Root,
  rootVariants,
} from "./OnboardingPage.styled";

export const OnboardingPageComplete = () => {
  return (
    <Root variants={rootVariants} initial="out" animate="in" exit="out">
      <motion.h3 variants={containerVariantsHeading}>
        Heading to your dashboard&hellip;
      </motion.h3>
      <Container variants={containerVariantsContent}>
        <h1>Gated helps you focus on what matters most.</h1>
      </Container>
    </Root>
  );
};
