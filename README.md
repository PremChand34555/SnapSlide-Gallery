# SnapSlide - Responsive Image Gallery

SnapSlide is a lightweight, responsive image gallery/slider built with vanilla JavaScript and styled with Tailwind CSS. It features automatic slide transitions, navigation controls, and a clean, modern design.

![SnapSlide Preview]![image](https://github.com/user-attachments/assets/dae6e122-58c9-46b8-9d15-c1f8251855e6)
)

## Features

- **Responsive Design**: Works on all devices and screen sizes
- **Automatic Transitions**: Slides change automatically with configurable timing
- **Navigation Controls**: Previous/Next buttons and indicator dots
- **Play/Pause Control**: Toggle automatic transitions
- **Fullscreen Mode**: View the gallery in fullscreen
- **Touch Support**: Swipe gestures for mobile devices
- **Keyboard Navigation**: Use arrow keys to navigate slides
- **Customizable**: Easy to modify and extend

## Demo

You can view a live demo of SnapSlide [here](#) (Replace with your deployed URL after uploading to GitHub Pages).

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/snapslide.git
   ```

2. Open `index.html` in your browser to view the gallery.

3. To customize the images, edit the `slides` array in `script.js`:
   ```javascript
   const slides = [
       {
           url: 'your-image-url.jpg',
           alt: 'Image description',
           title: 'Image Title'
       },
       // Add more slides as needed
   ];
   ```

4. To change the transition speed, modify the `autoplaySpeed` variable in `script.js`:
   ```javascript
   const autoplaySpeed = 3000; // milliseconds between slides
   ```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) - Icons

## Customization

### Changing Colors

The project uses Tailwind CSS for styling. You can modify colors by changing the color classes in `index.html`:

- Primary color: Replace `blue-600` and `blue-500` classes
- Secondary color: Replace `green-500` and `green-600` classes
- Background: Replace `bg-gray-100` class

### Changing Dimensions

To change the slider height, modify the `.slider-container` style in the `<style>` section of `index.html`:

```css
.slider-container {
    position: relative;
    height: 400px; /* Change this value */
    overflow: hidden;
}
```

## Browser Support

SnapSlide works in all modern browsers:

- Chrome
- Firefox
- Safari
- Edge
- Opera

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Uploading to GitHub

To upload this project to GitHub:

1. Create a new repository on GitHub
2. Initialize git in your local project folder:
   ```bash
   git init
   ```

3. Add all files to git:
   ```bash
   git add .
   ```

4. Commit your changes:
   ```bash
   git commit -m "Initial commit"
   ```

5. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/yourusername/snapslide.git
   ```

6. Push to GitHub:
   ```bash
   git push -u origin main
   ```

7. Optional: Enable GitHub Pages in your repository settings to deploy the site.

## Credits

- Sample images from [Unsplash](https://unsplash.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Built with [Tailwind CSS](https://tailwindcss.com/) 
