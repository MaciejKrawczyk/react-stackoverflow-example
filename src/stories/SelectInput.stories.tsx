import SelectInput from "@/components/SelectInput.tsx";
import type {Meta, StoryObj} from '@storybook/react'


const meta: Meta<typeof SelectInput> = {
    component: SelectInput,
    title: "SelectInput",
    tags: ['autodocs'],
}

type Story = StoryObj<typeof SelectInput>

export const Default: Story = {
    args: {
        label: "label!",
        itemsList: ['apple', 'banana', 'orange'],
        defaultChosenValue: 'apple',
        onValueChange: () => {}
    }
}

export default meta