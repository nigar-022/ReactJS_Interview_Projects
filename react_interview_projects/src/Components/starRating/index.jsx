import {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import "./style.css"


export default function StarRating({numOfStars = 5}) {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0)

    const handleClick = (getCurrentIndex) => {
        console.log(getCurrentIndex)
        setRating(getCurrentIndex)

    }
    const handleMouseEnter = (getCurrentIndex) => {
        console.log(getCurrentIndex)
        setHover(getCurrentIndex)

    }
    const handleMouseLeave = () => {
       
        setRating(rating)

    }

    return(
        <div className='star-rating'>
            {
                [...Array(numOfStars)].map((_,index) => {
                    index += 1

                    return <FaStar 
                        key={index}
                        className={index <= (hover || rating) ? 'active': 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave = {() => handleMouseLeave()}
                        fontSize={40}
                        
                        
                        />
                    
                })
            }

        </div>
    )

}