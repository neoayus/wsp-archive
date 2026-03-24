import '../styles/Sidebar.css'

import {Chat, Status, Channel, Communities, Media, User} from './icons';

export default function Sidebar(){
  return(
    <nav className="sidebar">
      <div className='sidebar-top'>
        <Chat size={28} color="black" className="icon chat"/>
        <Status size={28} color="black" className="icon status"/>
        <Channel size={28} color="black" className="icon channel"/>
        <Communities size={28} color="black" className="icon communities"/>
        <hr className='divider'/>
      </div>

      <div className='sidebar-bottom'>
        <Media size={28} color="black" className="icon media"/>
        <User size={28} color="black" className="icon user"/>
      </div>
    </nav>
  )
}