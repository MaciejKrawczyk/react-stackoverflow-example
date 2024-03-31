import {Input} from '@/components/ui/input.tsx'
import type {Meta, StoryObj} from '@storybook/react'


const meta: Meta<typeof Input> = {
    component: Input,
    title: "Input",
    tags: ['autodocs'],
}

type Story = StoryObj<typeof Input>

export const Number: Story = {
    args: {
        type: 'number',
        value: 10
    }
}

export default meta