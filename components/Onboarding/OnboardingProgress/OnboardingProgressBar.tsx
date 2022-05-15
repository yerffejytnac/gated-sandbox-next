import { AnimatePresence } from "framer-motion";
import { BsCheck as CheckIcon } from "react-icons/bs";
import { Progress as ChakraProgress } from "@chakra-ui/react";
import { ReactNode, useMemo } from "react";
import { useAtomValue } from "jotai";

import { progressAtom } from "@components";
import {
  ProgressCompleted,
  progressCompletedVariants,
  ProgressStep,
  progressStepVariants,
  Root,
} from "./OnboardingProgressBar.styled";

export type OnboardingProgressStepStatus = "inactive" | "active" | "complete";

interface OnboardingProgressBarProps {
  min: number;
  max: number;
  icon: ReactNode;
}

export const OnboardingProgressBar = ({
  min = 0,
  max = 100,
  icon,
}: OnboardingProgressBarProps) => {
  const progress = useAtomValue(progressAtom);
  const value = useMemo(() => {
    if (progress < min) return min;
    if (progress > max) return max;
    return progress;
  }, [progress, min, max]);

  const status = useMemo(() => {
    let status: OnboardingProgressStepStatus = "inactive";

    if (progress >= min && progress < max) status = "active";
    if (progress >= max) status = "complete";

    return status;
  }, [progress]);

  const showCompleted = Boolean(status === "complete" && progress < max + 1);

  return (
    <Root status={status} layout>
      <AnimatePresence>
        <ProgressStep
          key={`progress-step-${max}`}
          status={status}
          variants={progressStepVariants}
          initial="initial"
          animate={status === "active" ? "active" : "initial"}
          children={icon}
        />
        {showCompleted && (
          <ProgressCompleted
            key={`progress-completed-${max}`}
            children={<CheckIcon />}
            status={status}
            variants={progressCompletedVariants}
            transition={{ type: "spring", bounce: 0.5, duration: 0.5 }}
            initial="out"
            exit="out"
            animate={status === "complete" ? "in" : "out"}
          />
        )}
        <ChakraProgress
          key={`progress-${max}`}
          value={value}
          min={min}
          max={max}
          size="sm"
          borderRadius={2}
        />
      </AnimatePresence>
    </Root>
  );
};
