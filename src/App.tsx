import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import { Image } from "./types/Image";

const API_KEY = "KIlvdgY8-2uNmXDH759UCWzb4EL_A9v9xoNnDNdCayQ";
const API_URL = "https://api.unsplash.com/search/photos";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [error, setError] = useState<string | null>(null);

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
      <SearchBar
        onSubmit={(query: string) => {
          setQuery(query);
          setImages([]);
          setPage(1);
        }}
      />
      <ImageGallery
        images={images}
        onImageClick={(image) => setSelectedImage(image)}
      />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
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
