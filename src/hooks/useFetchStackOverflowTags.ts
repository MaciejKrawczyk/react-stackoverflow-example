import {useCallback, useEffect, useState} from "react";
import {StackOverflowTagsResponse} from "@/types/stackExchangeTypes.ts";
import ky from "ky";

const useFetchStackOverflowTags = () => {
    // const [currentPage, setCurrentPage] = useState(1)
    // const [itemsPerPage, setItemsPerPage] = useState(10)
    // const [sortBy, setSortBy] = useState('popular')
    // const [orderBy, setOrderBy] = useState('desc')
    // const [isNextPage, setIsNextPage] = useState(true)
    //
    // const [data, setData] = useState<StackOverflowTagsResponse | undefined>(undefined)
    //
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string | null>(null);
    //
    // const getData = useCallback(async () => {
    //     try {
    //         setError(null)
    //         setIsLoading(true)
    //         const data = await ky.get(`https://api.stackexchange.com/2.3/tags?page=${currentPage}&pagesize=${itemsPerPage}&order=${orderBy}&sort=${sortBy}&site=stackoverflow`).json() as StackOverflowTagsResponse
    //         setData(data)
    //         setIsNextPage(data.has_more)
    //     } catch (e: any) {
    //         setError(e)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }, [currentPage, itemsPerPage, orderBy, sortBy])
    //
    // useEffect(() => {
    //     getData()
    // }, [getData])
    //
    // return {currentPage, itemsPerPage, orderBy, sortBy, data, error, isLoading}
}

export default useFetchStackOverflowTags