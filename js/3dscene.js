// 3D Scene setup and geometry creation

class BrickworkScene {
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87ceeb);
        this.camera = new THREE.PerspectiveCamera(
            75,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        );
        this.camera.position.set(15, 15, 15);

        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowShadowMap;

        this.setupControls();
        this.setupLighting();
        this.createGround();
    }

    setupControls() {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 2;
    }

    setupLighting() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 15, 10);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(directionalLight);
    }

    createGround() {
        const geom = new THREE.BoxGeometry(30, 0.5, 30);
        const mat = new THREE.MeshStandardMaterial({ color: 0x8b7355 });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.y = -0.25;
        mesh.name = "ground";
        this.scene.add(mesh);
    }

    createConcrete() {
        const geom = new THREE.BoxGeometry(8, 1, 8);
        const mat = new THREE.MeshStandardMaterial({ color: 0xb0b0b0 });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.y = 0.5;
        mesh.name = "concrete";
        return mesh;
    }

    createDPC() {
        const geom = new THREE.BoxGeometry(8.1, 0.05, 8.1);
        const mat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.y = 1.025;
        mesh.name = "dpc";
        return mesh;
    }

    createBrickCourse(height, count = 1) {
        const group = new THREE.Group();
        for (let i = 0; i < count; i++) {
            const geom = new THREE.BoxGeometry(8.2, 0.075, 8.2);
            const mat = new THREE.MeshStandardMaterial({
                color: 0xb84627,
                roughness: 0.7,
                metalness: 0.1
            });
            const mesh = new THREE.Mesh(geom, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.position.y = height + (i * 0.1);
            group.add(mesh);
        }
        return group;
    }

    createCavityWall(innerOuter = 'inner') {
        const group = new THREE.Group();
        const color = innerOuter === 'inner' ? 0xc85a38 : 0xb84627;
        const offset = innerOuter === 'inner' ? -2.4 : 2.4;

        for (let i = 0; i < 12; i++) {
            const geom = new THREE.BoxGeometry(3.5, 0.075, 8.2);
            const mat = new THREE.MeshStandardMaterial({
                color: color,
                roughness: 0.7,
                metalness: 0.1
            });
            const mesh = new THREE.Mesh(geom, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.position.y = 1.2 + (i * 0.1);
            mesh.position.x = offset;
            group.add(mesh);
        }
        group.name = innerOuter === 'inner' ? 'cavity_inner' : 'cavity_outer';
        return group;
    }

    createFullWall() {
        const group = new THREE.Group();

        // Inner leaf
        for (let i = 0; i < 40; i++) {
            const geom = new THREE.BoxGeometry(3.5, 0.075, 8.2);
            const mat = new THREE.MeshStandardMaterial({
                color: 0xc85a38,
                roughness: 0.7
            });
            const mesh = new THREE.Mesh(geom, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.position.y = 1.2 + (i * 0.1);
            mesh.position.x = -2.4;
            group.add(mesh);
        }

        // Outer leaf
        for (let i = 0; i < 40; i++) {
            const geom = new THREE.BoxGeometry(3.5, 0.075, 8.2);
            const mat = new THREE.MeshStandardMaterial({
                color: 0xb84627,
                roughness: 0.7
            });
            const mesh = new THREE.Mesh(geom, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.position.y = 1.2 + (i * 0.1);
            mesh.position.x = 2.4;
            group.add(mesh);
        }

        group.name = 'walls_complete';
        return group;
    }

    createRoof() {
        const group = new THREE.Group();

        // Left rafter
        const leftGeom = new THREE.BoxGeometry(0.2, 0.2, 8.2);
        const leftMat = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        const leftRafter = new THREE.Mesh(leftGeom, leftMat);
        leftRafter.rotation.z = Math.PI / 6;
        leftRafter.position.y = 5.5;
        leftRafter.position.x = -2;
        leftRafter.castShadow = true;
        group.add(leftRafter);

        // Right rafter
        const rightGeom = new THREE.BoxGeometry(0.2, 0.2, 8.2);
        const rightMat = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        const rightRafter = new THREE.Mesh(rightGeom, rightMat);
        rightRafter.rotation.z = -Math.PI / 6;
        rightRafter.position.y = 5.5;
        rightRafter.position.x = 2;
        rightRafter.castShadow = true;
        group.add(rightRafter);

        // Ridge
        const ridgeGeom = new THREE.BoxGeometry(0.15, 0.15, 8.2);
        const ridgeMat = new THREE.MeshStandardMaterial({ color: 0x654321 });
        const ridge = new THREE.Mesh(ridgeGeom, ridgeMat);
        ridge.position.y = 5.8;
        ridge.castShadow = true;
        group.add(ridge);

        // Roof tiles
        const tileGeom = new THREE.BoxGeometry(5, 0.05, 8.3);
        const tileMat = new THREE.MeshStandardMaterial({ color: 0x444444 });
        const tiles = new THREE.Mesh(tileGeom, tileMat);
        tiles.rotation.z = Math.PI / 6;
        tiles.position.y = 5.2;
        tiles.castShadow = true;
        group.add(tiles);

        group.name = 'roof';
        return group;
    }

    updateLayer(layerIndex) {
        // Remove all scene objects except ground and lights
        this.scene.children.forEach(child => {
            if (child.name !== 'ground' && child.name !== undefined && 
                !(child instanceof THREE.Light)) {
                this.scene.remove(child);
            }
        });

        // Add objects for this layer
        const layerData = layers[layerIndex];
        const objectsToAdd = layerData.objects;

        if (objectsToAdd.includes('concrete')) {
            this.scene.add(this.createConcrete());
        }
        if (objectsToAdd.includes('dpc')) {
            this.scene.add(this.createDPC());
        }
        if (objectsToAdd.includes('brick1')) {
            const brickCourse = this.createBrickCourse(1.1, 1);
            this.scene.add(brickCourse);
        }
        if (objectsToAdd.includes('cavity_inner')) {
            this.scene.add(this.createCavityWall('inner'));
        }
        if (objectsToAdd.includes('cavity_outer')) {
            this.scene.add(this.createCavityWall('outer'));
        }
        if (objectsToAdd.includes('lift1')) {
            this.scene.add(this.createFullWall());
        }
        if (objectsToAdd.includes('walls_complete')) {
            this.scene.add(this.createFullWall());
        }
        if (objectsToAdd.includes('roof')) {
            this.scene.add(this.createRoof());
        }

        // Focus camera on layer
        this.focusCameraOnLayer();
    }

    focusCameraOnLayer() {
        const boundingBox = new THREE.Box3();
        this.scene.traverse(child => {
            if (child.geometry) {
                boundingBox.expandByObject(child);
            }
        });

        if (!boundingBox.isEmpty()) {
            const center = boundingBox.getCenter(new THREE.Vector3());
            const size = boundingBox.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = this.camera.fov * (Math.PI / 180);
            let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
            cameraZ *= 1.5;

            this.camera.position.set(
                center.x + cameraZ * 0.7,
                center.y + cameraZ * 0.5,
                center.z + cameraZ * 0.7
            );
            this.controls.target.copy(center);
            this.controls.update();
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}