import { atom, useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import Lottie from "react-lottie-player";

import { progressAtom } from "../Onboarding";
import generateSelectedNonprofit from "./generateSelectedNonprofit";

const animationDataAtom = atom<any>(null);

export const OnboardingAnimationSelectedNonprofit = () => {
  const setProgress = useSetAtom(progressAtom);
  const [animationData, setAnimationData] = useAtom(animationDataAtom);

  useEffect(() => {
    const data = generateSelectedNonprofit("Charity with Lonnnnnnnng Name");
    if (data) setAnimationData(data);

    if (animationData) setProgress(62.5);
  }, []);

  return (
    animationData && (
      <Lottie
        animationData={animationData}
        play
        speed={1}
        loop={false}
        onComplete={() => setProgress(75)}
        style={{ width: "100%", maxWidth: "400px", height: "auto" }}
      />
    )
  );
};
