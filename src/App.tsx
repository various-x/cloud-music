import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <div className="App">
        <div className="nav">
          <Link to="/discover">发现音乐</Link>
          <Link to="/mime">我的音乐</Link>
          <Link to="/focus">关注</Link>
          <Link to="/focus" target="_blank">商城</Link>
          <Link to="/mime">音乐人</Link>
          <Link to="/mime">云推歌</Link>
          <Link to="/download">下载客户端</Link>
        </div>
      </div>
      <Suspense fallback=''>
        <Outlet />
      </Suspense>
    </div>
  )
  
}

export default App
