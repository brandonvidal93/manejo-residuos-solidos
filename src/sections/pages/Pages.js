import React, { Component } from 'react';
// import StartDrop from '../../components/DnDStart/dropBoard';
// import StartDrag from '../../components/DnDStart/dragButton';
import Accordion1 from '../../components/Accordion1';
import DnDCircle1 from '../../components/DnDCircle1/DnDCircle1';
import DnDCircle2 from '../../components/DnDCircle2/DnDCircle2';
import DnDCircle3 from '../../components/DnDCircle3/DnDCircle3';
import DnDLabel1 from '../../components/DnDLabel1/DnDLabel1';
import DnDIcon1 from '../../components/DnDIcon1/DnDIcon1';
import DnDSwipe1 from '../../components/DnDSwipe1/DnDSwipe1';
import Instruction from '../../components/Instruction';
import InteractiveAudio1 from '../../components/InteractiveAudio1/InteractiveAudio1';
import InteractiveFlip1 from '../../components/InteractiveFlip1';
import InteractivePath1 from '../../components/InteractivePath1';
import InteractivePath2 from '../../components/InteractivePath2';
import InteractivePath3 from '../../components/InteractivePath3';
import InteractivePath4 from '../../components/InteractivePath4';
import InteractivePath5 from '../../components/InteractivePath5';
import InteractiveSubtitle from '../../components/InteractiveSubtitle';
import ModalCircle1 from '../../components/ModalCircle1';
import ModalCircle2 from '../../components/ModalCircle2';
import ModalCircle3 from '../../components/ModalCircle3';
import ModalVideo1 from '../../components/ModalVideo1';
import ModalGallery1 from '../../components/ModalGallery1';
import ModalGallery2 from '../../components/ModalGallery2';
import Pyramid1 from '../../components/Pyramid1';
import Quiz1 from '../../components/Quiz1';
import SlideDot1 from '../../components/SlideDot1';
import SlideLR1 from '../../components/SlideLR1';
import SlideLR2 from '../../components/SlideLR2';
import SlideUpDown from '../../components/SlideUpDown';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Pages.scss';

library.add(fas, fab, far);

class Cover extends Component {
  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  startCourse = (e) => {
    const target = e.currentTarget.id;

    this.props.startCourse(target);
  }

  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    const styleBtn = {
      backgroundImage: 'url(' + dataPage.background.bgBtn + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '200px',
      height: '44px'
    };

