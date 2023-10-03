import { DashedSeparator } from "./DashedSeparator";
import { Step } from "./Step";
import { StepBar } from "./StepBar.style";

export const StepBarComponent = () => {
  return (
    <StepBar.Root>
      <Step status="Done" number="1" text="Assign" />
      <DashedSeparator />
      <Step status="Active" number="2" text="Review" />
      <DashedSeparator />
      <Step status="To Do" number="3" text="Remove & Upload Evidence" />
      <DashedSeparator />
      <Step status="To Do" number="4" text="Done" />
    </StepBar.Root>
  );
};

export { StepBarComponent as StepBar };
