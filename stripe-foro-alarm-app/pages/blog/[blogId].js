import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'

const BlogDetail = () => {
    const router = useRouter()
    const param = router.query.blogId
  return (
    <div className='container'>
        <h1 className="text-center text-danger">Welcome to blog page {param}!</h1>
    </div>
  )
}

export default BlogDetail