import '../../components/Header/cabeçalho.css'
import principal from '../../assets/img/head.svg'
function Header() {
    return( 
      <>
      <div className="dsmeta-logo-container">
      <img src={principal} alt="DSMeta" />
      <h1>DSMeta</h1>
      <p>
        Desenvolvido por
        <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
      </p>
  </div>
       </> )
    }
  export default Header