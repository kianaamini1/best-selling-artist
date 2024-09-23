


const ArtistDetails = ({ artist }) => {
  return (
    <div className='artist-container'>
      <img src={artist.photo_url} alt={artist.name} className='artist-image' />
      <div className='artist-info'>
      <h2>{artist.name}</h2>
      <p>Country: {artist.country}</p>
      <p>Years Active: {artist.years_active}</p>
      </div>
    </div>
  );
};


 

export default ArtistDetails;
