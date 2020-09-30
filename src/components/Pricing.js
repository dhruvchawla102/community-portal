import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Communities</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3></h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                 
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3></h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                 
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3></h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                 
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
