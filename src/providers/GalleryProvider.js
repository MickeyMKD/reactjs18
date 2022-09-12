import { createContext } from "react";

export const GalleryContext = createContext(null)

export const GalleryProvider = ({children}) => {

    const name = "Neven"

    // returns state that can be accessed by child components
    return (
        <GalleryContext.Provider value={name}>
            {children}
        </GalleryContext.Provider>
    )
}


{/* <div>
    // everthing inside is a children and can be accessed through props.children
    <p></p>
</div> */}

