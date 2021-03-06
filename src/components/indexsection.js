import React from "react";
import { css } from "@emotion/core";
import FluidContainer from "./fluidcontainer";

class IndexSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { forwardedRef, children, ...props } = this.props;

    const ReferencedSection = React.forwardRef((props, ref) => {
      return (
        <section
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
            justify-content: center;
            align-items: center;
            margin: auto;
        `}
          ref={ref} {...props}>
          <FluidContainer>
            {props.children}
          </FluidContainer>
        </section>
    )});

    return (
      <ReferencedSection ref={forwardedRef} {...props}>
        {children}
      </ReferencedSection>
    );
  }
}

export default IndexSection;