import React, { useState } from 'react'

const API_KEY = 'YoFYWRwlNXxsHlwbWWvCp9GGOQ1ysYuln3zNRX1SOxRX7DhItt7Q10FC';

const Yoga = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchYogaImage = async () => {
        setLoading(true);
        setError('');
        setImageUrl('');

        try {
            const response = await fetch ('https://api.pexels.com/v1/search?query=yoga&per_page=50', {
                headers: {
                    Authorization: API_KEY,
                },
            });

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            console.log('Fetched data:', data);

            const randomIndex = Math.floor(Math.random() * data.photos.length);
            setImageUrl(data.photos[randomIndex].src.large);
        } catch (error) {
            console.error('Error fetching yoga image:', error);
            setError('Failed to fetch yoga image. Please check API key or internet.');
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">🧘‍♀️ Random Yoga Image</h1>
      <button
        onClick={fetchYogaImage}
        className="bg-purple-600 hover:bg-purple-700 font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        {loading ? 'Loading...' : 'Show Yoga Image'}
      </button>

      {error && <p className='text-red-500 mt-4'> {error} </p>}

      {imageUrl && !loading && (
        <img
          src={imageUrl}
          alt="Yoga Pose"
          className="mt-6 max-w-md rounded-lg shadow-lg border-2 border-purple-300"
        />
      )}
    </div>
  );
}

export default Yoga;