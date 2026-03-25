import '../styles/Sidebar.css'

import {Chat, Status, Channel, Communities, Media, User} from './icons';

export default function Sidebar(){
  return(
    <nav className="sidebar">
      <div className='sidebar-top'>
        <Chat size={22} color="black" className="icon chat"/>
        <Status size={22} color="black" className="icon status"/>
        <Channel size={22} color="black" className="icon channel"/>
        <Communities size={22} color="black" className="icon communities"/>
        <hr className='divider'/>
      </div>

      <div className='sidebar-bottom'>
        <Media size={22} color="black" className="icon media"/>
        <User size={22} color="black" className="icon user"/>
      </div>
    </nav>
  )
}