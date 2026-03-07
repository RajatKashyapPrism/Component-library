import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextField } from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: 'Label',
    description: '',
    errorMessage: '',
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    isInvalid: false,
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    errorMessage: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {}

export const WithDescription: Story = {
  args: {
    description: 'This is a helper message.',
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'This field is required.',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
