import styled from "@emotion/styled";

import { AllowedSender } from "components/Onboarding/OnboardingAnimation/AllowedSender";
import { AnimatePresence } from "framer-motion";

const Root = styled.div`
  border: 1px solid red;
  padding: 1rem;
`;

const sender: AllowedSender = {
  displayName: "Beck Fields",
  emailAddress: "beck_fields@tetak.jetzt",
};

const SandboxPage = () => {
  return (
    <Root>
      <AnimatePresence>
        <AllowedSender {...sender} />
      </AnimatePresence>
    </Root>
  );
};

export default SandboxPage;
