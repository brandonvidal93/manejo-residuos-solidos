import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractivePath2.scss';

library.add(fas, fab, far);

class InteractivePath2 extends Component {
  // state
  state = {
    countItems: 0,
  }

  handleClick = (e) => {
    // console.log(e.target.id);

    switch (e.target.id) {
      case 'btnN1':
        document.getElementById('btnPaso1').classList.remove('btnDisabled');
        document.getElementById('btnPaso2').classList.remove('btnDisabled');
        break;
        case 'btnN2':
        document.getElementById('btnPaso3').classList.remove('btnDisabled');
        document.getElementById('btnPaso4').classList.remove('btnDisabled');
        break;
      case 'btnPaso1':
        document.getElementById('btnEducacion1').classList.remove('btnDisabled');
        break;
      case 'btnEducacion1':
        document.getElementById('btnEducacion2').classList.remove('btnDisabled');
        break;
      case 'btnPaso2':
        document.getElementById('btnBolsas1').classList.remove('btnDisabled');
        break;
      case 'btnBolsas1':
        document.getElementById('btnBolsas2').classList.remove('btnDisabled');
        break;
      case 'btnPaso3':
        document.getElementById('btnContenedores1').classList.remove('btnDisabled');
        break;
      case 'btnContenedores1':
        document.getElementById('btnContenedores2').classList.remove('btnDisabled');
        break;
      case 'btnPaso4':
        document.getElementById('btnMetricas1').classList.remove('btnDisabled');
        break;
      case 'btnMetricas1':
        document.getElementById('btnMetricas2').classList.remove('btnDisabled');
        break;
      default:
        break;
    }

    if (this.state.countItems >= 9) {
      this.props.isEnded(true);
    } else {
      this.setState({
        countItems: this.state.countItems + 1,
      });
    }
  }

  render() {
    const { multimedia } = this.props;
    const style = {
      backgroundImage: 'url(' + multimedia.bg + ')',
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '276px'
    };

    // console.log(multimedia);
    return(
      <div className = 'interactivePath2 d-Flex d-C j-S aI-S' style={style}>
        <div className = 'row d-Flex j-S aI-St c-10 mT-1 mL-4'>
          <div className='d-Flex d-C j-C aI-C'>
            {
              multimedia.row1.col1.map((col1, i) => {
                return(
                  <img alt = 'Imagen' className = 'btnItem' id={col1.id} src = { col1.img } onClick={this.handleClick}/>
                )
              })
            }
          </div>
          <div className='d-Flex d-C j-Ar aI-C mL-05 pB-1 pT-025'>
            {
              multimedia.row1.col2.map((col2, i) => {
                return(
                  <img alt = 'Imagen' className = 'btnItem btnDisabled' id={col2.id} src = { col2.img } onClick={this.handleClick}/>
                )
              })
            }
          </div>
          <div className='d-Flex d-C j-Ar aI-C pB-1 pT-025' style={{marginLeft: '1.6rem'}}>
            {
              multimedia.row1.col3.map((col3, i) => {
                return(
                  <img alt = 'Imagen' className = 'btnItem btnDisabled' id={col3.id} src = { col3.img } onClick={this.handleClick}/>
                )
              })
            }
          </div>
          <div className='d-Flex d-C j-Ar aI-C pB-1 pT-025' style={{marginLeft: '1.4rem'}}>
            {
              multimedia.row1.col4.map((col4, i) => {
                return(
                  <img alt = 'Imagen' className = 'btnItem btnDisabled' id={col4.id} src = { col4.img }/>
                )
              })
            }
          </div>
        </div>

        <div className = 'row d-Flex j-S aI-St c-10 mT-1 mL-4'>
          <div className='d-Flex d-C j-C aI-C'>
            {
              multimedia.row2.col1.map((col1, i) => {
                return(
                  <img alt = 'Imagen' className = 'btnItem' id={col1.id} src = { col1.img } onClick={this.handleClick}/>
                )
              })
            }
          </div>
          <div className='d-Flex d-C j-Ar aI-C mL-05 pB-05 pT-05'>
            {
              multimedia.row2.col2.map((col2, i) => {
                return(
                  <img alt = 'Imagen' className = 'btnItem btnDisabled' id={col2.id} src = { col2.img } onClick={this.handleClick}/>
                )
              })
            }
          </div>
          <div className='d-Flex d-C j-Ar aI-C pB-05 pT-05' style={{marginLeft: '1.6rem'}}>
            {
              multimedia.row2.col3.map((col3, i) => {
                return(
                  <img alt = 'Imagen' className = 'btnItem btnDisabled' id={col3.id} src = { col3.img } onClick={this.handleClick}/>
                )
              })
            }
          </div>
          <div className='d-Flex d-C j-Ar aI-C pB-05 pT-05' style={{marginLeft: '1.4rem'}}>
            {
              multimedia.row2.col4.map((col4, i) => {
                return(
                  <img alt = 'Imagen' className = 'btnItem btnDisabled' id={col4.id} src = { col4.img }/>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

}

export default InteractivePath2;