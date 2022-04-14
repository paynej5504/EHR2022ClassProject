
import React, { useContext, useState } from 'react';
//import { useIntl } from 'react-intl';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaBookMedical, FaCapsules, FaClipboardCheck } from 'react-icons/fa';

import {FiLogOut, FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi'
import { GiAbstract050 } from "react-icons/gi";
import { SiApacheairflow } from "react-icons/si";
//import sidebarBg from './assets/bg2.jpg';
import logo from '../assets/images/FinalLogo.png';
import UserContext from '../context/UserContext';


const NavBarRedo = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {

      const { setIsAuth } = useContext(UserContext);
      const { setUser } = useContext(UserContext);
      const { roles, setRoles } = useContext(UserContext);
      const [redirect , setRedirect]= useState(false); 


      //menuCollapse state using useState hook
const [menuCollapse, setMenuCollapse] = useState(false)
//custom function that will change menucollapse state from false to true and true to false
const menuIconClick = () => {
//condition checking to change state from true to false and vice versa
menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
};


      const logout = () =>{
        if (window.confirm('Are you sure you wish to logout?')){
            sessionStorage.removeItem("accessToken");
            sessionStorage.removeItem("user");
            setRedirect("true");
            <Navigate  to="/loggedOut" />
        }else{
          return null
        }
        
      };

      return (
        
        <ProSidebar
          rtl={rtl}
          collapsed={menuCollapse}
          toggled={toggled}
          breakPoint="md"
          onToggle={handleToggleSidebar}
          style={{height: '110vh',color: 'white', background: '#A5A5A5', aover: 'black'}}
        >
          <SidebarHeader>
            <div
              style={{
                padding: '24px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 14,
                letterSpacing: '1px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <img src={logo} height={100} width={150} style={{marginLeft: '30px'}}/>


{/* Icon change using menucollapse state */}
{/*<p>{menuCollapse ? <GiAbstract050 /> : <SiApacheairflow /> }</p>*/}
</div>
<div className="closemenu" onClick={menuIconClick}>
{/* changing menu collapse icon on click */}
{menuCollapse ? (
<FiArrowRightCircle/>
) : (
<FiArrowLeftCircle/>
)}



            </div>
          </SidebarHeader>
    
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem
                icon={<FaRegLaughWink />}
                title='Patient Selection'
              ><NavLink to='/patient-selection'></NavLink>
                  Patient Selection
              </MenuItem>
             {/* Patient Dashboard */} 
              <SubMenu
                suffix={<span className="badge yellow"></span>}
                title='Patient Dashboard'
                icon={<FaTachometerAlt />}
              >
                <MenuItem><NavLink to='/dashboard'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Dashboard</MenuItem>
                <MenuItem><NavLink to='/history'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} History</MenuItem>
                <MenuItem><NavLink to='/imaging'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Imaging</MenuItem>
                <MenuItem><NavLink to='/labs'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Labs</MenuItem>
                <MenuItem><NavLink to='/care'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Care Plan</MenuItem>
              </SubMenu>

              {/* Vital Signs */} 
              <SubMenu
                suffix={<span className="badge yellow"></span>}
                title='Vital Signs'
                icon={<FaHeart />}
              >
                <MenuItem><NavLink to='/vitals'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Vitals</MenuItem>
                <MenuItem><NavLink to='/weight'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Weight</MenuItem>
                <MenuItem><NavLink to='/pain'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Pain</MenuItem>
                <MenuItem><NavLink to='/input'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Input</MenuItem>
                <MenuItem><NavLink to='/output'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Output</MenuItem>
              </SubMenu>

              {/* Patient Assessment */}
              <SubMenu title='Patient Assessment' icon={<FaBookMedical />}>
                <SubMenu title='Daily Care'>
                  <MenuItem><NavLink to='/elimination'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Elimination </MenuItem>
                  <MenuItem><NavLink to='/intake'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Intake </MenuItem>
                  <MenuItem><NavLink to='/hygiene'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Hygiene </MenuItem>
                  <MenuItem><NavLink to='/mobility'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Mobility </MenuItem>
                </SubMenu>
                <SubMenu title="General Head">
                    <MenuItem><NavLink to='/eye'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Eye </MenuItem>
                    <MenuItem><NavLink to='/ears'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Ears, Nose, Oral </MenuItem>
                    <MenuItem><NavLink to='/head'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Head </MenuItem>
                  </SubMenu>
                  <SubMenu title="Cardiovascular">
                    <MenuItem><NavLink to='/per-pulse'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Peripheral Perfusion </MenuItem>
                  </SubMenu>
                  <SubMenu title="Peripheral Pulse">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Carotid </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Carotid </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Brachial </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Brachial </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Radial </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Radial </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Femoral </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Femoral </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Popliteal </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Popliteal </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Posterior </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Posterior </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Dorsalis </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Dorsalis </MenuItem>
                  </SubMenu>
                  <SubMenu title="Gastrointestinal">
                    <MenuItem><NavLink to='/gastro'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Gastrointestinal </MenuItem>
                    <MenuItem><NavLink to='/abdomen'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Abdomen Palpation </MenuItem>
                  </SubMenu>
                  <SubMenu title="Genitourinary">
                    <MenuItem><NavLink to='/genitourinary'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Genitourinary </MenuItem>
                  </SubMenu>
                  <SubMenu title="Integumentary">
                    <MenuItem><NavLink to='/integumentary'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Integumentary </MenuItem>
                    <MenuItem><NavLink to='/alterations'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Integumentary Alterations </MenuItem>
                    <MenuItem><NavLink to='/wound-location'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Wound Location & Measurements </MenuItem>
                    <MenuItem><NavLink to='/wound-characteristics'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Wound Info </MenuItem>
                    <MenuItem><NavLink to='/dressing-change'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Dressing Change </MenuItem>
                  </SubMenu>
                  <SubMenu title="Musculoskeletal">
                    <MenuItem><NavLink to='/musculoskeletal'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Musculoskeletal </MenuItem>
                  </SubMenu>
                  <SubMenu title="Neurological">
                    <MenuItem><NavLink to='/mental-status'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Mental Status </MenuItem>
                    <MenuItem><NavLink to='/seizure-activity'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Seizure Activity </MenuItem>
                    <MenuItem><NavLink to='/cranial-nerve'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Cranial Nerve </MenuItem>
                    <MenuItem><NavLink to='/neurological-notes'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Neurological Notes </MenuItem>
                  </SubMenu>
                  <MenuItem>Psychosocial<NavLink to='/psychosocial'></NavLink></MenuItem>
                  <SubMenu title="Respiratory">
                    <MenuItem><NavLink to='/breathing'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Breathing Quality </MenuItem>
                    <MenuItem><NavLink to='/lungs'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Lung Auscultation </MenuItem>
                    <MenuItem><NavLink to='/oxygen'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Oxygen </MenuItem>
                    <MenuItem><NavLink to='/airways'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Airways </MenuItem>
                    <MenuItem><NavLink to='/respiratory-notes'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Notes & Interventions </MenuItem>
                  </SubMenu>
                  <SubMenu title="Safety">
                    <MenuItem><NavLink to='/safety'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Safety Table </MenuItem>
                    <MenuItem><NavLink to='/safety-notes'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Safety Notes & Interventions </MenuItem>
                  </SubMenu>
                  <SubMenu title="Infection">
                    <MenuItem><NavLink to='/infection-control'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Infection Control </MenuItem>
                    <MenuItem><NavLink to='/infection-notes'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Infection Notes </MenuItem>
                  </SubMenu>
                  <SubMenu title="Vascular">
                    <MenuItem><NavLink to='/vascular'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Vascular Access </MenuItem>
                    <MenuItem><NavLink to='/vascular-notes'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Notes & Interventions </MenuItem>
                  </SubMenu>
                  <SubMenu title="Drains & Tubes">
                    <MenuItem><NavLink to='/drains'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Drains & Tubes </MenuItem>
                    <MenuItem><NavLink to='/drains-notes'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Notes & Interventions </MenuItem>
                  </SubMenu>
              </SubMenu>
              <MenuItem icon={<FaClipboardCheck />} title='test2'> Order Entry <NavLink to='/order-entry'></NavLink></MenuItem>
              <SubMenu
                suffix={<span className="badge yellow"></span>}
                title='Medication Administration'
                icon={<FaCapsules />}
              >
                <MenuItem><NavLink to='/scheduled-medications'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Scheduled Meds</MenuItem>
                <MenuItem><NavLink to='/prn-medications'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} PRN Meds</MenuItem>
                <MenuItem><NavLink to='/continuous-medications'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Continuous Meds</MenuItem>
                <MenuItem><NavLink to='/respiratory-medications'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Respiratory Meds</MenuItem>
                <MenuItem><NavLink to='/discontinued-medications'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Discontinued Meds</MenuItem>
              </SubMenu>
              <MenuItem icon={<FiLogOut />} ><a onClick={logout}>Logout</a></MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar> 
      );
    };

export default NavBarRedo;