import { format } from 'date-fns'
import { ColumnFilter } from './ColumnFilter'
export const COLUMNS = [
    {
        Header: 'ID',
        Footer: 'ID',
        accessor: 'id',
        Filter: ColumnFilter
    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name',
        Filter: ColumnFilter
    },
    {
        Header: 'User Name',
        Footer: 'User Name',
        accessor: 'username',
        Filter: ColumnFilter
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
        Filter: ColumnFilter
    }
]
 