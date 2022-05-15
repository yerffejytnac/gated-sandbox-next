import { ReactNode } from "react";
import styled from "@emotion/styled";

const Root = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => <Root>{children}</Root>;
