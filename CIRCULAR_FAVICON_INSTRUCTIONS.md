# Circular Favicon Instructions

## Creating a Circular Favicon

To make your Project Soch favicon circular, you'll need to create a modified version of your logo:

### Option 1: Manual Creation (Recommended)
1. **Open your logo** (`public/images/logo.png`) in an image editor (Photoshop, GIMP, Canva, etc.)
2. **Create a circular crop**:
   - Make the canvas square (e.g., 512x512 pixels)
   - Add a circular mask or crop the logo to fit in a circle
   - Ensure the main elements (orange figure, star, bars) are visible within the circle
3. **Export as PNG** with transparency
4. **Save as** `public/images/logo-circle.png`
5. **Copy for favicon**: `cp public/images/logo-circle.png public/favicon-circle.ico`

### Option 2: Online Tools
Use online favicon generators:
- **Favicon.io** (https://favicon.io/)
- **RealFaviconGenerator** (https://realfavicongenerator.net/)
- Upload your logo and select "circular" or "rounded" options

### Option 3: CSS Circular Effect
For web display, we can make favicons appear circular using CSS (limited browser support):

```css
link[rel="icon"] {
  border-radius: 50%;
}
```

### Recommended Specifications:
- **Size**: 512x512 pixels (will be scaled down automatically)
- **Format**: PNG with transparent background
- **Content**: Logo centered within a circular boundary
- **Background**: Transparent or white

### File Structure After Creation:
```
public/
  images/
    logo.png          ← Original square logo
    logo-circle.png   ← New circular version
  favicon.ico         ← Current favicon
  favicon-circle.ico  ← New circular favicon
```

## Next Steps:
1. Create the circular version of your logo
2. Save it as `public/images/logo-circle.png`
3. Let me know when it's ready, and I'll update the HTML references
