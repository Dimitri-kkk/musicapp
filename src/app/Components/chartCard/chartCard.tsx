import Link from "next/link";
import Image from "next/image";

interface ChartProps {
    id: string;
    image: string;
    title?: string;
  }

  // Gets fetched data from back-end server like image url, title and songs, but since we dont have back-server yet, I'm gonna use imaginary "/charts/"
  const ChartCard: React.FC<ChartProps> = ({ id, image, title }) => {
    return (
      <Link href={`/charts/${id}`}>
        <a style={{}}>
          <Image 
            src={image} 
            alt={title || 'Chart Image'} 
            width={200} 
            height={200} 
          />
        </a>
      </Link>
    );
  }
  
  export default ChartCard;