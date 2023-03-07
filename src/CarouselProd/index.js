import { useState,useEffect } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import styles from './Carousel.module.scss';
import Modal from 'react-modal';
import { FiX } from "react-icons/fi";




function ReactSimplyCarouselExample() {
  const [activeSlideIndex] = useState(0);
  const [produ, setProdu] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [isNewTransactionModalOpen, serIsNewTransactionModalOpen] = useState(false);

 
  

  useEffect(() => {
      fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
      .then((data)=>data.json())
      .then((data)=> setProdu(data.products))
  }, [])


  function getLinhas(){
    return produ.map((prod)=>{

      produ[5].price = 3800
      produ[6].price = 4200
      produ[7].price = 5200
      produ[8].price = 14999
      produ[9].price = 10000

      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL' 
      });
      const valores= prod.price
      const percentual = valores * (5/100)
      const parcelas = valores  / 2
      const valorAntigo = valores  + percentual
      const formatted = formatter.format(prod.price);
      const realFormatted = formatter.format(valorAntigo);
      const parcelaFormatted = formatter.format(parcelas);


        return (
            <div className={styles.cardGroup}>
                <section className={styles.card}>
                <img src={prod.photo} alt="..." />
                <h1>{prod.descriptionShort}</h1>
                <h2>{realFormatted}</h2>
                <h3>{formatted}</h3>
                <p>ou 2x de {parcelaFormatted} sem juros</p>
                <a>Frete grátis</a>
                <button onClick={()=> {handleOpenNewTransactionModal(true);setModalData(prod);}}>Comprar</button>
                </section>
            </div>
        )
    })
};
function handleOpenNewTransactionModal(){
  serIsNewTransactionModalOpen(true);
}
function handleCloseNewTransactionModal(){
  serIsNewTransactionModalOpen(false);  
} 
const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL' 
});
const formatted = formatter.format(modalData.price);

  return (
    <div className={styles.groupCard}>
      <ReactSimplyCarousel
        
        activeSlideIndex={activeSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            border: 'none',
            background:'#ffffff',
            borderRadius: '50%',
            color: '#3F3F40',
            cursor: 'pointer',
            fontSize: '60px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            border: 'none',
            background:'#ffffff',
            borderRadius: '50%',
            color: '#3F3F40',
            cursor: 'pointer',
            fontSize: '60px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 2,
            width: 1366,
            height: 500,
          },
        ]}
        speed={1200}
        easing="ease"
      >
        {getLinhas()}

      </ReactSimplyCarousel>
      <Modal
        isOpen={isNewTransactionModalOpen} 
        onRequestClose = {()=>handleCloseNewTransactionModal(true)}
        ariaHideApp={false}
        overlayClassName='react-modal-overlay'
        className={styles.reactModalContent}
      >
        <div className={styles.modalInfo}>
          <img src={modalData.photo} alt="..." />
          <ul>
            <li>
              <h1 className={styles.description}>{modalData.descriptionShort}</h1>
              <text className={styles.price}>{formatted}</text>
              <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
              <a href="#">Veja mais detalhes do produto ></a>
            </li>
          </ul>
          <button type='submit' onClick={handleCloseNewTransactionModal} >
          <FiX />
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ReactSimplyCarouselExample;

