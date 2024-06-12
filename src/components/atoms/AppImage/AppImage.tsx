import Image from 'next/image';
import type { AppImageProps } from './AppImage.type';

const AppImage = ({ src, alt, className, ...props }: AppImageProps) => {
  return <Image className={className} src={src} alt={alt} {...props} />;
};

export default AppImage;
