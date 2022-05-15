import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";

import {
  Container,
  containerVariantsContent,
  containerVariantsHeading,
  Placeholder,
  Root,
  rootVariants,
} from "./OnboardingPage.styled";
import { progressAtom } from "../Onboarding";

export const OnboardingPageActivate = () => {
  const [progress, setProgress] = useAtom(progressAtom);
  const showButton = progress === 93.75;

  return (
    <Root variants={rootVariants} initial="out" animate="in" exit="out">
      <motion.h3 variants={containerVariantsHeading}>
        Waiting for you to activate&hellip;
      </motion.h3>

      <Container variants={containerVariantsContent}>
        <Placeholder
          color="purple"
          children="2s"
          animate={{ scale: [1, 0.25, 1], rotateZ: [0, 360, 0] }}
          transition={{ duration: 2 }}
          onAnimationStart={() => setProgress(87.5)}
          onAnimationComplete={() => setProgress(93.75)}
        />
        {showButton && (
          <Button
            colorScheme="blue"
            size="md"
            outlineColor="blue.500"
            mt={6}
            onClick={() => setProgress(100)}
          >
            Activate Gated
          </Button>
        )}
      </Container>
    </Root>
  );
};
