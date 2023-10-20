'use client';
import React from 'react'
import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={styles.card}>
        <button onClick={() => console.log('Click')}>Login</button>
    </div>
  )
}

export default LoginForm