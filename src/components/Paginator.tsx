import { FC, useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";

type PaginationProps = {
    initialPage: number;
    isNextPage: boolean;
    onPageChange?: (newPage: number) => void;
}

const Paginator: FC<PaginationProps> = ({initialPage, isNextPage, onPageChange}) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        onPageChange?.(newPage);
    };

    return (
        <Pagination>
            <PaginationContent>
                {currentPage > 1 && (
                    <PaginationItem
                        className="cursor-pointer"
                        tabIndex={0}
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage - 1);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handlePageChange(currentPage - 1);
                            }
                        }}
                    >
                        <PaginationPrevious/>
                    </PaginationItem>
                )}

                {currentPage > 1 && (
                    <PaginationItem
                        className="cursor-pointer"
                        tabIndex={0}
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage - 1);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handlePageChange(currentPage - 1);
                            }
                        }}
                    >
                        <PaginationLink>
                            {currentPage - 1}
                        </PaginationLink>
                    </PaginationItem>
                )}

                <PaginationItem tabIndex={0}>
                    <PaginationLink isActive>
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>

                {isNextPage && (
                    <PaginationItem
                        className="cursor-pointer"
                        tabIndex={0}
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage + 1);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handlePageChange(currentPage + 1);
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
                        className="cursor-pointer"
                        tabIndex={0}
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage + 1);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handlePageChange(currentPage + 1);
                            }
                        }}
                    >
                        <PaginationNext/>
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};

export default Paginator;
