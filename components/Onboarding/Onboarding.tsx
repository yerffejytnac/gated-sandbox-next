import { Progress } from "@chakra-ui/react";
import { AnimatePresence, motion, Variants } from "framer-motion";

import { Layout } from "@components";
import { atom, useAtom, useAtomValue } from "jotai";

import styled from "@emotion/styled";

const Container = styled(motion.div)`
  border: 1px solid blue;
  margin: 2rem 0;
  padding: 3rem;

  & h1 {
    border: 1px solid green;
  }
`;

const progressAtom = atom(0);
const stepAtom = atom(0);

const rootVariants: Variants = {
  out: { opacity: 0 },
  in: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.125,
      ease: "easeInOut",
    },
  },
};

const childVariants: Variants = {
  out: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
};

const Uno = () => (
  <Container variants={rootVariants} initial="out" animate="in" exit="out">
    <motion.h1 variants={childVariants}>
      We're starting to set up your account...
    </motion.h1>
  </Container>
);

const Dos = () => (
  <Container variants={rootVariants} initial="out" animate="in" exit="out">
    <motion.h1 variants={childVariants}>
      Building your challenge email...
    </motion.h1>
  </Container>
);

const Tres = () => (
  <Container variants={rootVariants} initial="out" animate="in" exit="out">
    <motion.h1 variants={childVariants}>Setting up your nonprofit...</motion.h1>
  </Container>
);

const Cuatro = () => (
  <Container variants={rootVariants} initial="out" animate="in" exit="out">
    <motion.h1 variants={childVariants}>
      Waiting for you to activate...
    </motion.h1>
  </Container>
);

const renderContent = () => {
  const progress = useAtomValue(progressAtom);
  // if (!progress) return null;

  if (progress <= 24) return <Uno key="uno" />;
  if (progress >= 25 && progress <= 49) return <Dos key="dos" />;
  if (progress >= 50 && progress <= 74) return <Tres key="tres" />;
  if (progress >= 75 && progress <= 100) return <Cuatro key="cuatro" />;
};

export const Onboarding = () => {
  const [progress, setProgress] = useAtom(progressAtom);
  const step = useAtomValue(stepAtom);
  const content = renderContent();

  return (
    <Layout>
      <Progress value={progress} borderRadius={8} />
      <h4>Progress: {progress}%</h4>
      <input
        type="number"
        value={progress}
        min={0}
        max={100}
        onChange={(e) => setProgress(parseInt(e.target.value, 10))}
      />

      <AnimatePresence exitBeforeEnter>{content}</AnimatePresence>

      <pre children={JSON.stringify({ step, progress }, null, 2)} />
    </Layout>
  );
};
