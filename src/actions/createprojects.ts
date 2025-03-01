
 "use server"

const Createprojects = (data:FormData) => {
    const blogdata = Object.fromEntries(data.entries());
    console.log(blogdata)
}

export default Createprojects
