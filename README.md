

# Image Gallery Pagination

This project is a simple React application that displays a gallery of images with a header and pagination. It uses [Swiper](https://swiperjs.com/) for the carousel functionality and [Axios](https://axios-http.com/) for fetching images from an API.

## Features

- **Image Gallery**: Shows a grid of images that can be paginated.
- **Pagination**: Load more images on button click.
- **Responsive Design**: Adapts to different screen sizes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework.
- **Swiper**: Modern touch slider with hardware-accelerated transitions.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/image-gallery.git
   ```

2. Navigate to the project directory:

   ```bash
   cd image-gallery
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Components

- **App**: Main component that renders `Navbar`, `ImageGallery`, and `Footer`.
- **Navbar**: Navigation bar with a search input and menu items.
- **Carousel**: Displays a set of images in a sliding carousel.
- **ImageGallery**: Displays a grid of images with a "Load More" button for pagination.
- **Pagination**: Button to load more images.

## API

The application fetches images from the [Picsum Photos API](https://picsum.photos/v2/list?page=2&limit=100).

## WEBSITE
Visit this [link](https://a-d-me-assignment-nine.vercel.app/) to get a live overview.

---
