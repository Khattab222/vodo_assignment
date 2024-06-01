import Pagination from '@mui/material/Pagination';


type TPaginationProps ={
    page:number
    handleChange:(event: React.ChangeEvent<unknown>, value: number)=>void
    count:number
}


const PaginationCount = ({page,handleChange,count}:TPaginationProps) => {
  
  return (
  
 <div className="flex justify-center  m-2 w-full dark:bg-slate-300 py-2 rounded  ">
        <Pagination color="secondary" variant="outlined" shape="rounded" count={count} page={page} onChange={handleChange} />
    </div>
 
   
  )
}

export default PaginationCount