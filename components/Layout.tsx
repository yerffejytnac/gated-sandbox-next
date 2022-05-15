import { ReactNode } from "react";
import styled from "@emotion/styled";

const Root = styled.div`
  border: 1px solid red;
`;

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => <Root>{children}</Root>;
