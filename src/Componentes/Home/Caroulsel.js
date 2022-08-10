import React from 'react'

export default function Caroulsel() {
    const bannerSapatosFemininos = 'https://images-na.ssl-images-amazon.com/images/G/32/Moda/2020/AltoVerao/LojaCalcados/731_ss21_banner-header_calcados_desktop_1800x500.jpg'
  const bannerSapatosMasculinos = 'https://democrata.vteximg.com.br/arquivos/ids/165413/banner-categoria-social-desktop-1712x360px%20copy.jpg?v=637619461946970000'  
  const bannerMasculino = 'https://siberian.vteximg.com.br/arquivos/ids/180866/BANNER_MASCULINO_MOMENTOS_DESK_01.jpg?v=637895139985330000'  
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://images.tcdn.com.br/img/img_prod/436693/1569536425_banner_09.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/63ab4091394603.5e30aa504dfab.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://images.tcdn.com.br/img/img_prod/790376/1607111475_tn-banner-desktop.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={bannerMasculino} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={bannerSapatosMasculinos} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={bannerSapatosFemininos} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}
