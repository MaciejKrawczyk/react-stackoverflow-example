import {FC} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {StackOverflowTagsResponse} from "@/types/stackExchangeTypes.ts";

type TagsTableWithLoadingStateProps = {
    data: StackOverflowTagsResponse,
    isLoading: boolean,
    onRowClick: (title: string, count: number) => void,
    defaultItemsPerPage: number
}

const TagsTableWithLoadingState: FC<TagsTableWithLoadingStateProps> = ({
                                                                           data,
                                                                           isLoading,
                                                                           onRowClick,
                                                                           defaultItemsPerPage
                                                                       }) => {


    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className={'w-1/2'}>Tag name</TableHead>
                    <TableHead className={'w-1/2'}>Number of linked posts</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {isLoading && Array(defaultItemsPerPage).fill(0).map((_, i) =>
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
                    <TableRow
                        key={data.name}
                        className={'cursor-pointer'}
                        onClick={() => onRowClick(data.name, data.count)}
                    >
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.count}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TagsTableWithLoadingState