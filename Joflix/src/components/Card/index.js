import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import icoFavorite from './favorite.png';
import icoUnFavorite from './unfavorite.png';
import { useFavoritesContext } from '../../contexts/Favorites';

function Card({id}){

const{ favorite, addFavorite} = useFavoritesContext()
const isFavorite = favorite.some((fav)=> fav.id === id)
const icone = isFavorite ? icoUnFavorite : icoFavorite



    return(
        <section className={styles.card}>
            <Link to={`/Watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" 
                className={styles.capa}/>
            </Link>
            <figure className={styles.icon}>
                <img 
                src={icone} 
                alt='favoritar'
                onClick={()=>addFavorite({id})}
                />

            </figure>

        </section>

    );
}
  export default Card;