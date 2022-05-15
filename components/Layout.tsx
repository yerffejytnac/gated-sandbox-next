import { ReactNode } from "react";
import styled from "@emotion/styled";

const Root = styled.div`
  border: 1px solid red;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => <Root>{children}</Root>;
