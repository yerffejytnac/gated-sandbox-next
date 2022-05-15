import { atom, useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import Lottie from "react-lottie-player";

import { progressAtom } from "../Onboarding";

const animationDataAtom = atom<any>(null);

export const OnboardingAnimationEnvelope = () => {
  const setProgress = useSetAtom(progressAtom);
  const [animationData, setAnimationData] = useAtom(animationDataAtom);

  useEffect(() => {
    import("./lottie-envelope-open.json").then(setAnimationData);

    if (animationData) setProgress(2);
  }, []);

  return (
    animationData && (
      <Lottie
        animationData={animationData}
        play
        speed={0.5}
        loop={false}
        onComplete={() => setProgress(8)}
        style={{ width: "100%", maxWidth: "240px", height: "auto" }}
      />
    )
  );
};
