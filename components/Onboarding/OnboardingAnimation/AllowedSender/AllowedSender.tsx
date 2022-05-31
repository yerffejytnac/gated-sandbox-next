import styled from "@emotion/styled";
import { theme } from "@styles";
import { HTMLMotionProps, motion, MotionProps, Variants } from "framer-motion";

const rootVariants: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

const Root = styled(motion.div)`
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
  }

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

const iconVariants: Variants = {
  visible: (i) => ({
    color: theme.colors.blue[500],
    scale: 1,
    transition: {
      delay: i * 0.5,
      scale: {
        type: "spring",
      },
    },
  }),
  hidden: {
    color: theme.colors.gray[300],
    scale: 0,
  },
};

const CheckIcon = ({ custom }: MotionProps) => (
  <motion.svg
    fill="currentColor"
    viewBox="0 0 25 24"
    variants={iconVariants}
    custom={custom}
    initial="hidden"
    animate="visible"
  >
    <path d="M12.227 22.5a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Zm0 1.5a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
    <path d="M15.697 4.29c-.787 1.334-2.456 10.097-3.244 11.6-1.318-.818-3.064-3.04-4.495-3.577-.59-.218-.962.436-.569 1.139.658 1.185 1.265 1.864 2.064 2.938 1 1 1.5 1.5 2.311 2.369.123.215.308.378.525.46.744.485 1.334.267 1.75-.073a.552.552 0 0 0 .156-.165.616.616 0 0 0 .084-.222c.332-1.238.694-3.202.948-4.468.5-2.5 1.104-8.037 1.126-9.394.153-.897-.328-1.164-.656-.606Z" />
  </motion.svg>
);

export interface AllowedSender {
  displayName: string;
  emailAddress: string;
}

export interface AllowedSenderProps
  extends AllowedSender,
    HTMLMotionProps<"div"> {}

export const AllowedSender = ({
  custom,
  displayName,
  emailAddress,
  ...rest
}: AllowedSenderProps) => {
  const initials = displayName
    .split(" ")
    .map((part: string) => part[0])
    .join("");
  return (
    <Root {...rest} variants={rootVariants}>
      <CheckIcon custom={custom} />
      <div>{initials}</div>
      <strong>{displayName}</strong>
      <span>{emailAddress}</span>
    </Root>
  );
};
