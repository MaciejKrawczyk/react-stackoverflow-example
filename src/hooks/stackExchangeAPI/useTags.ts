import { useEffect, useState, useCallback } from "react";
import { StackOverflowTagsResponse } from "@/types/stackExchangeTypes";

interface UseFetchTagsProps {
    queryParams?: {
        dateFrom?: string;  // fromdate
        dateTo?: string;  // todate
        minNumOfLinkedPosts?: string;  // min
        maxNumOfLinkedPosts?: string;  // max
        tagIncludesString?: string;  //inname
    };
    config: {
        order?: 'asc' | 'desc';  // order
        sortByType?: string;  // sort
        websiteName: string;  // site
    };
    pagination?: {
        currentPage?: number;  // page
        numOfElementsPerPage?: number;  // pagesize
    };
}

interface UseFetchTagsResponse {
    data: StackOverflowTagsResponse | undefined;
    error: string | null;
    isLoading: boolean;
    refetch: () => void;
}

export default function useFetchTags({
    queryParams = {},
    config = { websiteName: 'stackoverflow', order: 'desc', sortByType: 'popular' },
    pagination = { currentPage: 1, numOfElementsPerPage: 10 },
}: UseFetchTagsProps): UseFetchTagsResponse {

    const [data, setData] = useState<StackOverflowTagsResponse | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetchTags = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        const { currentPage, numOfElementsPerPage } = pagination;
        
        const paramsObj = {
            fromdate: queryParams.dateFrom,
            todate: queryParams.dateTo,
            min: queryParams.minNumOfLinkedPosts,
            max: queryParams.maxNumOfLinkedPosts,
            inname: queryParams.tagIncludesString,
            order: config.order,
            sort: config.sortByType,
            site: config.websiteName,
            page: currentPage?.toString(),
            pagesize: numOfElementsPerPage?.toString(),
        }

        //@ts-expect-error paramsObj can be an object in URLSearchParams
        const fullQueryParams = new URLSearchParams(paramsObj).toString()

        try {
            const response = await fetch(`https://api.stackexchange.com/2.3/tags?${fullQueryParams}`);
            const responseData = await response.json();
            setData(responseData)

        } catch {
            setError('There was an error during fetching tags');
        } finally {
            setIsLoading(false);
        }
    }, [queryParams, config, pagination]);

    useEffect(() => {
        handleFetchTags();
    }, [handleFetchTags]);

    return { data, isLoading, error, refetch: handleFetchTags };
}
