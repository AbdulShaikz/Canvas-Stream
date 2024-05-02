import styles from './index.module.css';
import {COLORS} from '@/constants';

const Palette = () => {

    const updateBrushSize = (e) => {};

    return (
        <div className={styles.paletteContainer}>
            <div className={styles.paletteItem}>
                <h4 className={styles.paletteText}>Stroke Color</h4>
                <div className={styles.itemContainer}>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.BLUE}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.BLACK}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.BROWN}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.GREEN}}> </div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.ORANGE}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.RED}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.WHITE}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.YELLOW}}></div>
                </div>
            </div>
            <div className={styles.paletteItem}>
                <h4 className={styles.paletteText}>Brush Size</h4>
                <div className={styles.itemContainer}>
                    <input type='range' min={1} step={1} onChange={updateBrushSize}/>
                </div>
            </div>
        </div>
    );
}

export default Palette;