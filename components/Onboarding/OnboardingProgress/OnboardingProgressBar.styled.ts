import { ReactNode } from "react";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  HTMLMotionProps,
  isValidMotionProp,
  motion,
  Variants,
} from "framer-motion";

import { theme } from "@styles";
import { OnboardingProgressStepStatus } from "./OnboardingProgressBar";

interface RootProps extends HTMLMotionProps<"div"> {
  status: OnboardingProgressStepStatus;
}

export const Root = styled(motion.div, {
  shouldForwardProp: (prop: string) =>
    !["status"].includes(prop) && isPropValid(prop),
})<RootProps>`
  position: relative;
  grid-column: span 1;
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  gap: 4px;

  & [role="progressbar"] {
    background-color: ${theme.colors.blue[500]};
  }

  ${({ status }) =>
    status === "active" &&
    css`
      grid-column: span 2;

      & [role="progressbar"] {
        background: linear-gradient(
            265deg,
            rgba(255, 255, 255, 0.2) 22.85%,
            rgba(25, 106, 255, 0.2) 51.47%
          ),
          ${theme.colors.blue[500]};
      }
    `}

  ${({ status }) =>
    status === "complete" &&
    css`
      & [role="progressbar"] {
        background-color: ${theme.colors.blue[300]};
      }
    `}
`;

export const progressStepVariants: Variants = {
  active: { width: "44px", height: "44px" },
  initial: { width: "36px", height: "36px" },
};

interface ProgressStepProps {
  status: OnboardingProgressStepStatus;
}

export const ProgressStep = styled(motion.div, {
  shouldForwardProp: (prop: string) =>
    (!["status"].includes(prop) && isValidMotionProp(prop)) ||
    prop === "children",
})<ProgressStepProps>`
  border: 1px solid transparent;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};

  & svg {
    width: 16px;
    height: 16px;
  }

  ${({ theme, status }) =>
    status === "inactive" &&
    css`
      border: 1px solid ${theme.colors.blue[300]};
      color: ${theme.colors.blue[300]};
    `}

  ${({ theme, status }) =>
    status === "active" &&
    css`
      color: ${theme.colors.white};
      background: linear-gradient(
          265deg,
          rgba(255, 255, 255, 0.2) 22.85%,
          rgba(25, 106, 255, 0.2) 51.47%
        ),
        #196aff;

      & svg {
        width: 24px;
        height: 24px;

        & .accent {
          fill: ${theme.colors.green[300]};
          color: ${theme.colors.green[300]};
        }
      }
    `}

  ${({ status }) =>
    status === "complete" &&
    css`
      background: linear-gradient(
          265deg,
          rgba(255, 255, 255, 0.2) 22.85%,
          rgba(25, 106, 255, 0.2) 51.47%
        ),
        #196aff;

      & svg .accent {
        color: ${theme.colors.green[300]};
        fill: ${theme.colors.green[300]};
      }
    `}
`;

export const progressCompletedVariants: Variants = {
  out: {
    scale: 0,
    opacity: 0,
    transition: {
      delay: 0.375,
    },
  },
  in: { opacity: 1, scale: 1 },
};

interface ProgressCompletedProps extends HTMLMotionProps<"div"> {
  status: OnboardingProgressStepStatus;
  children: ReactNode;
}

export const ProgressCompleted = styled(motion.div, {
  shouldForwardProp: (prop: string) =>
    (!["status"].includes(prop) && isValidMotionProp(prop)) ||
    prop === "children",
})<ProgressCompletedProps>`
  position: absolute;
  width: 16px;
  height: 16px;
  right: -4px;
  z-index: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      265deg,
      rgba(255, 255, 255, 0.2) 22.85%,
      rgba(25, 106, 255, 0.2) 51.47%
    ),
    ${({ theme }) => theme.colors.blue[500]};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  color: ${({ theme }) => theme.colors.green[300]};
`;
