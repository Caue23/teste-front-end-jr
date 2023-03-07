import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import styles from './CarouselMarcas.module.scss';


const empresas = [
  { ID: 1, photo: '/images/vtex.png' },
  { ID: 2, photo: '/images/vtex.png' },
  { ID: 3, photo: '/images/vtex.png' },
  { ID: 4, photo: '/images/vtex.png' },
  { ID: 5, photo: '/images/vtex.png' },
  { ID: 6, photo: '/images/vtex.png' },
  { ID: 7, photo: '/images/vtex.png' },
]


export default function Marcas() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  function getMarcas() {
    return empresas.map((empresa) => {
      return (
        <div >
          <section className={styles.groupMarcas}>
            <a href="#"><img src={empresa.photo} /></a>
          </section>
        </div>
      )
    })
  };
  return (
    <div className={styles.containerMarcas}>
      <h1>Navegue por marcas</h1>
      <ReactSimplyCarousel

        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            border: 'none',
            background: '#ffffff',
            borderRadius: '50%',
            color: '#0080BF',
            cursor: 'pointer',
            fontSize: '60px',
            lineHeight: 1,
            height: 30,
            textAlign: 'center',
            width: 30,

          },
          children: <span>{`>`}</span>,
        }}

        responsiveProps={[
          {
            itemsToShow: 5,
            itemsToScroll: 2,
            width: 1366,
            height: 500,
          },
        ]}
        speed={1200}
        easing="ease"
      >
        {getMarcas()}

      </ReactSimplyCarousel>
    </div>
  )
}