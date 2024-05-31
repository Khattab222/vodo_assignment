import Pagination from '@mui/material/Pagination';


type TPaginationProps ={
    page:number
    handleChange:(event: React.ChangeEvent<unknown>, value: number)=>void
    count:number
}


const PaginationCount = ({page,handleChange,count}:TPaginationProps) => {
  
  return (
    <div className="flex justify-center ">
        <Pagination color="primary" variant="outlined" shape="rounded" count={count} page={page} onChange={handleChange} />
    </div>
  )
}

export default PaginationCount