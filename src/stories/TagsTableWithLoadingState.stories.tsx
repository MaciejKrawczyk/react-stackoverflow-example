import TagsTableWithLoadingState from "@/components/TagsTableWithLoadingState.tsx";
import type {Meta, StoryObj} from '@storybook/react'

const data = {
    items: [
        {
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 2528450,
            "name": "javascript"
        },
        {
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 2191744,
            "name": "python"
        },
        {
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 1917047,
            "name": "java"
        },
        {
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 1614832,
            "name": "c#"
        },
        {
            "collectives": [
                {
                    "tags": [
                        "php"
                    ],
                    "external_links": [
                        {
                            "type": "support",
                            "link": "https://stackoverflow.com/contact?topic=15"
                        }
                    ],
                    "description": "A collective where developers working with PHP can learn and connect about the open source scripting language.",
                    "link": "/collectives/php",
                    "name": "PHP",
                    "slug": "php"
                }
            ],
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 1464311,
            "name": "php"
        },
        {
            "collectives": [
                {
                    "tags": [
                        "android",
                        "ios"
                    ],
                    "external_links": [
                        {
                            "type": "support",
                            "link": "https://stackoverflow.com/contact?topic=15"
                        }
                    ],
                    "description": "A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
                    "link": "/collectives/mobile-dev",
                    "name": "Mobile Development",
                    "slug": "mobile-dev"
                }
            ],
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 1416995,
            "name": "android"
        },
        {
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 1187169,
            "name": "html"
        },
        {
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 1034769,
            "name": "jquery"
        },
        {
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 806640,
            "name": "c++"
        },
        {
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 804107,
            "name": "css"
        },
        {
            "collectives": [
                {
                    "tags": [
                        "android",
                        "ios"
                    ],
                    "external_links": [
                        {
                            "type": "support",
                            "link": "https://stackoverflow.com/contact?topic=15"
                        }
                    ],
                    "description": "A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
                    "link": "/collectives/mobile-dev",
                    "name": "Mobile Development",
                    "slug": "mobile-dev"
                }
            ],
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 687165,
            "name": "ios"
        },
        {
            "has_synonyms": true,
            "is_moderator_only": false,
            "is_required": false,
            "count": 670694,
            "name": "sql"
        }
    ],
    "has_more": true,
    "quota_max": 10000,
    "quota_remaining": 9746
}

const meta: Meta<typeof TagsTableWithLoadingState> = {
    component: TagsTableWithLoadingState,
    title: "TagsTableWithLoadingState",
    tags: ['autodocs'],
}

type Story = StoryObj<typeof TagsTableWithLoadingState>

export const Default: Story = {
    args: {
        data: data,
        isLoading: false,
        defaultItemsPerPage: data.items.length
    }
}

export default meta