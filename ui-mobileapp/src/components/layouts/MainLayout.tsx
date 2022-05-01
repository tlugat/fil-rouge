import React, { PropsWithChildren } from "react";
import styled from "styled-components/native";
import Spacer from "../atoms/Spacer";
import GoBackButton from "../molecules/GoBackButton";

export type MainLayoutProps = PropsWithChildren<{
  withBackButton?: boolean;
}>;

export default function MainLayout({
  children,
  withBackButton,
}: MainLayoutProps) {
  return (
    <Container>
      {withBackButton && (
        <>
          <GoBackButton />
          <Spacer axis="vertical" size={1.5} />
        </>
      )}

      {children}
    </Container>
  );
}

const Container = styled.View`
  padding: 52px 24px 24px 24px;
  background-color: #fcfcfc;
  min-height: 100%;
`;
