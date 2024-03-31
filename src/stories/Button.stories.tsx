import {Button} from '@/components/ui/button.tsx'
import type {Meta, StoryObj} from '@storybook/react'


const meta: Meta<typeof Button> = {
    component: Button,
    title: "Button",
    tags: ['autodocs'],
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: "click me!",
        title: "click me!",
        disabled: false,
        name: 'submit',
        type: 'submit',
    }
}

export default meta