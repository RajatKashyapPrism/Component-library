import type { Meta, StoryObj } from '@storybook/react-vite'
import { PhoneField } from './PhoneField'

const meta: Meta<typeof PhoneField> = {
  title: 'Components/PhoneField',
  component: PhoneField,
  args: {
    label: 'Phone number',
    placeholder: undefined,
    description: '',
    errorMessage: '',
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    isInvalid: false,
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    description: { control: 'text' },
    errorMessage: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof PhoneField>

export const Default: Story = {}

export const WithDescription: Story = {
  args: {
    description: 'Include your country code.',
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Please enter a valid phone number.',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
