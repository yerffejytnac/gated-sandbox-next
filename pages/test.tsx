import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import Lottie from "react-lottie-player";

const animationDataAtom = atom<any>(null);

const TestPage = () => {
  const [animationData, setAnimationData] = useAtom(animationDataAtom);

  useEffect(() => {
    import("../components/lottie-ae-export-test.json").then(setAnimationData);
  }, []);

  return (
    animationData && (
      <Lottie
        animationData={animationData}
        play
        // speed={0.75}
        // loop={false}
        style={{ width: "100%", height: "auto" }}
      />
    )
  );
};

export default TestPage;
