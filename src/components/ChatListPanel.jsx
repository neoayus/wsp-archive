import '../styles/ChatListPanel.css';

import {Whatsapp} from './icons';

export default function ChatListPanel(){
  return(
    <div className="chat-list-panel">
      <Header />  
      <SearchBar />
      <GroupBy />
      <ChatList />
    </div>
  )
}

function Header(){
  return(
    <div className='header'>
    </div>  
  ) 
}
function SearchBar(){
  return(
    <div className='search-bar'>
    </div>  
  ) 
}
function GroupBy(){
  return(
    <div className='group-by'>
    </div>  
  ) 
}
function ChatList(){
  return(
    <div className='chat-list'>
    </div>  
  ) 
}