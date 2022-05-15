import { AnimatePresence } from "framer-motion";
import { atom, useAtom } from "jotai";
import { useEffect, useMemo } from "react";

import { Layout, OnboardingProgress } from "@components";

import {
  OnboardingPageActivate,
  OnboardingPageChallengeEmail,
  OnboardingPageComplete,
  OnboardingPageNonprofit,
  OnboardingPageSetup,
} from "./OnboardingPage";

// Root state to be shared between child pages/views...
export const progressAtom = atom(0);

export type OnboardingPage =
  | "setup"
  | "challenge-email"
  | "nonprofit"
  | "activate"
  | "complete";

export const Onboarding = () => {
  const [progress, setProgress] = useAtom(progressAtom);

  const page = useMemo(() => {
    let page: OnboardingPage | null = null;

    if (progress >= 1 && progress <= 24) page = "setup";
    if (progress >= 25 && progress <= 49) page = "challenge-email";
    if (progress >= 50 && progress <= 74) page = "nonprofit";
    if (progress >= 75 && progress < 100) page = "activate";
    if (progress === 100) page = "complete";

    return page;
  }, [progress]);

  useEffect(() => {
    // Delay rendering by 1 second to allow for animating the progress bar in...
    setTimeout(() => setProgress(1), 1000);
  }, []);

  return (
    <Layout>
      <OnboardingProgress />

      <AnimatePresence exitBeforeEnter>
        {page === "setup" && <OnboardingPageSetup />}
        {page === "challenge-email" && <OnboardingPageChallengeEmail />}
        {page === "nonprofit" && <OnboardingPageNonprofit />}
        {page === "activate" && <OnboardingPageActivate />}
        {page === "complete" && <OnboardingPageComplete />}
      </AnimatePresence>
    </Layout>
  );
};
