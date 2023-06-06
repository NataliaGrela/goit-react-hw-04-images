import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { getImages } from 'api/getImages';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      const newImages = await getImages(page, query);
      setImages(newImages.hits);
      setIsLoading(false);
    };
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async queryInput => {
    setIsLoading(true);
    const newImages = await getImages(1, queryInput);
    setImages(newImages.hits);
    setPage(1);
    setQuery(queryInput);
    setIsLoading(false);
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    const newImages = await getImages(page + 1, query);
    setImages([...images, ...newImages.hits]);
    setPage(page + 1);
    setIsLoading(false);
  };

  const handleClickImage = image => {
    setCurrentImage(image);
    setOpenModal(true);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />

      <ImageGallery
        onClick={handleClickImage}
        images={images}
        page={page}
        query={query}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <Button setPage={handleLoadMore}>Load more</Button>
      )}

      <Modal
        image={currentImage}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default App;
