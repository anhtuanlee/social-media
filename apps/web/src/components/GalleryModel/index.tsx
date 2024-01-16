import PictureGrid from '@/containers/Gallery';
import { cn } from '@/utils';
import { global } from '@/types/global';

function GalleryModel({
  data,
  className,
}: {
  data: global.TDataBlob[] | string[];
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <PictureGrid images={data} />
    </div>
  );
}

export default GalleryModel;
