import {useState} from "react";
import {StackOverflowTagsResponse} from "@/types/stackExchangeTypes.ts";


const useTags = () => {

    const [data, setData] = useState<StackOverflowTagsResponse | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetchTags = () => {

    }

    return {isLoading, error, data, refetch: handleFetchTags}
}

export default useTags