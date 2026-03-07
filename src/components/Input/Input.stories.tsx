import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextField } from './TextField'
import { PhoneField } from './PhoneField'

type InputArgs = {
  label: string
  description?: string
  errorMessage?: string
  isDisabled?: boolean
  isRequired?: boolean
  isReadOnly?: boolean
  isInvalid?: boolean
  placeholder?: string
}

const meta: Meta<InputArgs> = {
  title: 'Components/Input',
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
    placeholder: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<InputArgs>

export const TextFieldStory: Story = {
  name: 'TextField',
  render: (args) => <TextField {...args} />,
}

export const PhoneFieldStory: Story = {
  name: 'PhoneField',
  args: {
    label: 'Phone number',
  },
  argTypes: {
    placeholder: { control: 'text', table: { disable: false } },
  },
  render: (args) => <PhoneField {...args} />,
}
