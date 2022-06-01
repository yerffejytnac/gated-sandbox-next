import { atom, useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import Lottie from "react-lottie-player";

import { progressAtom } from "../Onboarding";

const animationDataAtom = atom<any>(null);

export const OnboardingAnimationGatedSidebar = () => {
  const setProgress = useSetAtom(progressAtom);
  const [animationData, setAnimationData] = useAtom(animationDataAtom);

  useEffect(() => {
    import("./lottie-gated-sidebar.json").then(setAnimationData);

    if (animationData) setProgress(17);
  }, []);

  return (
    animationData && (
      <Lottie
        animationData={animationData}
        play
        speed={0.75}
        loop={false}
        onComplete={() => setProgress(25)}
        style={{ width: "100%", maxWidth: "600px", height: "auto" }}
      />
    )
  );
};
