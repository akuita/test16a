import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@components/atoms/Button';
import styles from './index.module.css';

function AttendanceSystem(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.logo')} className={styles.logo} />
          <span className={styles.logoTitle}>{t('AttendanceSystem.attendanceSystem')}</span>
        </div>
        <div>
          <a href="#" className={`${styles.navLink} ${styles.navLinkTimeTracking}`}>
            <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.timeTracking')} className={styles.navIcon} />
            <span>{t('AttendanceSystem.timeTracking')}</span>
          </a>
          <a href="#" className={styles.navLink}>
            <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.timeSheet')} className={styles.navIcon} />
            <span>{t('AttendanceSystem.timeSheet')}</span>
          </a>
          <a href="#" className={styles.navLink}>
            <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.logout')} className={styles.navIcon} />
          </a>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.userInfo}>
          <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.user')} className={styles.userIcon} />
          <span className={styles.userName}>{t('AttendanceSystem.userName')}</span>
        </div>
        <div className={styles.dateInfo}>
          <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.calendar')} className={styles.userIcon} />
          <span className={styles.dateText}>{t('AttendanceSystem.date')}</span>
        </div>
        <div className={styles.timeDisplay}>
          {t('AttendanceSystem.time')}
        </div>
        <div className={styles.buttonContainer}>
          <Button buttonType="attendanceSystemButton">{t('AttendanceSystem.checkIn')}</Button>
          <Button buttonType="attendanceSystemButtonDisabled">{t('AttendanceSystem.checkedOut')}</Button>
        </div>
      </div>
    </div>
  );
}

export default AttendanceSystem;