import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    // label → text control (editable placeholder)
    children: 'Button',
    size: 'md',
    variant: 'primary',
    leftIcon: false,
    rightIcon: false,
    isOnBackground: false,
    isDisabled: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    // variant → shown as individual stories, not a control
    variant: { table: { disable: true }, options: ['primary', 'secondary'] },
    // is/has-prefixed → boolean controls
    isOnBackground: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    // label (children) → editable text placeholder
    children: { control: 'text' },
    leftIcon: { control: 'boolean' },
    rightIcon: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ---- Variant stories (one per variant value) ----
export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};
