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
    label: string;
    itemsList: string[];
    onValueChange?: (value: string) => void;
    defaultChosenValue: string;
}

const SelectInput: FC<SelectInput> = ({label, itemsList, onValueChange, defaultChosenValue}) => {
    const handleChange = (value: string) => {
        if (onValueChange) {
            onValueChange(value);
        }
    };

    return (
        <Select onValueChange={handleChange}>
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

export default SelectInput;
