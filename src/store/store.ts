import {create} from 'zustand'
import {StackOverflowTagsResponse} from "@/types/stackExchangeTypes.ts";

type StackOverflowTagsStore = {
    data: StackOverflowTagsResponse
    setData: (state: StackOverflowTagsResponse) => void
}

export const useStackOverflowTagsStore = create<StackOverflowTagsStore>((set) => ({
    data: {
        items: [],
        has_more: false,
        quota_max: 0,
        quota_remaining: 0
    },
    setData: (data) => set(() => ({data: data}))
}))

