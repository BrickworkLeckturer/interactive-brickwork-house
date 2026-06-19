# Interactive Brickwork House - Level 1 City & Guilds NVQ

An interactive 3D web-based learning tool for teaching brickwork construction to Level 1 students.

## Features

- **7 Construction Stages** from ground preparation to roof
- **3D Interactive Visualization** using Three.js
- **Step-by-Step Learning** with detailed educational content
- **Health & Safety Information** at each stage
- **Materials Guide** showing what's used at each stage
- **Mouse Controls** - Rotate, zoom, and pan the 3D view
- **Auto-Rotating View** for presentation
- **Responsive Design** - Works on desktop and tablets

## Project Structure

```
interactive-brickwork-house/
├── index.html           # Main HTML file
├── css/
│   └── styles.css       # Application styling
├── js/
│   ├── app.js           # Main application logic
│   ├── 3dscene.js       # 3D scene setup and geometry
│   └── layers.js        # Layer data and content
└── README.md
```

## Getting Started

### Option 1: View Online
Go to the GitHub repository and enable GitHub Pages to view the app online.

### Option 2: Local File
1. Download all files to a folder
2. Open `index.html` in a web browser
3. Explore the interactive house!

### Option 3: Web Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

Then visit: `http://localhost:8000`

## Controls

- **Left Click + Drag**: Rotate the view
- **Right Click + Drag**: Pan the camera
- **Scroll Wheel**: Zoom in/out
- **Stage Buttons**: Jump to specific construction stage
- **Reset View**: Return to stage 1

## Learning Stages

1. **Ground Preparation** - Site assessment and levelling
2. **Concrete Foundations** - Foundation design and construction
3. **DPC & First Course** - Damp proof course and first bricks
4. **Cavity Wall Build** - Inner leaf construction
5. **First Lift** - Building to 1.2m height
6. **Wall Complete** - Walls up to eaves
7. **Roof Structure** - Roof installation

## City & Guilds Level 1 Coverage

This tool covers key aspects of Level 1 Brickwork NVQ:

- Brick types and selection
- Mortar mixing and application
- Brick bonds and patterns
- Cavity wall construction
- Damp proof courses
- Health and safety on site
- Quality control and inspection
- Building regulations compliance

## Technical Stack

- **Three.js** - 3D graphics library
- **HTML5** - Structure
- **CSS3** - Styling
- **JavaScript (ES6)** - Interactivity and logic

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Future Enhancements

- [ ] Exploded view showing brick placement patterns
- [ ] Cross-section views
- [ ] Interactive quiz system
- [ ] Measurement tools
- [ ] Assessment module
- [ ] Progress tracking
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Animation showing brick laying techniques
- [ ] Scaffold system visualization

## Usage in Education

This tool is designed for:
- **Classroom demonstrations** - Project onto screen for whole class
- **Student exploration** - Hands-on learning with individual computers
- **Revision** - Students review stages before assessments
- **Remote learning** - Accessible from anywhere with a web browser

## Accessibility

The interface is designed with accessibility in mind:
- Clear color contrasts
- Large, readable fonts
- Intuitive button layouts
- Keyboard navigation support

## License

Created for educational purposes. Feel free to adapt and modify for your teaching needs.

## Support

For questions or feedback, please create an issue in the repository.

---

**Author:** Brickwork Lecturer  
**Version:** 1.0.0  
**Last Updated:** 2024