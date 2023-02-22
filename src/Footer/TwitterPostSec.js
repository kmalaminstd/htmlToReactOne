import TwitterPosts from "./TwitterPosts"

function TwitterPostSec() {
  return (
    <div>
        <div className="col-md-4 col-md-offset-1 content-ct">
                        <h3><span className="ti-twitter"></span> Twitter Feed</h3>
                            <TwitterPosts />
                        </div>
        </div>
  )
}

export default TwitterPostSec