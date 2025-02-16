function ProfilePicture() {
    const imageUrl = './src/assets/IMG_4461.jpg'

    const handleClick = (e) => e.target.style.display = 'none';

    return(<img onClick={(e) => handleClick(e)} height={400} src={imageUrl}></img>);
}

export default ProfilePicture;