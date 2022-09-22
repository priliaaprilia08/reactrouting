import React from 'react'

const AboutApp = () => {
  return (
    <div className='about'>
      <h1 className='judul'>About the App</h1>
      <div className='text align-item-center'>
      <p>In this app, you can add, delete, submit and edit items. To edit items, simply double click on it.
        Once you are done, press the enter key to resubmit. This app will persist your data in the browser 
        local storage. So wheter you reload, close your app or reopened it, you still have access to yout 
        todos items.</p>
      </div>
    </div>
  );
}

export default AboutApp;
