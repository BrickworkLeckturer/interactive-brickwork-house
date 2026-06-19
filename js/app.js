// Main Application Logic

const canvas = document.getElementById('canvas');
const scene = new BrickworkScene(canvas);

let currentLayer = 0;

// Layer button listeners
const layerBtns = document.querySelectorAll('.layer-btn');
layerBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => updateLayer(idx));
});

// Toggle buttons
const toggleBtns = document.querySelectorAll('.toggle-btn');
toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        toggleBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        console.log('View:', e.target.dataset.view);
    });
});

// Reset button
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
    updateLayer(0);
    scene.controls.autoRotate = true;
});

function updateLayer(layerIndex) {
    currentLayer = layerIndex;
    scene.updateLayer(layerIndex);

    // Update UI
    layerBtns.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === layerIndex);
    });

    // Update panel content
    const layerData = layers[layerIndex];
    const layerInfoDiv = document.getElementById('layerInfo');
    const materialsListDiv = document.getElementById('materialsList');

    layerInfoDiv.innerHTML = `
        <h2>${layerData.title}</h2>
        <p>${layerData.description}</p>
        <div class="info-box">
            <strong>What you'll learn:</strong> ${layerData.learning}
        </div>
        <div class="stats">
            <div class="stat-item">
                <div class="stat-label">Height</div>
                <div class="stat-value">${layerData.depth}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Key Material</div>
                <div class="stat-value">${layerData.material}</div>
            </div>
        </div>
        <div class="info-box warning">
            <strong>⚠️ Health & Safety:</strong> ${layerData.safety}
        </div>
    `;

    materialsListDiv.innerHTML = layerData.materialsUsed
        .map(mat => {
            const parts = mat.split(' - ');
            return `
                <div style="margin: 8px 0; padding: 8px; background: #fff; border-radius: 3px;">
                    <strong>${parts[0]}</strong><br>
                    <span style="color: #666; font-size: 12px;">${parts[1] || ''}</span>
                </div>
            `;
        })
        .join('');
}

// Initialize
updateLayer(0);
scene.animate();

// Handle window resize
window.addEventListener('resize', () => scene.onWindowResize());

console.log('Interactive Brickwork House - Ready!');