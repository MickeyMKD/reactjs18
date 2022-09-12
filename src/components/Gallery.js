import { useContext } from "react"
import { GalleryContext } from "../providers/GalleryProvider"

export const Gallery = () => {

    const {photos , deleteImage} = useContext(GalleryContext)
    
    // delete an image on click ( deleteImage )

    return (
        <div>
            {/* <pre>{JSON.stringify(photos, null, 2)}</pre> */}

            {photos.map( photo => (
                <div key={photo.id} style={{display:"inline-block"}}>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                </div>
            ))}
        </div>
    )
}