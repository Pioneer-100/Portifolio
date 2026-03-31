# Background Images & Patterns Guide

This portfolio uses a combination of background images and CSS patterns to create visual interest while maintaining a professional appearance.

## Hero Section Background

The hero section uses a stunning space/technology image from Unsplash with an overlay:

**Current Image**: Technology/Space themed background
- Source: Unsplash (https://unsplash.com)
- Features: Blue gradient overlay for better text readability
- Effect: Parallax scrolling (fixed attachment)

### How to Change the Hero Background Image

1. **Using Unsplash (Free)**:
   - Visit https://unsplash.com
   - Search for: "technology", "coding", "workspace", "abstract", etc.
   - Copy the image URL
   - Update in `src/components/Hero/Hero.css`:
   ```css
   background: linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(30, 64, 175, 0.8) 100%),
               url('YOUR_IMAGE_URL_HERE');
   ```

2. **Using Your Own Image**:
   - Place your image in `public/images/` folder
   - Update the URL:
   ```css
   background: linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(30, 64, 175, 0.8) 100%),
               url('/images/your-image.jpg');
   ```

### Recommended Image Specifications
- **Resolution**: 1920x1080 or higher
- **Format**: JPG or WebP (for better performance)
- **File Size**: Under 500KB (optimize for web)
- **Theme**: Technology, workspace, abstract, or professional

## Section Background Patterns

Each section has subtle background patterns for visual depth:

### About Section
- Radial gradients creating soft spotlight effects
- Very subtle (3% opacity) to not distract from content

### Skills Section
- Diagonal stripe pattern
- Creates a subtle texture

### Experience Section
- Grid pattern (50px x 50px)
- Professional and organized look

### Education Section
- Radial gradient overlays
- Soft and academic feel

### Projects Section
- Multiple radial gradients
- Creates depth without being overwhelming

### Blog Section
- Geometric triangle pattern
- Modern and dynamic

### Contact Section
- SVG pattern with plus signs
- Subtle and professional

## Customization Tips

### Adjust Pattern Opacity
Change the opacity values in the rgba() colors:
```css
/* More visible */
rgba(37, 99, 235, 0.08)

/* More subtle */
rgba(37, 99, 235, 0.02)
```

### Change Pattern Colors
Replace the RGB values (37, 99, 235) with your brand colors:
```css
/* Example: Purple theme */
rgba(147, 51, 234, 0.05)
```

### Remove Patterns
Simply remove the `background-image` property to use solid colors:
```css
.section {
  background-color: var(--bg-primary);
  /* Remove or comment out background-image */
}
```

## Suggested Background Images

### Hero Section Alternatives:
1. **Workspace**: https://unsplash.com/s/photos/developer-workspace
2. **Code**: https://unsplash.com/s/photos/code
3. **Abstract Tech**: https://unsplash.com/s/photos/abstract-technology
4. **Minimalist**: https://unsplash.com/s/photos/minimal-gradient

### Free Image Resources:
- **Unsplash**: https://unsplash.com (Free, high-quality)
- **Pexels**: https://pexels.com (Free stock photos)
- **Pixabay**: https://pixabay.com (Free images)
- **Freepik**: https://freepik.com (Free with attribution)

## Performance Optimization

### Image Optimization Tips:
1. **Compress images**: Use tools like TinyPNG or Squoosh
2. **Use WebP format**: Better compression than JPG
3. **Lazy loading**: Images load as user scrolls
4. **Responsive images**: Serve different sizes for different devices

### Example: Optimized Background
```css
.hero {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(30, 64, 175, 0.8) 100%),
              url('hero-mobile.jpg');
}

@media (min-width: 768px) {
  .hero {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(30, 64, 175, 0.8) 100%),
                url('hero-desktop.jpg');
  }
}
```

## Accessibility Considerations

- Always use overlay gradients to ensure text readability
- Maintain sufficient contrast ratios (WCAG AA: 4.5:1 minimum)
- Test with different screen readers
- Provide alternative text for meaningful images

## Browser Compatibility

All background patterns and images used are compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

For older browsers, solid color fallbacks are provided.