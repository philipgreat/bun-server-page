import styles from './Share.css'
export default function App(props){
    
    return <div className={styles.text}>{JSON.stringify(props)}</div>

}