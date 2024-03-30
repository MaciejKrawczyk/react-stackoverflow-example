import { useEffect, useState, useCallback, useMemo } from 'react';
import { StackOverflowTagsResponse } from '@/types/stackExchangeTypes';

interface UseFetchTagsProps {
    queryParams?: {
        dateFrom?: string;
        dateTo?: string;
        minNumOfLinkedPosts?: string;
        maxNumOfLinkedPosts?: string;
        tagIncludesString?: string;
    };
    config: {
        order?: 'asc' | 'desc';
        sortByType?: string;
        websiteName: string;
    };
    pagination?: {
        currentPage?: number;
        numOfElementsPerPage?: number;
    };
}

interface UseFetchTagsResponse {
    data: StackOverflowTagsResponse | undefined;
    error: string | null;
    isLoading: boolean;
    refetch: () => void;
}

export default function useFetchTags(props: UseFetchTagsProps): UseFetchTagsResponse {
    const { queryParams = {}, config = { websiteName: 'stackoverflow', order: 'desc', sortByType: 'popular' }, pagination = { currentPage: 1, numOfElementsPerPage: 10 } } = props;

    const memoizedQueryParams = useMemo(() => queryParams, [queryParams.dateFrom, queryParams.dateTo, queryParams.minNumOfLinkedPosts, queryParams.maxNumOfLinkedPosts, queryParams.tagIncludesString]);
    const memoizedConfig = useMemo(() => config, [config.order, config.sortByType, config.websiteName]);
    const memoizedPagination = useMemo(() => pagination, [pagination.currentPage, pagination.numOfElementsPerPage]);

    const [data, setData] = useState<StackOverflowTagsResponse | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetchTags = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        const paramsObj: Record<string, string> = {};
        Object.entries({
            fromdate: memoizedQueryParams.dateFrom,
            todate: memoizedQueryParams.dateTo,
            min: memoizedQueryParams.minNumOfLinkedPosts,
            max: memoizedQueryParams.maxNumOfLinkedPosts,
            inname: memoizedQueryParams.tagIncludesString,
            order: memoizedConfig.order,
            sort: memoizedConfig.sortByType,
            site: memoizedConfig.websiteName,
            page: memoizedPagination.currentPage?.toString(),
            pagesize: memoizedPagination.numOfElementsPerPage?.toString(),
        }).forEach(([key, value]) => {
            if (value !== undefined) paramsObj[key] = value;
        });

        const fullQueryParams = new URLSearchParams(paramsObj).toString();

        try {
            const response = await fetch(`https://api.stackexchange.com/2.3/tags?${fullQueryParams}`);
            if (!response.ok) {
                throw new Error(`API returned status ${response.status}`);
            }
            const responseData = await response.json();
            setData(responseData.items);
        } catch (error: any) {
            setError(error.message || 'There was an error fetching tags');
        } finally {
            setIsLoading(false);
        }
    }, [memoizedQueryParams, memoizedConfig, memoizedPagination]);

    useEffect(() => {
        handleFetchTags();
    }, [handleFetchTags]);

    return { data, isLoading, error, refetch: handleFetchTags };
}
