import React, { useState } from "react"

import styles from "../styles/AdminAnalyticsTab.module.css"

import { IoSpeedometerOutline} from "react-icons/io5"

// components
// import AuthTab from './AuthTab'
// import MembersTab from '../../components/MembersTab'
// import HistoryTab from '../../components/HistoryTab'

// icon
import { FiMenu } from "react-icons/fi"
import ChannelsTab from "./ChannelsTab"
import AnalyticsOverview from "./AnalyticsOverview"

const AdminSettingsTab = () => {
  const [openTab, setOpenTab] = useState(false)
  const [active, setActive] = useState(1)

  return (
    <>
    
    <div className={`${styles.tabWrapper} mt-4`}>
    <h2 className={`mb-2 pt-3 ${styles.analytics_title}`}><IoSpeedometerOutline color="#489379" /> {""} Analytics</h2>
      <div onClick={() => setOpenTab(!openTab)} className={styles.mobileToggle}>
        <FiMenu className={styles.menuIcon} />
      </div>
      <div className={openTab ? styles.tabHeaderActive : styles.tabHeader}>
        <div
          onClick={() => {
            setActive(1)
            setOpenTab(!openTab)
          }}
          className={
            active === 1 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Overview
        </div>
        <div
          onClick={() => {
            setActive(2)
            setOpenTab(!openTab)
          }}
          className={
            active === 2 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Channels
        </div>
        <div
          onClick={() => {
            setActive(3)
            setOpenTab(!openTab)
          }}
          className={
            active === 3 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Members
        </div>
      </div>
      <div className={styles.tabContent}>
        {/* {active === 1 && (
          <AdminSettings
            setActive={setActive}
            setOpenTab={setOpenTab}
            openTab={openTab}
          />
        )} */}

        {active === 1 && <AnalyticsOverview />}
        {active === 2 && <ChannelsTab />}
        {/* {active === 3 && <AuthTab />} */}
      </div>
    </div>
    </>
  )
}

export default AdminSettingsTab
