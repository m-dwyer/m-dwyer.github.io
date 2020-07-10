import React from "react";
import { css } from "@emotion/core";
import { render } from "react-dom";

class IndexSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { forwardedRef, children, ...props } = this.props;

    const ReferencedSection = React.forwardRef((props, ref) => {
      return (
        <section css={css`
          display: flex;
          flex-direction: column;
          width: 80vw;
          height: 100vh;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        `} ref={ref}>
          {props.children}
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