import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractivePath5.scss';

library.add(fas, fab, far);

class InteractivePath4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actualItem: 0,
      countItem: 0,
      openGlobe: false
    }
  }

  showItems = () => {
    const { dataPage } = this.props;
    const ITEM = dataPage.multimedia.map( (item, i) => {
      return(
        <div className = 'circleItems' key = { i } style = { { 'top': item.pos.top, 'left': item.pos.left } }>
          <button className = { 'circleButton ' + ( i !== 0 ? 'disabledGray' : '')} id = { i } onClick = { this.enableItem }>
            <img alt = '' className = '' id = { i } src = { item.urlImgBtn }/>
          </button>
        </div>
      );
    } );
    return ITEM;
  }

  enableItem = (e) => {
    const { multimedia } = this.props.dataPage;
    e.preventDefault();
    const IDITEM = e.currentTarget.id;
    let idItem = parseInt(IDITEM);

    this.setState({ actualItem : idItem });
    document.getElementById('trash-' + idItem).classList.remove('dNone');

    if (idItem < multimedia.length - 1) {
      let nextItem = document.getElementById(idItem + 1);
      nextItem.classList.remove('disabledGray');
      
      this.setState({ countItem: this.state.countItem + 1 });
    } else {
      
      this.setState({ countItem: this.state.countItem + 1 });
      setTimeout(() => {
        this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
        this.props.setModal(true); // MUESTRA EL MODAL
      }, 3000);
    }

    if (this.state.countItem === multimedia.length - 1) {
      this.setState({ countItem: multimedia.length });
    }

    this.showGlobe();
  }

  showGlobe = () => {
    this.setState({
      openGlobe: !this.state.openGlobe
    });
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER style = {{ 'marginTop': 40, 'marginLeft': -480 }}
  hideModal = () => { this.showGlobe(); }

  render() {
    const { multimedia } = this.props.dataPage;

    const style = {
      backgroundImage: 'url(' + this.props.dataPage.background.bg + ')',
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    return (
      <div className = 'InteractivePath5' style = {{ ...style }}>
        { this.showItems() }
        <div className = 'bgItemGlobe'>
        {
          multimedia.map( (item, i) => {
            return(
              <div key={i} id={'trash-' + i} className = { 'itemGlobe dF-C-cs animated fadeIn dNone' } style = {{ 'borderColor': item.itemInfo.color, 'top': item.itemInfo.posGlobe.posY, 'left': item.itemInfo.posGlobe.posX }}>
                {
                  item.itemInfo.title && <h4 className = 'mB-05' dangerouslySetInnerHTML = {{ __html: item.itemInfo.title }}></h4>
                }

                {
                  item.itemInfo.text && <p className = 'tCenter' dangerouslySetInnerHTML = {{ __html: item.itemInfo.text }}></p>
                }

                {
                  item.itemInfo.img && <img alt = '' className = '' src = { item.itemInfo.img }/>
                }
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default InteractivePath4;
