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

// import {create} from 'zustand'
// import {StackOverflowTagsResponse} from "@/types/stackExchangeTypes.ts";
//
// type FetchStackExchangeAPITagsStore = {
//     data: StackOverflowTagsResponse
//     error: string | null
//     setError: (e: string) => void
//     isLoading: boolean
//     setIsLoading: (state: boolean) => void
//     currentPage: number
//     setCurrentPage: (currentPage: number) => void
//     itemsPerPage: number
//     setItemsPerPage: (itemsPerPage: number) => void
//     sortBy: 'popular' | 'activity' | 'name'
//     setSortBy: (sortBy: 'popular' | 'activity' | 'name') => void
//     orderBy: 'desc' | 'asc'
//     setOrderBy: (orderBy: 'desc' | 'asc') => void
//     isNextPage: boolean
//     setIsNextPage: (isNextPage: boolean) => void
//     // fetchTagsData: () => Promise<StackOverflowTagsResponse | undefined>
// }
//
// export const useFetchStackExchangeAPITagsStore = create<FetchStackExchangeAPITagsStore>((set) => ({
//     data: {
//         items: [],
//         has_more: false,
//         quota_max: 0,
//         quota_remaining: 0
//     },
//     isLoading: false,
//     error: null,
//     currentPage: 1,
//     itemsPerPage: 10,
//     sortBy: 'popular',
//     orderBy: 'desc',
//     isNextPage: false,
//     // fetchTagsData: async () => {
//     //     try {
//     //         set(() => ({error: null}))
//     //         set(() => ({isLoading: true}))
//     //         const response = await fetch(`https://api.stackexchange.com/2.3/tags?page=${currentPage}&pagesize=${itemsPerPage}&order=${orderBy}&sort=${sortBy}&site=stackoverflow`)
//     //         const data = await response.json() as StackOverflowTagsResponse
//     //         set(() => ({isNextPage: data.has_more}))
//     //         set(() => ({data: data}))
//     //     } catch (e: any) {
//     //         set(() => ({error: e.message}))
//     //     } finally {
//     //         set(() => ({isLoading: false}))
//     //     }
//     // },
//     setIsLoading: (isLoading) => set(() => ({isLoading: isLoading})),
//     setError: (error) => set(() => ({error: error})),
//     setCurrentPage: (currentPage) => set(() => ({currentPage: currentPage})),
//     setIsNextPage: (isNextPage) => set(() => ({isNextPage: isNextPage})),
//     setItemsPerPage: (itemsPerPage) => (() => ({itemsPerPage: itemsPerPage})),
//     setOrderBy: (orderBy) => (() => ({orderBy: orderBy})),
//     setSortBy: (sortBy) => (() => ({sortBy: sortBy}))
// }))