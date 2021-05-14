import React, {useState} from 'react'
import { Input, InputLeftElement, InputGroup, Icon
     } from '@chakra-ui/react'; 

import { Search2Icon } from '@chakra-ui/icons'

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    const [filterInput, setFilterInput] = useState("");

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilterInput(value);
        setFilter(value);
      };


    return (
        <span> 
                <InputGroup>
                    <InputLeftElement children={ <Search2Icon />} />
                    <Input value={filterInput}
                onChange={handleFilterChange} />
                </InputGroup>
        </span>
    )
}