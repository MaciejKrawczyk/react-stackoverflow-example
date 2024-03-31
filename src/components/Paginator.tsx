import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {FC} from "react";

type PaginationProps = {
    currentPage: number
    isNextPage: boolean
    setCurrentPage: (currentPage: number) => void,
}

const Paginator: FC<PaginationProps> = ({currentPage, isNextPage, setCurrentPage}) => {



    return (
        <Pagination>
            <PaginationContent>
                {currentPage > 1 && (
                    <PaginationItem
                        className={'cursor-pointer'}
                        tabIndex={0}
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(currentPage - 1);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                setCurrentPage(currentPage - 1);
                            }
                        }}
                    >
                        <PaginationPrevious/>
                    </PaginationItem>
                )}

                {currentPage > 1 && (
                    <PaginationItem
                        className={'cursor-pointer'}
                        tabIndex={0}
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(currentPage - 1);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                setCurrentPage(currentPage - 1);
                            }
                        }}
                    >
                        <PaginationLink>
                            {currentPage - 1}
                        </PaginationLink>
                    </PaginationItem>
                )}

                <PaginationItem
                    tabIndex={0}
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    <PaginationLink isActive>
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>

                {isNextPage && (
                    <PaginationItem
                        className={'cursor-pointer'}
                        tabIndex={0}
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(currentPage + 1);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                setCurrentPage(currentPage + 1);
                            }
                        }}
                    >
                        <PaginationLink>
                            {currentPage + 1}
                        </PaginationLink>
                    </PaginationItem>
                )}

                {isNextPage && (
                    <PaginationItem
                        className={'cursor-pointer'}
                        tabIndex={0}
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(currentPage + 1);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                setCurrentPage(currentPage + 1);
                            }
                        }}
                    >
                        <PaginationNext/>
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    )

}

export default Paginator