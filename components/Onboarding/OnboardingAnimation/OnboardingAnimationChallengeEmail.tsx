// TODO: Pardon the mess, this was re-written from a Lottie animation and needs cleanup and organization...

import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";

import { progressAtom } from "../Onboarding";

const Root = styled.div`
  position: relative;

  & svg {
    width: 600px;
    height: auto;
  }
`;

const EmailContent = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme.colors.gray[800]};
  font-size: 14px;
  line-height: 20px;
`;

const EmailHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 8px;
  margin-bottom: 1rem;
  line-height: 1;
  align-items: center;

  & img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const EmailBody = styled.div`
  & p {
    margin-bottom: 0.5rem;
  }

  & ul {
    padding-left: 1rem;
    margin: 1rem 0;

    & li {
      margin-bottom: 1rem;
    }
  }

  & strong {
    color: ${({ theme }) => theme.colors.blue[300]};
  }

  & span {
    color: ${({ theme }) => theme.colors.blue[800]};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

const Email = styled(motion.div)`
  margin-bottom: 2rem;
  background-color: #f7f7f7;
  user-select: none;
  pointer-events: none;
  border-radius: 16px;
`;

// TODO: Use `QueryNonprofitDefault` for nonprofit information... Check w/ Allen...
const MOCK_ME_QUERY = {
  id: "15ba930c-9c5f-4be4-9810-d2283c5b5d7f",
  connections: [
    {
      id: "6fd01696-a120-4cbe-85e9-8c204aed87b0",
      emailAddress: "john.smith@gmail.com",
      provider: "Google",
      status: "Running",
      isActivated: false,
    },
  ],
  firstName: "John",
  lastName: "Smith",
  fullName: "John Smith",
  avatar: "https://joeschmoe.io/api/v1/male/random",
  isSignupCompleted: false,
  challengeSettings: {
    signature: "John",
    minimumDonation: 200,
    nonprofit: {
      id: "5455a225-550c-4e64-b89a-fb9de4efda20",
      name: "Doctors without Borders",
    },
  },
};

const EmailPreview = () => {
  const [progress, setProgress] = useAtom(progressAtom);
  const user: any = MOCK_ME_QUERY;
  const { fullName, avatar, challengeSettings, connections } = user;
  const connection = connections[0] ?? null;
  const { emailAddress } = connection;
  const { signature, minimumDonation, nonprofit } = challengeSettings;
  return (
    <Email>
      <EmailContent>
        <EmailHeader>
          <img src={avatar} alt={fullName} />
          <p>{emailAddress}</p>
        </EmailHeader>
        <AnimatePresence>
          <EmailBody>
            {progress >= 25 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                onAnimationStart={() => setProgress(30)}
                onAnimationComplete={() => setProgress(35)}
              >
                <p>Hi!</p>
                <p>
                  I don't recognize your email address, so you'll need to take
                  one simple step in order for your message to reach me:
                </p>
              </motion.div>
            )}
            {progress >= 35 && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                onAnimationStart={() => setProgress(40)}
                onAnimationComplete={() => setProgress(45)}
              >
                <li>
                  <strong>
                    Click here to donate{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                    }).format(minimumDonation / 100)}
                  </strong>{" "}
                  to support my charity of choice, <span>{nonprofit.name}</span>
                  . When you donate, your message will be delivered to my inbox.
                </li>
                <li>
                  If you know me personally,{" "}
                  <strong>click here to deliver your message</strong>.
                </li>
              </motion.ul>
            )}
            {progress >= 45 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                onAnimationStart={() => setProgress(47)}
                onAnimationComplete={() => {
                  setProgress(49);
                  // Add a small delay before progressing further...
                  setTimeout(() => setProgress(50), 2000);
                }}
              >
                <p>I look forward to hearing from you.</p>
                <p>{signature}</p>
              </motion.div>
            )}
          </EmailBody>
        </AnimatePresence>
      </EmailContent>
    </Email>
  );
};

