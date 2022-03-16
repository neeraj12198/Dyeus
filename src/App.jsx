import React from 'react'
import Menu from './assets/icon/menu.svg?component'
import Bell from './assets/icon/bell.svg?component'
import Cart from './assets/icon/cart.svg?component'
import Stars from './assets/icon/stars.svg?component'
import Vial from './assets/icon/vial.svg?component'
import Call from './assets/icon/call.svg?component'

import * as styles from './styles/app.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Menu />
        <Bell className={styles.bellIcon} />
        <Cart />
      </header>
      <div className={styles.firstSection}>
        <h1 className={styles.heading}>About Diana</h1>
        <h2 className={styles.heading2}>A platform that looks out for you</h2>
        <p className={styles.para}>Diana empowers you to understand how your body works so you can look and feel your best. </p>
        <hr className={styles.hr} />
        <h3 className={styles.heading3}>Our Philosophy</h3>
        <h1 className={styles.heading}>Sustainable wellness is a big-picture, inside out approach</h1>
        <p className={styles.sans}>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.
          <br /><br />
          That’s why we’ve created an integrated ecosystem of:
        </p>
        <div className={styles.firstBenefits}>
          <div className={styles.benefit}>
            <Vial className={styles.benefitIcon} />
            <p className={styles.benefitTxt}>Consciously formulated products that deliver feel-good results fast</p>
          </div>
          <div className={styles.benefit}>
            <Stars className={styles.benefitIcon} />
            <p className={styles.benefitTxt}>In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body</p>
          </div>
          <div className={styles.benefit}>
            <Call className={styles.benefitIcon} />
            <p className={styles.benefitTxt}>In-app consultation portals that connect you with compassionate wellness experts</p>
          </div>
        </div>
        <p className={styles.lastP}>
          Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
        </p>
      </div>
      <div className={styles.secondSection}>
        <h3>What makes us different?</h3>
        <h1 className={styles.heading}>
          Reimagining and rewiring self-care
        </h1>
        <p>You care about conscious consumption, and so do we.
          <br /><br />When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best
          <br /><br /> We collaborate with researchers and doctors to
          <br />
          <ul>
            <li>Help you get granular about your health and self-care with personalized insights, and</li>
            <li>Equip you with simple, sustainable products that get the job done</li>
          </ul>
          <br />No to-the-moon-and-back claims in this neck of the woods.
          <br /><br />We’re just solving real problems for real people here.</p>
      </div>
    </div>
  )
}

export default App