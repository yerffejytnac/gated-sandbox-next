import { useAtomValue } from "jotai";

import { progressAtom } from "../Onboarding";
import {
  StepIconAllowList,
  StepIconGated,
  StepIconInboxes,
  StepIconNonprofit,
} from "./OnboardingProgressIcons";
import { OnboardingProgressBarGroup } from "./OnboardingProgressBarGroup";
import { OnboardingProgressBar } from "./OnboardingProgressBar";

export const OnboardingProgress = () => {
  const progress = useAtomValue(progressAtom);
  const isCompact = Boolean(progress === 0 || progress === 100);

  return (
    <OnboardingProgressBarGroup isCompact={isCompact} layout>
      <OnboardingProgressBar min={1} max={25} icon={<StepIconAllowList />} />
      <OnboardingProgressBar min={25} max={50} icon={<StepIconInboxes />} />
      <OnboardingProgressBar min={50} max={75} icon={<StepIconNonprofit />} />
      <OnboardingProgressBar min={75} max={100} icon={<StepIconGated />} />
    </OnboardingProgressBarGroup>
  );
};