// TODO: Need to clean up design assets in Figma...
// const Background = () => (
//   <svg viewBox="0 0 400 201">
//     <g clipPath="url(#a)">
//       <path
//         d="M135.091.76c-39.52 0-75.484.357-109.78 1.084-6.287.135-12.697.53-20.193 1.231C1.709 3.383 1.14 8.15.795 10.983v.345C-1.675 30.456 2.228 120.49 4.093 163.76c.407 9.583.704 16.505.778 19.202.136 4.68 1.642 11.184 13.153 13.77 4.57 1.035 217.362 4.028 304.628 4.028 18.377 0 31.592-.123 39.274-.345l2.976-.074c9.46-.172 19.945-.493 24.478-2.131 9.794-3.522 10.745-10.346 10.609-15.162 0-1.638-.148-5.616-.284-11.294-2.569-105.567-4.434-152.334-6.175-156.423a14.618 14.618 0 0 0-6.027-7.514c-3.15-1.933-7.756-3.091-14.092-3.547-4.841-.357-9.88-.468-14.659-.579-1.803 0-3.607-.074-5.385-.135-7.694-.222-14.425-.42-20.6-.567-8.336-.222-20.402-.382-32.11-.542-8.275-.11-16.056-.21-22.008-.332-28.159-.505-56.663-.9-84.772-1.121C173.006.834 153.776.76 135.091.76Z"
//         fill="#F7F7F7"
//       />
//       <path
//         d="M135.091 3.223c19.587 0 39.174.078 58.762.234 28.232.222 56.464.608 84.697 1.158 14.24.283 39.829.505 54.069.874 6.866.173 13.729.362 20.587.567 6.608.197 13.376.234 19.946.702 5.1.37 9.806 1.232 12.968 3.19a12.32 12.32 0 0 1 5.063 6.405c2.717 6.158 5.928 154.268 6.299 166.769.123 4.446-.754 9.854-8.979 12.773-5.347 1.933-21.613 1.933-26.664 2.057-8.064.234-21.761.344-39.199.344-94.96 0-300.281-3.116-304.085-3.966-9.819-2.204-11.115-7.156-11.226-11.43C6.896 168.453.252 34.939 3.204 11.636c.185-1.405.605-5.974 2.149-6.159 6.669-.616 13.165-1.06 20.02-1.232 36.506-.73 73.079-1.071 109.718-1.022Zm0-2.463c-39.52 0-75.484.357-109.78 1.084-6.287.135-12.697.53-20.193 1.231C1.709 3.383 1.14 8.15.795 10.983v.345C-1.675 30.456 2.228 120.49 4.093 163.76c.407 9.583.704 16.505.778 19.202.136 4.68 1.642 11.184 13.153 13.77 4.57 1.035 217.362 4.028 304.628 4.028 18.377 0 31.592-.123 39.274-.345l2.976-.074c9.46-.172 19.945-.493 24.478-2.131 9.794-3.522 10.745-10.346 10.609-15.162 0-1.638-.148-5.616-.284-11.294-2.569-105.567-4.434-152.334-6.175-156.423a14.618 14.618 0 0 0-6.027-7.514c-3.15-1.933-7.756-3.091-14.092-3.547-4.841-.357-9.88-.468-14.659-.579-1.803 0-3.607-.074-5.385-.135-7.694-.222-14.425-.42-20.6-.567-8.336-.222-20.402-.382-32.11-.542-8.275-.11-16.056-.21-22.008-.332-28.159-.505-56.663-.9-84.772-1.121C173.006.834 153.776.76 135.091.76Z"
//         fill="#EBF1FE"
//       />
//       <path
//         d="M314.365 30h-.605v-7.375h1.01l3.395 6.905v-6.905h.605V30h-1.025l-3.38-6.89V30ZM322.803 30.09c-.52 0-.98-.118-1.38-.355-.4-.24-.713-.568-.94-.985a2.91 2.91 0 0 1-.34-1.41c0-.527.114-.995.34-1.405.227-.41.54-.732.94-.965.4-.233.86-.35 1.38-.35.52 0 .98.117 1.38.35.4.233.714.555.94.965.227.41.34.878.34 1.405 0 .523-.113.993-.34 1.41a2.54 2.54 0 0 1-.94.985c-.4.237-.86.355-1.38.355Zm0-.565c.397 0 .749-.093 1.055-.28.307-.187.547-.445.72-.775.174-.33.26-.707.26-1.13 0-.427-.086-.802-.26-1.125a1.889 1.889 0 0 0-.72-.755 2.014 2.014 0 0 0-1.055-.275c-.396 0-.748.092-1.055.275-.306.18-.546.432-.72.755-.173.323-.26.698-.26 1.125 0 .423.087.8.26 1.13.174.33.414.588.72.775.307.187.659.28 1.055.28ZM327.49 30l-1.21-5.31h.645l1 4.775 1.385-4.775h.695l1.4 4.775.985-4.775h.645L331.84 30h-.85l-1.33-4.58-1.315 4.58h-.855Z"
//         fill="#909195"
//       />
//       <path
//         d="m348.504 30.82-2.333-1.494a.422.422 0 0 0-.374 0l-2.59 1.144a.396.396 0 0 1-.56-.467l.56-2.8a.394.394 0 0 0 0-.35l-1.89-2.123a.427.427 0 0 1-.058-.42.421.421 0 0 1 .338-.257l2.824-.21a.371.371 0 0 0 .326-.186l1.424-2.45a.42.42 0 0 1 .723 0l1.073 2.636a.398.398 0 0 0 .28.233l2.777.607a.398.398 0 0 1 .163.7l-2.146 1.82a.44.44 0 0 0-.164.35l.28 2.823a.396.396 0 0 1-.653.443ZM366.095 26.29a19.345 19.345 0 0 0-2.334-.583 24.69 24.69 0 0 1 .397-2.637.401.401 0 0 0-.132-.366.4.4 0 0 0-.381-.077 37.772 37.772 0 0 0-5.834 3.104.43.43 0 0 0-.156.326.42.42 0 0 0 .156.327c.257.21 3.08 3.337 4.667 4.666a.536.536 0 0 0 .887-.443c-.019-.781.036-1.562.163-2.333.497.152 1.003.27 1.517.35 0 .35-.187.7-.234 1.073a.45.45 0 0 0 .35.537l1.377.326a.488.488 0 0 0 .537-.35c.933-2.73 1.493-3.266-.98-3.92ZM375.802 28.904c-.444-.327-1.564-.537-1.727.21a.882.882 0 0 0-.14 1.12 1.235 1.235 0 0 0 1.797.303 1.022 1.022 0 0 0 .44-.8 1.032 1.032 0 0 0-.37-.834ZM376.128 26.944c0-.537-.63-1.493-1.283-1.143a.84.84 0 0 0-.934.63 1.27 1.27 0 0 0 .16.98 1.265 1.265 0 0 0 .82.56 1.003 1.003 0 0 0 1.237-1.027ZM374.284 24.89c.467.28 1.61.327 1.68-.397a.887.887 0 0 0 0-1.143 1.292 1.292 0 0 0-.922-.39 1.28 1.28 0 0 0-.921.39 1.04 1.04 0 0 0-.214.376c-.044.139-.059.285-.044.43a1.061 1.061 0 0 0 .421.734Z"
//         fill="#E5E5E5"
//       />
//     </g>
//     <defs>
//       <clipPath id="a">
//         <path fill="#fff" d="M0 0h400v201H0z" />
//       </clipPath>
//     </defs>
//   </svg>
// );

export const OnboardingAnimationChallengeEmail = () => {
  return (
    <Root>
      {/* <Background /> */}
      <EmailPreview />
    </Root>
  );
};
