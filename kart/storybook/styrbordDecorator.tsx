import { PartialStoryFn } from "storybook/internal/types";

const StyrbordDecorator = (Story: PartialStoryFn) => (
  <div>
    <Story />
  </div>
);

export default StyrbordDecorator;
