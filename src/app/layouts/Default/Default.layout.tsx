import * as DL from "./Default.layout.styles";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>Header</DL.Header>
      {props.children}
    </DL.Wrapper>
  );
}

export { DefaultLayout };
