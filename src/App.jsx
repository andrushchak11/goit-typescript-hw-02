import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";

const API_KEY = "KIlvdgY8-2uNmXDH759UCWzb4EL_A9v9xoNnDNdCayQ";
const API_URL = "https://api.unsplash.com/search/photos";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setError(null);
      setLoading(true);
      try {
        const { data } = await axios.get(API_URL, {
          params: { query, page, per_page: 12, client_id: API_KEY },
        });
        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={setQuery} />
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
      {selectedImage && (
        <ImageModal
          isOpen={true}
          onRequestClose={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </>
  );
};

export default App;
