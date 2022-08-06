import React, {useState} from "react"

export default function Filter(){

 //update my 'filter' everytime that I click on the category, I need to put a value in my div and them do the event target value

 let [genreFilter, setGenreFilter] = useState('all')

 function handleGenreFilterClick(event) {
     setGenreFilter(event.target.textContent.toLowerCase())
 }


    return(
        <div className='eventContainerCategories'>
                <div className="eventCategory">
                    <img src="https://img.icons8.com/small/500/000000/music.png" />
                    <div onClick={handleGenreFilterClick} >Music</div>
                </div>
                <div className="eventCategory">
                    <img src="https://img.icons8.com/ios/500/000000/football2--v1.png" />
                    <div onClick={handleGenreFilterClick} >Sports</div>
                </div>
                <div className="eventCategory">
                    <img src="https://img.icons8.com/ios/500/000000/movie-projector.png" />
                    <div onClick={handleGenreFilterClick} >Theater</div>
                </div>
                <div className="eventCategory">
                    <img src="https://img.icons8.com/ios/500/000000/kiss-panda--v1.png" />
                    <div onClick={handleGenreFilterClick} >Kids</div>
                </div>
            </div>
    )
}