import useFetchTags from "@/hooks/stackExchangeAPI/useFetchTags.ts";
import loading from '@/assets/loading.svg'
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";

function App() {

    const {isLoading, error, data, refetch} = useFetchTags({config: {websiteName: 'stackoverflow'}})

    if (isLoading) return (
        <div className={'w-full flex justify-center items-center h-full'}>
            <img src={loading} alt="loading animation"/>
        </div>
    )

    if (error) return (
        <div>{error}</div>
    )

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tag name</TableHead>
                        <TableHead>Number of linked posts</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data && data.items.map((data) => (
                        <TableRow key={data.name}>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default App