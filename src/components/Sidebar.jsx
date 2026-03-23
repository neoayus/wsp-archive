import '../styles/Sidebar.css'

export default function Sidebar(){
  return(
    <nav className="sidebar">
      <div className='sidebar-top'>
        <div className='icon chat'></div>
        <div className='icon status'></div>
        <div className='icon channel'></div>
        <div className='icon communities'></div>
        <hr />
      </div>

      <div className='sidebar-bottom'>
        <div className='icon media'></div>
        <div className='icon you'></div>
      </div>
    </nav>
  )
}