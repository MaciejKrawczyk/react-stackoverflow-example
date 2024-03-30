import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {useCallback, useEffect, useState} from "react";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {Input} from "@/components/ui/input.tsx";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";
import {useToast} from "@/components/ui/use-toast";
import {useFetchStackExchangeAPITagsStore, useStackOverflowTagsStore} from "@/store/store.ts";
import {StackOverflowTagsResponse} from "@/types/stackExchangeTypes.ts";
import ky from "ky";

function App() {

    // const [currentPage, setCurrentPage] = useState(1)
    // const [itemsPerPage, setItemsPerPage] = useState(10)
    // const [sortBy, setSortBy] = useState('popular')
    // const [orderBy, setOrderBy] = useState('desc')
    // const [isNextPage, setIsNextPage] = useState(true)
    //
    // const [data, setData] = useState<StackOverflowTagsResponse | undefined>();
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

    // const {
    //     data,
    //     isLoading,
    //     orderBy,
    //     sortBy,
    //     itemsPerPage,
    //     currentPage,
    //     isNextPage,
    //     error,
    //     fetchTagsData,
    //     // setIsLoading,
    //     // setError,
    //     setCurrentPage,
    //     // setIsNextPage,
    //     setItemsPerPage,
    //     setOrderBy,
    //     setSortBy
    // } = useFetchStackExchangeAPITagsStore((state) => ({
    //     data: state.data,
    //     isLoading: state.isLoading,
    //     orderBy: state.orderBy,
    //     sortBy: state.sortBy,
    //     itemsPerPage: state.itemsPerPage,
    //     currentPage: state.currentPage,
    //     isNextPage: state.isNextPage,
    //     error: state.error,
    //     fetchTagsData: state.fetchTagsData,
    //     // setIsLoading: state.setIsLoading,
    //     // setError: state.setError,
    //     setCurrentPage: state.setCurrentPage,
    //     // setIsNextPage: state.setIsNextPage,
    //     setItemsPerPage: state.setItemsPerPage,
    //     setOrderBy: state.setOrderBy,
    //     setSortBy: state.setSortBy
    // }))

    // useEffect(() => {
    //     fetchTagsData()
    // }, [fetchTagsData])

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [sortBy, setSortBy] = useState('popular')
    const [orderBy, setOrderBy] = useState('desc')
    const [isNextPage, setIsNextPage] = useState(true)

    const { data, setData } = useStackOverflowTagsStore((state) => ({
        data: state.data,
        setData: state.setData
    }))
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getData = useCallback(async () => {
        try {
            setError(null)
            setIsLoading(true)
            const data = await ky.get(`https://api.stackexchange.com/2.3/tags?page=${currentPage}&pagesize=${itemsPerPage}&order=${orderBy}&sort=${sortBy}&site=stackoverflow`).json() as StackOverflowTagsResponse
            setData(data)
            setIsNextPage(data.has_more)
        } catch (e: any) {
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }, [currentPage, itemsPerPage, orderBy, sortBy])

    useEffect(() => {
        getData()
    }, [getData])


    const {toast} = useToast()

    if (error) return (
        <h2 className={'text-2xl text-red-600 font-bold'}>{error}</h2>
    )

    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-8">
            <div className="w-full max-w-4xl px-4 md:px-8 lg:px-12">

                <h1 className={'text-4xl font-bold my-5'}>Stackoverflow tags search</h1>

                <div className={'flex w-full gap-1 mr-3'}>
                    <Input
                        className="w-[180px]"
                        type="number"
                        min={1} // api limit
                        max={100} // api limit
                        value={itemsPerPage}
                        onChange={e => setItemsPerPage(Number(e.target.value))}
                    />

                    <Select onValueChange={e => setSortBy(e)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={sortBy}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>sort by...</SelectLabel>
                                <SelectItem value="popular">Popular</SelectItem>
                                <SelectItem value="activity">Activity</SelectItem>
                                <SelectItem value="name">Name</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select onValueChange={e => setOrderBy(e)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={orderBy}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>order by...</SelectLabel>
                                <SelectItem value="desc">desc</SelectItem>
                                <SelectItem value="asc">asc</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={'w-1/2'}>Tag name</TableHead>
                            <TableHead className={'w-1/2'}>Number of linked posts</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array(itemsPerPage).fill(0).map((_, i) =>
                            <TableRow key={i}>
                                <TableCell>
                                    <Skeleton className={'h-[1.25rem] w-full'}/>
                                </TableCell>
                                <TableCell>
                                    <Skeleton className={'h-[1.25rem] w-full'}/>
                                </TableCell>
                            </TableRow>
                        )}
                        {data && !isLoading && data.items.map((data) => (
                            <TableRow key={data.name} className={'cursor-pointer'} onClick={() => {
                                toast({
                                    title: data.name,
                                    description: `Number of linked posts: ${data.count}`
                                })
                            }}>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination>
                    <PaginationContent>
                        {currentPage > 1 && (
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentPage(currentPage - 1);
                                    }}
                                />
                            </PaginationItem>
                        )}

                        {currentPage > 1 && (
                            <PaginationItem>
                                <PaginationLink
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentPage(currentPage - 1);
                                    }}
                                >
                                    {currentPage - 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationLink
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                isActive
                            >
                                {currentPage}
                            </PaginationLink>
                        </PaginationItem>

                        {isNextPage && (
                            <PaginationItem>
                                <PaginationLink
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentPage(currentPage + 1);
                                    }}
                                >
                                    {currentPage + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        {isNextPage && (
                            <PaginationItem>
                                <PaginationNext onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(currentPage + 1);
                                }}/>
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>

            </div>
        </div>
    )
}

export default App