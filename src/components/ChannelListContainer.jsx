import React, { useState } from 'react';
import {ChannelList, useChatContext} from 'stream-chat-react';

import Cookies from 'universal-cookie';
import {ChannelSearch, TeamChannelList, TeamChannelPreview} from "./";

import chatIcon from '../assets/chatIcon.png';
import LogoutIcon from '../assets/logout.png';

const cookies = new Cookies();
const SideBar = ({logout, setShowSideBar}) => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src = {chatIcon} alt = "Hospital" width = "30"/>
            </div>
        </div>

        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner' onClick={logout}>
                <img src = {LogoutIcon} alt = "Logout" width = "30"/>
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner' onClick={() => setShowSideBar(prev => !prev)}>
               <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 23h-24v-22h24v22zm-2-20h-14v18h14v-18zm-4 4l-6 5 6 5v-10z"/></svg>
            </div>
        </div>
    </div>
    
);

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className = 'channel-list__header__text'>Chat Application</p>
    </div>
);

const customChannelTeamFilter = (channels) => {
    return channels.filter( (channel) =>channel.type === 'team');
};
const customChannelMessagingFilter = (channels) => {
    return channels.filter( (channel) =>channel.type === 'messaging');
};


const ChannelListContent = ({isCreating, setIsCreating, setIsEditing, setCreateType, setToggleContainer, showSideBar, setShowSideBar}) => {
    const {client} = useChatContext();

    const logout = ()=> {
        cookies.remove("token");
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('userId');
        cookies.remove('phoneNumber');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');

        window.location.reload();
    };
    
     const filters = { members: { $in: [client.userID] } };

  return (
    <>
        <SideBar logout ={logout}
            setShowSideBar={setShowSideBar}
        />
        <div className='channel-list__list__wrapper'>
            <CompanyHeader/>
            <ChannelSearch
                setToggleContainer={setToggleContainer}
            />
            <ChannelList 
                filters ={ filters}
                channelRenderFilterFn={customChannelTeamFilter}
                List = {(listProps) => (
                    <TeamChannelList
                        {...listProps}
                        type="team"
                        isCreating ={isCreating}
                        setIsCreating={setIsCreating}
                        setIsEditing ={setIsEditing}
                        setCreateType={setCreateType}
                        setToggleContainer ={setToggleContainer}
                    />
                )}
                preview = {(previewProps)=>(
                    <TeamChannelPreview
                        {...previewProps}
                        type = "team"
                        setIsCreating={setIsCreating}
                        setIsEditing ={setIsEditing}
                        setToggleContainer ={setToggleContainer}
                    />
                )}
            />


            <ChannelList 
                filters ={ filters}
                channelRenderFilterFn={customChannelMessagingFilter}
                List = {(listProps) => (
                    <TeamChannelList
                        {...listProps}
                        type="messaging"
                        isCreating ={isCreating}
                        setIsCreating={setIsCreating}
                        setIsEditing ={setIsEditing}
                        setCreateType={setCreateType}
                        setToggleContainer ={setToggleContainer}
                    />
                )}
                preview = {(previewProps)=>(
                    <TeamChannelPreview
                        {...previewProps}
                        type = "messaging"
                        setIsCreating={setIsCreating}
                        setIsEditing ={setIsEditing}
                        setToggleContainer ={setToggleContainer}
                    />
                )}
            />
        </div>
    </>
  );
}

const ChannelListContainer = ({setCreateType, setIsCreating, setIsEditing, setShowSideBar, showSideBar})=> {
    const [toggleContainer, setToggleContainer] = useState(false);
    

    return (
        <>
            <div className='channel-list__container'>

            {showSideBar ?
                <ChannelListContent
                    setIsCreating ={setIsCreating}
                    setIsEditing={setIsEditing}
                    setCreateType={setCreateType}
                    setShowSideBar={setShowSideBar}
                    showSideBar={showSideBar}
                />
                :
                <SideBar setShowSideBar={setShowSideBar}/>
            }
            </div>
            <div 
                className='channel-list__container-responsive'
                style={{
                left: showSideBar ? '0%' : '-89%',
                backgroundColor: '#005fff',
                transition: 'left 0.5s ease', // Optional: Add a transition for a smoother effect
                }}
            >
                 {/* <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div> */}

                <ChannelListContent
                    setIsCreating ={setIsCreating}
                    setIsEditing={setIsEditing}
                    setCreateType={setCreateType}
                    setToggleContainer={setToggleContainer}
                    setShowSideBar={setShowSideBar}
                />
                
            </div>
        </>
    )
};

export default ChannelListContainer