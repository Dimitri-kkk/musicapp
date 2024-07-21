import Link from "next/link";
import Image from "next/image";
import styles from "./chartCard.module.css"

interface ChartProps {
    id?: string;
    image?: string;
    title?: string;
    src: string
  }

  // Gets fetched data from back-end server like image url, title and songs, but since we dont have back-server yet, I'm gonna use imaginary "/charts/"
  const ChartCard: React.FC<ChartProps> = ({ id, image, title, src }) => {
    return (
      <Link className={styles.main} href={`/charts/${id}`}>
        <div className={styles.chartImage}>
          <Image
            src={src} 
            alt={title || 'Chart Image'} 
            width={200} 
            height={200} 
          />
          </div>
          <h1>Chart title</h1>
      </Link>
    );
  }
  // H1 component has hard-coded "Chart title", but I will change it and pass it as a prop element when we can fetch the actual data from the server
  export default ChartCard;