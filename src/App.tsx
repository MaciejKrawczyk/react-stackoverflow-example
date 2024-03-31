import {useEffect} from "react";
import {Input} from "@/components/ui/input.tsx";
import {toast, useToast} from "@/components/ui/use-toast";
import {useFetchStackExchangeAPITagsStore} from "@/store/store.ts";
import Paginator from "@/components/Paginator.tsx";
import TagsTableWithLoadingState from "@/components/TagsTableWithLoadingState.tsx";
import SelectInput from '@/components/SelectInput.tsx'
import Container from "@/components/Container.tsx";
import {Label} from "@/components/ui/label.tsx";

function App() {

    const {
        data,
        isLoading,
        orderBy,
        sortBy,
        itemsPerPage,
        currentPage,
        isNextPage,
        error,
        fetchTagsData,
        setCurrentPage,
        setItemsPerPage,
        setOrderBy,
        setSortBy
    } = useFetchStackExchangeAPITagsStore((state) => ({
        data: state.data,
        isLoading: state.isLoading,
        orderBy: state.orderBy,
        sortBy: state.sortBy,
        itemsPerPage: state.itemsPerPage,
        currentPage: state.currentPage,
        isNextPage: state.isNextPage,
        error: state.error,
        fetchTagsData: state.fetchTagsData,
        setCurrentPage: state.setCurrentPage,
        setItemsPerPage: state.setItemsPerPage,
        setOrderBy: state.setOrderBy,
        setSortBy: state.setSortBy
    }))

    useEffect(() => {
        fetchTagsData()
    }, [itemsPerPage, currentPage, orderBy, sortBy, fetchTagsData])


    const {toast} = useToast()
    const onRowClick = (title: string, postsCount: number) => {
        toast({
            title: title,
            description: `Number of linked posts: ${postsCount}`
        })
    }

    if (error) return (
        <h2 className={'text-2xl text-red-600 font-bold'}>{error}</h2>
    )

    return (
        <Container>

            <h1 className={'text-4xl font-bold my-5'}>Stackoverflow tags browser</h1>

            <div>
                <div className={'mb-1'}>
                    <Label htmlFor={'itemsPerPage'}>items per page</Label>
                    <Input
                        id={'itemsPerPage'}
                        className="w-[180px]"
                        type="number"
                        min={1} // api limit
                        max={100} // api limit
                        value={itemsPerPage}
                        onChange={e => setItemsPerPage(Number(e.target.value))}
                    />
                </div>

                <div className={'flex w-full gap-1 mr-3'}>

                    <SelectInput
                        itemsList={['popular', 'activity', 'name']}
                        label={'sort by...'}
                        onValueChange={setSortBy as (value: string) => void}
                        defaultChosenValue={sortBy}
                    />

                    <SelectInput
                        itemsList={['desc', 'asc']}
                        label={'order by...'}
                        onValueChange={setOrderBy as (value: string) => void}
                        defaultChosenValue={orderBy}
                    />

                </div>
            </div>

            <TagsTableWithLoadingState
                isLoading={isLoading}
                data={data}
                onRowClick={onRowClick}
                defaultItemsPerPage={itemsPerPage}/>

            <Paginator
                currentPage={currentPage}
                isNextPage={isNextPage}
                setCurrentPage={setCurrentPage}
            />

        </Container>
    )
}

export default App