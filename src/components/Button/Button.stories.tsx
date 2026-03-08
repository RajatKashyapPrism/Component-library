import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

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
    variant: { table: { disable: true }, options: ['primary', 'secondary', 'tertiary', 'hyperlink', 'underlined'] },
    // is/has-prefixed → boolean controls
    isOnBackground: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    // label (children) → editable text placeholder
    children: { control: 'text' },
    leftIcon: {
      control: 'boolean',
      mapping: { true: <PlusIcon />, false: undefined },
    },
    rightIcon: {
      control: 'boolean',
      mapping: { true: <PlusIcon />, false: undefined },
    },
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

export const Tertiary: Story = {
  args: { variant: 'tertiary' },
};

export const Hyperlink: Story = {
  args: { variant: 'hyperlink' },
};

export const Underlined: Story = {
  args: { variant: 'underlined' },
};
