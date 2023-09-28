import React, { useState } from 'react'
import './Card.css'

const Card = ({title, imageUrl, body}) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    if(modal){
        document.body.classList.add("active-modal")
    }else{
        document.body.classList.remove("active-modal")
    }


  return (
    <>
    <div className='card-container'>
        <div className="image-container">
            <img src={imageUrl} alt="pic" />
        </div>

        <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </div>

        <div className="btn">
            <button
                onClick={toggleModal}
            >
                <a>View More</a>
            </button>
        </div>

    </div>


    {modal && (
        <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
                <div className="modal-image">
                    <img src={imageUrl} alt="pic" />
                </div>
                <div className="modal-title">
                    <h2>{title}</h2>
                </div>
                <div className="modal-summary">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dolore aperiam omnis dolor ratione nisi voluptatum, quisquam ex laborum aut esse. Explicabo sequi molestiae velit tempora, consequatur, quis quisquam deleniti sint eaque quasi expedita!
                     Consectetur ipsam accusantium harum odio qui possimus repudiandae repellat, ipsum, veritatis, veniam error ratione in tempora unde! Hic nisi maiores corporis rerum nobis expedita delectus, ipsum unde sunt at esse ab aut facere a exercitationem praesentium. Ipsum consectetur aperiam officia quod. Expedita quasi numquam iusto ipsa? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum voluptates eius eos voluptatum nesciunt iure cum labore</p>
                </div>

                <button 
                    className='close-modal'
                    onClick={toggleModal}
                >
                    CLOSE
                </button>

            </div>
        </div>
    )}

    </>
  )
}

export default Card



