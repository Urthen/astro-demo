import {useState} from 'react';

const Likes = () => {
    const [likes, setLikes] = useState(3);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="likes">
            <p>{likes} Likes on this task</p>
            <button onClick={handleLike}>Like</button>
        </div>
    )
}

export default Likes;
