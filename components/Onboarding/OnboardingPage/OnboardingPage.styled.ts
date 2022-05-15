import { motion, Variants } from "framer-motion";
import styled from "@emotion/styled";

export const rootVariants: Variants = {
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

export const Root = styled(motion.div)`
  margin: 0;

  & h3 {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }

  & h1 {
    font-weight: 300;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    max-width: 320px;
  }
`;

export const containerVariantsHeading: Variants = {
  out: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
};

export const containerVariantsContent: Variants = {
  out: { opacity: 0, scale: 0.5 },
  in: { opacity: 1, scale: 1 },
};

export const Container = styled(motion.div)`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// TODO: Remove me, using a placeholder animation to test flow...
export const Placeholder = styled(motion.div)<{
  color: string;
}>`
  width: 120px;
  height: 120px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
`;
