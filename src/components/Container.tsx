import {FC, ReactNode} from "react";

type ContainerProps = {
    children: ReactNode
}

const Container: FC<ContainerProps> = ({children}) => {


    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-8">
            <div className="w-full max-w-4xl px-4 md:px-8 lg:px-12">
                {children}
            </div>
        </div>
    )
}

export default Container