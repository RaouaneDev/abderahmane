import React from 'react'
import Image from '../../assets/image1.jpg'

const Equipe = () => {
  return (
    <div className='equipe m-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card m-2'>
                    <img src={Image} className="img-fluid" alt="Res"/>       
                        <h3 className='card-title fw-bold' >Elbelghiti Abderahmane</h3>
                        <p >Comptable</p>
                        <p className='p-2'>une bonne tenue de la comptabilité et une gestion optimisée sont les garanties de réussite et de pérennité pour une entreprise</p>
                    </div>
             </div>
             <div className='col-md-3'>
                    <div className='card m-2'>
                    <img src={Image} className="img-fluid" alt="Res"/>       
                        <h3 className='card-title fw-bold' >Elbelghiti Abderahmane</h3>
                        <p >Comptable</p>
                        <p className='p-2'>une bonne tenue de la comptabilité et une gestion optimisée sont les garanties de réussite et de pérennité pour une entreprise</p>
                    </div>
             </div>
             <div className='col-md-3'>
                    <div className='card m-2'>
                    <img src={Image} className="img-fluid" alt="Res"/>       
                        <h3 className='card-title fw-bold' >Elbelghiti Abderahmane</h3>
                        <p >Comptable</p>
                        <p className='p-2'>une bonne tenue de la comptabilité et une gestion optimisée sont les garanties de réussite et de pérennité pour une entreprise</p>
                    </div>
             </div>
             <div className='col-md-3'>
                    <div className='card m-2'>
                    <img src={Image} className="img-fluid" alt="Res"/>       
                        <h3 className='card-title fw-bold' >Elbelghiti Abderahmane</h3>
                        <p >Comptable</p>
                        <p className='p-2'>une bonne tenue de la comptabilité et une gestion optimisée sont les garanties de réussite et de pérennité pour une entreprise</p>
                    </div>
             </div>
            </div>
        </div>

    </div>
  )
}

export default Equipe;