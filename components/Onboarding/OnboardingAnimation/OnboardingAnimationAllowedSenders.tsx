import styled from "@emotion/styled";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  Variants,
} from "framer-motion";
import { useSetAtom } from "jotai";
import { progressAtom } from "../Onboarding";

const Root = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 260px;
  background-color: #f7f7f7;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
`;

const List = styled(motion.div)`
  border: 1px solid blue;
  padding: 2rem;
`;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.3 },
  show: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
};

const AllowedSenderRoot = styled(motion.div)`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 8px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-bottom: 1rem;

  & div {
    border: 1px solid ${({ theme }) => theme.colors.blue[500]};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.blue[800]};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface AllowedSender extends HTMLMotionProps<"div"> {
  firstName: string;
  lastName: string;
  email: string;
}

const MOCK: AllowedSender[] = [
  {
    firstName: "Beck",
    lastName: "Fields",
    email: "beck_fields@tetak.jetzt",
  },
  {
    firstName: "Vinson",
    lastName: "Chang",
    email: "vinson_chang@senmei.gp",
  },
  {
    firstName: "Lowe",
    lastName: "Dunlap",
    email: "lowe_dunlap@ewaves.london",
  },
  {
    firstName: "Britney",
    lastName: "Sampson",
    email: "britney_sampson@translink.courses",
  },
  {
    firstName: "Ella",
    lastName: "Love",
    email: "ella_love@flotonic.cleaning",
  },
  {
    firstName: "Daugherty",
    lastName: "Sweet",
    email: "daugherty_sweet@orbixtar.pa",
  },
  {
    firstName: "Vicki",
    lastName: "Holcomb",
    email: "vicki_holcomb@ovium.tickets",
  },
  {
    firstName: "Fuller",
    lastName: "Huffman",
    email: "fuller_huffman@grupoli.eus",
  },
  {
    firstName: "Roxie",
    lastName: "Martin",
    email: "roxie_martin@evidends.homes",
  },
  {
    firstName: "Vera",
    lastName: "Mcintosh",
    email: "vera_mcintosh@eternis.wiki",
  },
];

const AllowedSender = ({
  firstName,
  lastName,
  email,
  ...rest
}: AllowedSender) => {
  return (
    <AllowedSenderRoot {...rest}>
      <div>
        {firstName[0]}
        {lastName[0]}
      </div>
      <strong>
        {firstName} {lastName}
      </strong>
      <span>{email}</span>
    </AllowedSenderRoot>
  );
};

const listVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { when: "afterChildren" },
  },
  show: {
    opacity: 1,
    y: ["25%", "-100%"],
    transition: {
      y: { duration: 8 },
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const OnboardingAnimationAllowedSenders = () => {
  const setProgress = useSetAtom(progressAtom);

  return (
    <Root>
      <Container>
        <List
          variants={listVariants}
          initial="hidden"
          animate="show"
          onAnimationStart={() => setProgress(9)}
          onAnimationComplete={() => setProgress(16)}
        >
          <AnimatePresence>
            {MOCK.map((i, idx) => (
              <AllowedSender
                {...i}
                key={`sender-${idx}`}
                variants={itemVariants}
              />
            ))}
          </AnimatePresence>
        </List>
      </Container>
    </Root>
  );
};
