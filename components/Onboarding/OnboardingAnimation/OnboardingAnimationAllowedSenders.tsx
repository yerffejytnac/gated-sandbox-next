import styled from "@emotion/styled";
import {
  AnimatePresence,
  HTMLMotionProps,
  isValidMotionProp,
  motion,
  Variants,
} from "framer-motion";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
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
  hidden: { opacity: 0, y: 50, scale: 0.5 },
  show: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

interface AllowedSenderRootProps extends HTMLMotionProps<"div"> {
  isActive: boolean;
}

const AllowedSenderRoot = styled(motion.div, {
  shouldForwardProp: (prop: string) =>
    (!["isActive"].includes(prop) && isValidMotionProp(prop)) ||
    prop === "children",
})<AllowedSenderRootProps>`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 8px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-bottom: 1rem;

  & svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.blue[500]};
  }

  & div {
    border: 1px solid
      ${({ theme, isActive }) =>
        isActive ? theme.colors.blue[500] : theme.colors.gray[300]};
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

const CheckIcon = () => (
  <motion.svg
    fill="currentColor"
    viewBox="0 0 25 24"
    variants={iconVariants}
    transition={{ delay: 1 }}
  >
    <path d="M12.227 22.5a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Zm0 1.5a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
    <path d="M15.697 4.29c-.787 1.334-2.456 10.097-3.244 11.6-1.318-.818-3.064-3.04-4.495-3.577-.59-.218-.962.436-.569 1.139.658 1.185 1.265 1.864 2.064 2.938 1 1 1.5 1.5 2.311 2.369.123.215.308.378.525.46.744.485 1.334.267 1.75-.073a.552.552 0 0 0 .156-.165.616.616 0 0 0 .084-.222c.332-1.238.694-3.202.948-4.468.5-2.5 1.104-8.037 1.126-9.394.153-.897-.328-1.164-.656-.606Z" />
  </motion.svg>
);

const AllowedSender = ({
  firstName,
  lastName,
  email,
  ...rest
}: AllowedSender) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsActive(true), 1000);
  }, []);

  return (
    <AllowedSenderRoot isActive={isActive} {...rest}>
      <CheckIcon />
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
