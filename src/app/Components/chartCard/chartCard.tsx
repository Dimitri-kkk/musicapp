import Link from "next/link";
import Image from "next/image";
import styles from "./chartCard.module.css"

interface ChartProps {
    id?: string;
    image?: string;
    title?: string;
    src: string;
}

  const ChartCard = ({ id, title, src }: ChartProps) => {
    return (
      <Link className={styles.main} href={`/charts/${id}`}>
        <div className={styles.chartContainer}>
          <div className={styles.chartImage}>
            <Image
              src={src} 
              alt={title || 'Chart Image'} 
              width={200} 
              height={200} 
            />
          </div>
          <span>{title}</span>
        </div>
      </Link>
    );
  }
  
  export default ChartCard;