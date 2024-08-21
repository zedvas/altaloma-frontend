import ContactCSS from './Contact.module.css';

const Contact = () => {
  return (
      <div className={ContactCSS.wrapper}>
              <h1 className={ContactCSS.heading}>Contact us.</h1>
              <img src={'/3.jpg'} />
    </div>
  )
}

export default Contact