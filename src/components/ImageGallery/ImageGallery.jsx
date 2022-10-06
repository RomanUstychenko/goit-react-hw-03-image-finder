import scss from "./ImageGallery.module.scss"
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({items, onClick}) => 
{
return (
        <ul className={scss.ImageGallery}>
            <ImageGalleryItem
            items={items}
            onClick={onClick}
             />
        </ul>
    )
}     