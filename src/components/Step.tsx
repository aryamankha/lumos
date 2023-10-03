import React, { useState } from "react";
import styled from "styled-components";
import { Step, type StepProps } from "./Step.style";
import { CheckIcon } from "./CheckIcon";

const StepComponent = (props: StepProps) => {
  const isDone = props.status === "Done";
  const IconComponent = isDone ? (
    <CheckIcon />
  ) : (
    <Step.StepIcon>
      <Step.StepIconText>{props.number}</Step.StepIconText>
    </Step.StepIcon>
  );

  return (
    <Step.Root status={props.status}>
      {IconComponent}
      <Step.StepText>{props.text}</Step.StepText>
    </Step.Root>
  );
};

export { StepComponent as Step };
