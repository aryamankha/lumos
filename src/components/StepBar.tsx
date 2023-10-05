import { DashedSeparator } from "./DashedSeparator";
import { Step } from "./Step";
import { StepBar } from "./StepBar.style";

type Step = {
  name: string;
  number: string;
};

interface StepBarProps {
  steps: Step[];
  currentIndex: number;
}

export const StepBarComponent = (props: StepBarProps) => {
  const { steps, currentIndex } = props;
  const Steps = steps.map((step, index) => {
    const status =
      index < currentIndex
        ? "Done"
        : index === currentIndex
        ? "Active"
        : "To Do";
    return (
      <>
        <Step
          status={status}
          number={step.number}
          text={step.name}
          key={index}
        />
        {index < steps.length - 1 && <DashedSeparator />}
      </>
    );
  });
  return <StepBar.Root>{Steps}</StepBar.Root>;
};

export { StepBarComponent as StepBar };
