const PostsList = (props) => {

  const { post } = props
  return (
    <li className="d-flex justify-content-between m-3">
      <div className="col-12">
        <div className="card h-100">
          <img src={post?.image} className="card-img-top" alt={post?.image} />
          <div className="card-body">
            <h5 className="card-title">{post?.title}</h5>
            <p className="card-text">{post?.content}</p>
            <p className="card-text"><strong>{post?.tags?.map(tag => tag = `#${tag}`).join(" ")}</strong></p>
          </div>
        </div>
      </div>

    </li>
  )
}

export default PostsList