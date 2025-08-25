# Tab Bar Icons

The application uses custom icons from Figma for the tab bar. Below are the links to the icon assets:

## Icon Links

### Home Icons
- **Inactive**: https://figma.com/design/1MThD2mdOgcapUtp5WQXYy/E-commerce-Application--Copy-?node-id=246-2289&t=t5RYo5ksNXRwvyp3-4
- **Active**: https://figma.com/design/1MThD2mdOgcapUtp5WQXYy/E-commerce-Application--Copy-?node-id=246-2290&t=t5RYo5ksNXRwvyp3-4

### Shop Icons  
- **Inactive**: https://figma.com/design/1MThD2mdOgcapUtp5WQXYy/E-commerce-Application--Copy-?node-id=80-57&t=t5RYo5ksNXRwvyp3-4
- **Active**: https://figma.com/design/1MThD2mdOgcapUtp5WQXYy/E-commerce-Application--Copy-?node-id=80-53&t=t5RYo5ksNXRwvyp3-4

### Bag Icons
- **Inactive**: https://figma.com/design/1MThD2mdOgcapUtp5WQXYy/E-commerce-Application--Copy-?node-id=80-58&t=t5RYo5ksNXRwvyp3-4
- **Active**: https://figma.com/design/1MThD2mdOgcapUtp5WQXYy/E-commerce-Application--Copy-?node-id=80-54&t=t5RYo5ksNXRwvyp3-4

### Favorites Icons
- **Inactive**: https://figma.com/design/1MThD2mdOgcapUtp5WQXYy/E-commerce-Application--Copy-?node-id=80-59&t=t5RYo5ksNXRwvyp3-4
- **Active**: https://figma.com/design/1MThD2mdOgcapUtp5WQXYy/E-commerce-Application--Copy-?node-id=80-55&t=t5RYo5ksNXRwvyp3-4

### Profile Icons
- **Inactive**: https://figma.com/design/1MThD2mdOgcapUtp5WQXYy/E-commerce-Application--Copy-?node-id=80-60&t=t5RYo5ksNXRwvyp3-4
- **Active**: https://figma.com/design/1MThD2mdOgcapUtp5WQXYy/E-commerce-Application--Copy-?node-id=80-56&t=t5RYo5ksNXRwvyp3-4

## How to Use Custom Icons

1. **Download Icons from Figma**:
   - Open each Figma link
   - Export the icons as PNG or SVG files
   - Save them in `assets/icons/tabbar/` directory

2. **Update Icon Implementation**:
   - Replace the current Ionicons/MaterialCommunityIcons with Image components
   - Use the downloaded icon files as source
   - Implement proper focused/unfocused states

3. **File Naming Convention**:
   ```
   assets/icons/tabbar/
   ├── home-active.png
   ├── home-inactive.png
   ├── shop-active.png
   ├── shop-inactive.png
   ├── bag-active.png
   ├── bag-inactive.png
   ├── favorites-active.png
   ├── favorites-inactive.png
   ├── profile-active.png
   └── profile-inactive.png
   ```

## Current Implementation

Currently using vector icons as fallbacks:
- Home: Ionicons "home"
- Shop: Feather "shopping-cart" 
- Bag: MaterialCommunityIcons "shopping"
- Favorites: Ionicons "heart"
- Profile: Ionicons "person"

To implement custom icons, update the `_layout.tsx` file to use Image components instead of vector icons.
