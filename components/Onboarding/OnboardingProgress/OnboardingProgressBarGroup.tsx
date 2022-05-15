import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { HTMLMotionProps, motion } from "framer-motion";

interface OnboardingProgressBarGroupProps extends HTMLMotionProps<"div"> {
  isCompact: boolean;
}

export const OnboardingProgressBarGroup = styled(motion.div, {
  shouldForwardProp: (prop: string) =>
    !["isCompact"].includes(prop) && isPropValid(prop),
})<OnboardingProgressBarGroupProps>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-columns: ${({ isCompact }) =>
    isCompact ? `repeat(4, 1fr)` : `repeat(5, 1fr)`};
  gap: 8px;
  padding: 1rem 0;
`;
