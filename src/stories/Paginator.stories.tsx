import Paginator from "@/components/Paginator.tsx";
import type {Meta, StoryObj} from '@storybook/react'


const meta: Meta<typeof Paginator> = {
    component: Paginator,
    title: "Paginator",
    tags: ['autodocs'],
}

type Story = StoryObj<typeof Paginator>

export const Default: Story = {
    args: {
        initialPage: 1,
        isNextPage: true,
        onPageChange: () => {}
    }
}

export default meta