    return (
      <div className={ (dataPage.type) + ' pL-4 animated fadeIn' } style = { style }>
        <div className="c-7 dF-C-cs mL-2">
          {
            dataPage.logoCourse && <img
              alt = 'Imagen Corporativa'
              className = 'imageLogo mT-7 mB-2'
              src = { dataPage.logoCourse }/>
          }
          {
            dataPage.title && <h1 className = 'mT-2 mB-1 F3' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1>
          }
          {
            dataPage.subTitle && <h3 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.subTitle }}></h3>
          }
          {
            dataPage.module && <h3 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.module }}></h3>
          }
          {
            dataPage.courseName && <p className = 'mB-2 texto2' dangerouslySetInnerHTML = {{ __html: dataPage.courseName }}></p>
          }

          <button
            className = 'buttonQuiz pL-2 pR-2'
            onClick = { this.startCourse }
            id = { 'btnIniciar' }
            style = { styleBtn }
            >
              Iniciar
          </button>
        </div>

      </div>
    );
  }
}

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 0,
      showModal: true
    }
  }

  componentDidMount() {
    document.querySelector('.footer').classList.add('dNone'); // OCULTAR EL FONDO
  }

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  startCourse = e => {
    e.preventDefault();
    this.props.startCourse(e.target.id);
  }

  // MOSTRAR ITEM
  showItem = e => {
    e.preventDefault();

    let numId = parseInt(e.target.id.substring(12, 13));

    this.setState({
      item: numId
    });
  }

  // OCULTAR MODAL
  hideModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });

    document.querySelector('.footer').classList.remove('dNone');
  }

  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.resources.bg + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 430
    }

    return (
      <div className = { 'pageContent'}>
        {
          this.state.showModal ?
          <div className = 'modalInstruction'>
            <div className = 'bgCircle dF-R-cc showModal'>
              <div className = 'boxInfo d-C d-Flex j-C aI-C pT-2 pB-2 pL-2 pR-2'>
                <hr className = 'mB-1 line-5'></hr>
                <p className = 'tCenter blanco mB-1'>
                  Antes de iniciar, te invitamos a hacer el recorrido de navegación dando clic en el siguiente botón.
                </p>
                <button
                  className = 'buttonClose blanco'
                  onClick = { this.hideModal } >
                  Instructivo
                </button>
              </div>
            </div>
          </div> :
          null
        }

        <div className = 'c-10 animated fadeIn'>
          <div className = 'c-5 mB-2'>
            <h1 className = 'mT-4 mL-5 titulo2' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1>
          </div>

          <div className = 'c-10 d-Flex d-C j-E aI-C' style = {{ ...style, 'paddingTop': 40, 'paddingLeft': 0, 'paddingRight': 0, 'paddingBottom': 40 }} >
            <div className = 'boxContent d-Flex d-C j-C aI-C pT-1'>
              {
                (this.state.item !== dataPage.information.length - 1) ?
                dataPage.information.map((item, i) => {
                  return(
                    <div
                      className = { 'd-Flex d-C j-C aI-C animated fadeIn ' + (this.state.item === i ? '' : 'dNone') }
                      key = { i }>
                      {
                        item.img1 ? <img
                          alt = 'Imagen'
                          className = 'mB-1'
                          src = { item.img1 }/> : null
                      }
                      {
                        item.text1 ? <p className = 'tCenter c-7 mB-025' dangerouslySetInnerHTML = {{ __html: item.text1 }}></p> : null
                      }
                      {
                        item.img2 ? <img
                          alt = 'Imagen'
                          className = 'mB-025'
                          src = { item.img2 }/> : null
                      }
                    </div>
                  )
                }) :
                <div className = { 'c-10 d-Flex j-C aI-C' }>
                  <button
                    className = 'buttonStart'
                    id = 'btnInstruction'
                    onClick = { this.startCourse }>
                    Continuar
                  </button>
                </div>
              }
            </div>
            <div className = 'buttonBoxInst d-Flex j-C aI-C'>
              {
                dataPage.information.map((button, i) => {
                  return(
                    <div
                      className = { 'btnItemInst ' + (this.state.item === i ? 'btnActive': '') }
                      id = { 'btnItemInst-' + i }
                      key = { i }
                      onClick = { this.showItem } >
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        
        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page2 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    checkEndActivity(2, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent animated fadeIn'}>
        <div className = 'c-10'>
          <div className = 'mL-5 mT-6'> 
            <img alt = 'Imagen' className = 'imageNPC pAbs' src = { dataPage.resources.img1 }/>
            {
              dataPage.title ? <h1 className = 'c-7 mB-05 F3' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1> : null
            }
            {
              dataPage.text ? <p className = 'c-55 mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'mB-2 mL-5'>
            <InteractiveSubtitle dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page3 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    checkEndActivity(3, end);
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo1 dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }
        <div className = 'c-10 animated fadeIn d-Flex d-C j-C aI-S'>
          <div className = 'headerTitle c-10 d-Flex d-C j-C aI-S mB-1 mL-6 mT-7'>
            <h2
              className = 'F2 mB-1'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h2>
            {
              dataPage.text && <p className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>
            }
          </div>
          <div className = 'd-Flex c-10 j-C aI-C'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page4 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    checkEndActivity(4, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn d-Flex aI-S j-C pT-7'>
          <div className = 'mL-5 c-35 mT-4'> 
            {
              dataPage.title ? <h2 className = 'F2 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-4 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <InteractivePath1 dataPage = { dataPage } isEnded = { this.isEnded } />
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page5 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    checkEndActivity(5, end);
  }

  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '370px'
    };

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn'>
          <div className = 'c-10 animated fadeIn d-Flex j-S aI-C pT-7'>
            <div className = 'mL-5 c-35 mT-4'> 
              {
                dataPage.title ? <h2 className = 'mB-1 F2' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
              }
              {
                dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
              }
            </div>
            <div className = 'c-5 d-Flex j-C aI-S mT-1' style = {style}>
              <ModalCircle1 dataPage = { dataPage } isEnded = { this.isEnded } />
            </div>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page6 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(6, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-5 mT-7 c-75 mT-025 mR-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 F2' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-7'>
            <SlideUpDown multimedia = { dataPage.multimedia } handleClick = { this.handleClick } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page7 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    checkEndActivity(7, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn d-Flex aI-C j-S pT-7'>
          <div className = 'mL-5 c-35'> 
            {
              dataPage.title ? <h2 className = 'mB-1 F2' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-3 mT-2'>
            <SlideLR1 multimedia = { dataPage.multimedia } handleClick = { this.handleClick } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page8 extends Component {
  state = {
    openModal: false,
    openModal2: false,
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  // FUNCION PARA ABRIR MODAL
  showModal2 = () => {
    this.setState({
      openModal2: !this.state.openModal2
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    checkEndActivity(8, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalGallery2 dataPage = { dataPage.multimedia.gallery } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }
        { this.state.openModal2 !== false ? <ModalGallery2 dataPage = { dataPage.multimedia.gallery2 } showModal={ this.showModal2 } isEnded = { this.isEnded } /> : null }

        <div className = 'c-10 animated fadeIn d-Flex aI-C j-S pT-7 mT-1'>
          <div className = 'mL-5 c-35'>
            {
              dataPage.title ? <h2 className = 'F2 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'c-7 d-Flex j-C aI-S'>
            <button className = { 'buttonVideo' } onClick = { this.showModal }>
              <img
                alt = 'Imagen'
                className = 'c-85'
                src = { dataPage.multimedia.buttonModal.imgBg1 }/>
            </button>

            <button className = { 'buttonVideo' } onClick = { this.showModal2 }>
              <img
                alt = 'Imagen'
                className = 'c-85'
                src = { dataPage.multimedia.buttonModal.imgBg2 }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page9 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(9, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn d-Flex d-C j-C aI-S'>
          <div className = 'headerTitle c-10 d-Flex d-C j-C aI-S mB-1 mL-6 mT-7'>
            {
              dataPage.title ? <h2 className = 'mB-1 F2' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'd-Flex j-C aI-S mL-5'>
            <DnDSwipe1 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page10 extends Component {
  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 d-Flex d-C j-C aI-S animated fadeIn'>
          <div className = 'mL-6 c-6 mT-6 mR-3'> 
            {
              dataPage.title ? <h2 className = 'textHeader F2 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'c-3 d-Flex j-C aI-S c-10'>
            <img
                alt = 'Imagen'
                className = ''
                src = { dataPage.img }/>
          </div>
        </div>
      </div>
    );
  }
}

class Page11 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(11, end);
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo1 dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }
        <div className = 'c-10 animated fadeIn d-Flex d-C j-C aI-S'>
          <div className = 'headerTitle c-10 d-Flex d-C j-C aI-S mB-1 mL-6 mT-7'>
            <h2
              className = 'F2 mB-1'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h2>
            {
              dataPage.text && <p className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>
            }
          </div>
          <div className = 'd-Flex c-10 j-C aI-C'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page12 extends Component {
  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 d-Flex j-C aI-S animated fadeIn'>
          <div className = 'mL-6 c-35 mT-6 mR-3'> 
            {
              dataPage.title ? <h2 className = 'textHeader F2 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'c-5 d-Flex j-C aI-S mT-7'>
            <img
                alt = 'Imagen'
                className = ''
                src = { dataPage.img }/>
          </div>
        </div>
      </div>
    );
  }
}

class Page13 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(13, end);
  }

  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '842px',
      height: '272px',
    };

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn d-Flex d-C aI-S j-C pT-7 mT-1'>
          <div className = 'mL-5 c-7'> 
            {
              dataPage.title ? <h2 className = 'mB-1 F2' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'd-Flex j-C aI-C mL-5' style={style}>
            <ModalCircle2 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page14 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    checkEndActivity(14, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 d-Flex j-C aI-S animated fadeIn pT-2'>
          <div className = 'mL-6 c-35 mT-7 mR-3'>
            {
              dataPage.title ? <h2 className = 'mB-1 F2' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'c-5 d-Flex j-C aI-S mT-5'>
            <InteractivePath4 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page15 extends Component {
  state = {
    openModal: false,
  }

  setModal = (open) => {
    this.setState({ openModal: open });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    checkEndActivity(15, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn d-Flex d-C aI-S j-S pT-7'>
          <div className = 'mL-5 c-5'> 
            {
              dataPage.title ? <h2 className = 'mB-1 F2' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-5'>
            <InteractiveSubtitle dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />
          </div>

          <div className = 'mL-6 pL-5'>
            <SlideLR2 multimedia = { dataPage.multimedia } handleClick = { this.handleClick } isEnded = { this.isEnded } setModal={this.setModal} />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />

        { this.state.openModal && <ModalCircle3 dataPage = { dataPage.multimedia } setModal={this.setModal} />}
      </div>
    );
  }
}

class Page16 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(16, end);
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo1 dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn c-10 d-Flex j-Bt aI-C'>
          <div className = 'mL-7 c-3 mT-3 mR-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'd-Flex c-45 j-C aI-C mT-2'>
            <button className = 'buttonVideo mR-6' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page17 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    checkEndActivity(17, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn d-Flex d-C j-C aI-S'>
          <div className = 'headerTitle c-75 d-Flex d-C j-C aI-S mL-5 mT-7'>
            {
              dataPage.title ? <h2 className = 'mB-1 F2' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-3'>
            <DnDLabel1 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page18 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(18, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-10 mT-025 mR-2 mB-1'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-6'>
            <Accordion1 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page19 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(19, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn c-10 d-Flex j-Bt aI-C'>
          <div className = 'mL-7 c-4 mR-2 mT-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'd-Flex c-45 j-C aI-C'>
            <ModalCircle2 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page20 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(20, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-75 mT-025 mR-2 mB-1'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = ''>
            <SlideDot1 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page21 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(11, end);
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo1 dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }
        <div className = 'c-10 animated fadeIn d-Flex d-C j-C aI-S'>
          <div className = 'headerTitle c-10 d-Flex d-C j-C aI-S mB-1 mL-6 mT-7'>
            <h2
              className = 'F2 mB-1'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h2>
            {
              dataPage.text && <p className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>
            }
          </div>
          <div className = 'd-Flex c-10 j-C aI-C'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page22 extends Component {
  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL QUIZ
  startQuiz = e => {
    e.preventDefault();
    this.props.startQuiz(e.target.id);
  }

  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    return (
      <div className = {'pageContent'} style = { style }>
        <div className = 'c-10 d-Flex j-S aI-S animated fadeIn pT-5 pL-2'>
          <div className = 'mL-7 c-4 mT-6 mR-3 d-Flex d-C j-C aI-C'> 
            {
              dataPage.title ? <h2 className = 'mB-2 F2 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }

            <button
              className = 'buttonQuiz pT-1 pB-1 pL-2 pR-2'
              id = 'btnQuiz'
              onClick = { this.startQuiz }>
              { dataPage.button }
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class Page23 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(23, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn c-10 d-Flex j-C aI-C'>
          <div className = 'mL-7 c-35'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'd-Flex c-45 j-C aI-C'>
            <ModalCircle3 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>  
    );
  }
}

class Page24 extends Component {
  closeCourse = () => {
    // ESTO SOLO SE EJECUTA CUANDO SE INICIA EL SERVIDOR O CUANDO SE ABRE COMO EMERGENTE
    window.parent.parent.close();
  }

  render() {

    const { dataPage, calificacion } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return(
      <div className={ (dataPage.type) + ' animated fadeIn' } style = { style }>
        <div className="c-8 d-Flex d-C j-C aI-C">
          {
            dataPage.message.success.title ? <h1 className = 'mB-1 F2 titulo2 tCenter fw-7' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.title : dataPage.message.error.title }}></h1> : null
          }
          
          {
            dataPage.message.success.module ? <h3 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.module : dataPage.message.error.module }}></h3> : null
          }
          {
            dataPage.message.success.courseName ? <p className = 'c-8 mB-2 tCenter' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.courseName : dataPage.message.error.courseName }}></p> : null
          }
          {
            dataPage.message.success.subTitle ? <h2 className = 'mB-2 F2 tCenter titulo2' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.subTitle : dataPage.message.error.subTitle }}></h2> : null
          }
          {
            dataPage.logoCourse && <img
              alt = 'Imagen Corporativa'
              className = 'mB-2'
              src = { dataPage.logoCourse }/>
          }
          {
            dataPage.buttonEnd ? 
              <h2 
                className = 'blanco tCenter fw-3 buttonEnd' 
                dangerouslySetInnerHTML = {{ __html: dataPage.buttonEnd }}
                onClick = { this.closeCourse }
                style = {{ 'cursor': 'pointer' }} /> : 
              null
          }

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
        </div>

      </div>
    );
  }
}

export {
  Cover, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12, Page13, Page14,
  Page15, Page16, Page17, Page18, Page19, Page20, Page21, Page22, Page23, Page24
};
