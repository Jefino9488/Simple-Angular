import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  images: { src: string, alt: string }[] = [];
  currentIndex = 0;

  ngOnInit() {
    this.fetchRandomImages();
  }

  fetchRandomImages() {
    const url = 'https://source.unsplash.com/random/';

    // Fetch random images 3 times
    for (let i = 0; i < 9; i++) {
      axios.get(url, { responseType: 'blob' })
          .then(response => {
            const imageUrl = URL.createObjectURL(response.data);
            this.images.push({
              src: imageUrl,
              alt: 'Random Image'
            });
          })
          .catch(error => {
            console.error('Error fetching random image:', error);
          });
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }
}
