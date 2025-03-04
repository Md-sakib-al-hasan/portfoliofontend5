import ClipLoader from "react-spinners/ClipLoader";
export default function Loading() {
   
    return <div  className="flex min-h-screen  items-center justify-center">
    <ClipLoader
         color={"red"}
         size={50}
         aria-label="Loading Spinner"
         data-testid="loader"
       /> 
    </div>
  }