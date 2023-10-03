import styled from "styled-components";
const DashedSeparatorComponent = styled.img`
  width: 24px;
  height: 1px;
`;
export const DashedSeparator = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <DashedSeparatorComponent src="/dashedSeparator.svg" style={override} />
  );
};
