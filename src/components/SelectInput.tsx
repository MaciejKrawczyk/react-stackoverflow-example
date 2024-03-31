import {FC} from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";

type SelectInput = {
    label: string
    itemsList: string[],
    onValueChange: (value: string) => void
    defaultChosenValue: string
}

const SelectInput: FC<SelectInput> = ({label, itemsList, onValueChange, defaultChosenValue}) => {

    return (
        <Select onValueChange={(e) => onValueChange(e)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={defaultChosenValue}/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {itemsList.map((value) => (
                        <SelectItem key={value} value={value}>{value}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )

}

export default SelectInput