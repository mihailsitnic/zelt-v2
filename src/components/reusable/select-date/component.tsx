import React from "react";
import DatePicker from "react-datepicker";
import { Select } from "./styles";

const SelectDate: React.FC<any> = (props) => {
    const { name, sfv, validation } = props;

    return (
        <Select {...props} validation={validation}>
            <DatePicker
                onChange={(date: any) => sfv(name, new Date(date.getTime()))}
                startDate={new Date("1995/08/22")}
                selected={new Date("1995/08/22")}
                dateFormat="dd.MM.yyyy"
                placeholderText="Select date"
                autoComplete="off"
            />
        </Select>
    );
};

export default SelectDate;
